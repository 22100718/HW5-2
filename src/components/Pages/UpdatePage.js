import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdatePage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [updateCount, setUpdateCount] = useState(0);

  // 학생 정보 가져오기
  useEffect(() => {
    fetch(`https://672819eb270bd0b975546065.mockapi.io/api/v1/students/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => console.error(err));
  }, [id]);

  // 값 변경 처리
  const handleChange = (field, value) => {
    const updatedStudent = { ...student, [field]: value };
    setStudent(updatedStudent);
    setUpdateCount((prev) => prev + 1);

    // 즉시 서버로 업데이트 요청
    fetch(`https://672819eb270bd0b975546065.mockapi.io/api/v1/students/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStudent),
    }).catch((err) => console.error(err));
  };

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Update Student</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={student.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={student.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="major" className="form-label">
            Major
          </label>
          <input
            type="text"
            className="form-control"
            id="major"
            value={student.major}
            onChange={(e) => handleChange("major", e.target.value)}
          />
        </div>
      </form>
      <p>Total Updates: {updateCount}</p>
    </div>
  );
};

export default UpdatePage;

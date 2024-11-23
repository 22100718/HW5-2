import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListPage = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", age: "", major: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://672819eb270bd0b975546065.mockapi.io/api/v1/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();

    fetch("https://672819eb270bd0b975546065.mockapi.io/api/v1/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Student added successfully!");
        navigate(0); // 페이지 새로고침
      })
      .catch((error) => console.error("Error adding student:", error));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Students List</h1>

      {/* 학생 리스트 */}
      <ul className="list-group mb-4">
        {students.map((student) => (
          <li
            key={student.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{student.name}</strong>
            </div>
            <div>
              <Link to={`/detail/${student.id}`} className="btn btn-info d-block mb-2">
                View Details
              </Link>
              <br/>
              <Link to={`/update/${student.id}`} className="btn btn-warning d-block">
                Update
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {/* 학생 추가 버튼과 폼 */}
      <div className="card">
        <div className="card-header">Add New Student</div>
        <div className="card-body">
          <form onSubmit={handleAddStudent}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={newStudent.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={newStudent.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Major</label>
              <input
                type="text"
                className="form-control"
                name="major"
                value={newStudent.major}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Add Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListPage;

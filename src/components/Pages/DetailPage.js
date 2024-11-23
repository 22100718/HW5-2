import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`https://672819eb270bd0b975546065.mockapi.io/api/v1/students/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Student Details</h1>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Age:</strong> {student.age}
      </p>
      <p>
        <strong>Major:</strong> {student.major}
      </p>
    </div>
  );
};

export default DetailPage;

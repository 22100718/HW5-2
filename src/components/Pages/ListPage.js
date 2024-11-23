import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://672819eb270bd0b975546065.mockapi.io/api/v1/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Students List</h1>
      <ul className="list-group">
        {students.map((student) => (
          <li
            key={student.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{student.name}</strong>
            </div>
            <div>
              <Link to={`/detail/${student.id}`} className="btn btn-info me-2">
                View Details
              </Link>
              <br></br>
              <Link to={`/update/${student.id}`} className="btn btn-warning">
                Update
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;

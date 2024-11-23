import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListPage from "./components/Pages/ListPage";
import DetailPage from "./components/Pages/DetailPage";
import UpdatePage from "./components/Pages/UpdatePage";

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center">
                <h1>Welcome to Student Management</h1>
                <div className="mt-3">
                  <Link to="/list" className="btn btn-primary me-2">
                    Go to Student List
                  </Link>
                </div>
              </div>
            }
          />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

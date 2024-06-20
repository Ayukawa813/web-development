import React from 'react';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { FiCheckCircle, FiMoreVertical } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();

  const assignments = db.assignments.filter(assignment => assignment.course === cid);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="search-field d-flex align-items-center">
          <BsSearch className="text-muted" />
          <input type="text" className="form-control ml-2" placeholder="Search for Assignments" />
        </div>
        <div>
          <button className="btn btn-outline-secondary"><BsPlus /> Group</button>
          <button className="btn btn-primary"><BsPlus /> Assignment</button>
        </div>
      </div>
      <h3>ASSIGNMENTS</h3>
      <ul className="list-group">
        {assignments.map(assignment => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: '5px solid green' }}>
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="flex-grow-1 text-decoration-none">
              <strong>{assignment.title}</strong>
              <small className="text-muted d-block">{assignment.title}</small>
            </Link>
            <div>
              <FiCheckCircle className="text-success" />
              <FiMoreVertical />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

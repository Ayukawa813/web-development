import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string;
  description: string;
}

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: React.Dispatch<React.SetStateAction<Course>>;
  addNewCourse: () => Promise<void>;
  deleteCourse: (courseId: string) => Promise<void>;
  updateCourse: () => Promise<void>;
}


const Dashboard: React.FC<DashboardProps> = () => {
  const [courses, setCourses] = useState<Course[]>(db.courses);
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description"
  });

  const updateCourse = () => {
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
  };

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>New Course
        <button className="btn btn-primary float-end" onClick={addNewCourse}>Add</button>
        <button className="btn btn-warning float-end me-2" onClick={updateCourse}>Update</button>
      </h5>
      <br />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                <div className="card rounded-3 overflow-hidden">
                  <img src={course.image || "/images/default.jpg"} alt={course.name} height="160" />
                  <div className="card-body">
                    <span className="wd-dashboard-course-link" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: "53px", overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                      id="wd-edit-course-click">
                      Edit
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

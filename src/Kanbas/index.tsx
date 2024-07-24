import KanbasNavigation from "./Navigation";

import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Dashboard";

import * as client from "./Courses/client";
import Courses from "./Courses";
import { useState } from "react";


export default function Kanbas() {

  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({});


  const addNewCourse = async () => {

    const newCourse = await client.createCourse(course);

    setCourses([ ...courses, newCourse ]);

  };

  const deleteCourse = async (courseId: string) => {

    await client.deleteCourse(courseId);

    setCourses(courses.filter(

      (c) => c._id !== courseId));

  };

  const updateCourse = async () => {

    await client.updateCourse(course);

    setCourses(

      courses.map((c) => {

        if (c._id === course.id) {

          return course;

        } else {

          return c;

        }

      })

    );

  };

  return (

    <div id="wd-kanbas" className="h-100">

    <div className="d-flex h-100">

      <div className="d-none d-md-block bg-black">

        <KanbasNavigation />

      </div>

      <div className="flex-fill p-4">

        <Routes>

          <Route path="/" element={<Navigate to="Dashboard" />} />

          <Route path="Account" element={<h1>Account</h1>} />

          <Route path="Dashboard" element={

            <Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}
            />

          } />

          <Route path="Courses/:cid/*" element={<Courses courses={courses} />} />
        </Routes>

      </div>

    </div>

    </div>);}
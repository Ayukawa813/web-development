import React from 'react';
import { useParams } from "react-router";
import db from "../../Database";
import { BsGripVertical } from 'react-icons/bs';
import ModulesControls from "./ModulesControls";
import LessonControlButtons from './LessonControlButtons';

export default function Modules() {
  const { cid } = useParams();

  const modulesForCourse = db.modules.filter(module => module.course === cid);

  return (
    <div>
      <div id="wd-modules">
        <ModulesControls />
        <ul className="list-group rounded-0">
          {modulesForCourse.map((module, index) => (
            <li key={index} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

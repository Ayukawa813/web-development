import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import * as client from "./client";  // 假设这是进行 API 调用的工具模块
import ModulesControls from './ModulesControls';

interface Module {
  _id: string;
  name: string;
  course: string;
  lessons: Lesson[];
}

interface Lesson {
  name: string;
}

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [modules, setModules] = useState<Module[]>([]);
  const [moduleName, setModuleName] = useState("");

  useEffect(() => {
    const fetchModules = async () => {
      if (cid) {
        const fetchedModules = await client.findModulesForCourse(cid);
        setModules(fetchedModules); 
      }
    };

    fetchModules();
  }, [cid]);

  const createModule = async (moduleName: string) => {
    if (cid && moduleName) {
      const newModule = await client.createModule(cid, { name: moduleName, course: cid });
      setModules(prevModules => [...prevModules, newModule]);  // 添加新模块到本地状态
      setModuleName("");  // 清空输入字段
    }
  };

  const deleteModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);  // 发送删除请求
    setModules(prevModules => prevModules.filter(module => module._id !== moduleId));  // 更新本地状态
  };

  return (
    <div id="wd-modules">
      <ModulesControls 
        moduleName={moduleName} 
        setModuleName={setModuleName} 
        addModule={() => createModule(moduleName)}
      />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: Module) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              {module.name}
              <button onClick={() => deleteModule(module._id)}>Delete</button>
              <button onClick={() => setModuleName(module.name)}>Edit</button>  {/* 简化示例，仅更新名称 */}
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {module.lessons.map((lesson: Lesson, lessonIndex: number) => (
                <li key={lessonIndex} className="wd-lesson list-group-item p-3 ps-1">
                  {lesson.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

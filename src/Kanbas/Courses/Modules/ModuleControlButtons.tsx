import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';
import ModuleEditor from "./ModuleEditor";

interface ModuleControlButtonsProps {
  setModuleName: (name: string) => void;
  moduleName: string;
  addModule: () => void;
}

const ModuleControlButtons: React.FC<ModuleControlButtonsProps> = ({ setModuleName, moduleName, addModule }) => {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <button className="btn p-0" data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
        <BsPlus className="fs-4 mx-2" />
      </button>
      <IoEllipsisVertical className="fs-4" />
      <ModuleEditor dialogTitle="Add Module" moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
    </div>
  );
};

export default ModuleControlButtons;

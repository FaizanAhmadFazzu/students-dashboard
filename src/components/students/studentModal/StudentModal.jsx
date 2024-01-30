import React, { useContext } from "react";
import { StudentContext } from "../../../context/StudentContext";
import "./style.css";

function StudentModal({ children }) {
  const { closeModal } = useContext(StudentContext);
  return (
    <div className="modalContainer" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default StudentModal;

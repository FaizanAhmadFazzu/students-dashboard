import React, { useContext } from "react";
import { StudentContext } from "../../../context/StudentContext";
import StudentForm from "../studentForm/StudentForm";
import { FaWindowClose } from "react-icons/fa";
import "./style.css";

function AddStudent() {
  const {
    allStudents,
    setAllStudents,
    students,
    setStudents,
    closeModal,
    setCurrentPage,
  } = useContext(StudentContext);
  const addStudent = (student) => {
    setAllStudents([student, ...allStudents]);
    setStudents([student, ...students]);
    setCurrentPage(1);
    closeModal();
  };

  return (
    <div className="addStudent">
      <div>
        <h2 className="title">Add Student</h2>
        <FaWindowClose className="icon" onClick={closeModal} />
      </div>
      <StudentForm handleOnSubmit={addStudent} />
    </div>
  );
}

export default AddStudent;

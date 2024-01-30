import React from "react";
import { useContext } from "react";
import { StudentContext } from "../../../context/StudentContext";
import "./style.css";

function DeleteStudent() {
  const {
    allStudents,
    setAllStudents,
    students,
    setStudents,
    closeModal,
    deleteStudentId,
  } = useContext(StudentContext);

  const handleDelete = () => {
    const newAllStudents = allStudents.filter(
      (el) => el.id !== deleteStudentId
    );
    setAllStudents(newAllStudents);
    const newStudents = students.filter((el) => el.id !== deleteStudentId);
    setStudents(newStudents);
    closeModal();
  };
  return (
    <div className="deleteStudent">
      <h2 className="title">Delete Student</h2>
      <h3 className="subtitle">
        Are you sure you want to delete this student?
      </h3>
      <button onClick={handleDelete}>Confirm</button>
    </div>
  );
}

export default DeleteStudent;

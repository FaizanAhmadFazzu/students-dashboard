import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { StudentContext } from "../../../context/StudentContext";
import StudentForm from "../studentForm/StudentForm";
import "./style.css";

function EditStudent() {
  const {
    allStudents,
    students,
    setStudents,
    editStudentId,
    setAllStudents,
    closeModal,
  } = useContext(StudentContext);
  const studentToEdit = allStudents.find((item) => item.id === editStudentId);

  const updateStudent = (student) => {
    const newAllStudents = allStudents.map((item) =>
      item.id === student.id ? student : item
    );
    setAllStudents(newAllStudents);
    const newStudents = students.map((item) =>
      item.id === student.id ? student : item
    );
    setStudents(newStudents);
    closeModal();
  };

  return (
    <div className="editStudent">
      <div>
        <h2 className="title">Edit Student</h2>
        <FaWindowClose className="icon" onClick={closeModal} />
      </div>
      <StudentForm student={studentToEdit} handleOnSubmit={updateStudent} />
    </div>
  );
}

export default EditStudent;

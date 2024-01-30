import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { StudentContext } from "../../context/StudentContext";
import AddStudent from "./addStudent/AddStudent";
import DeleteStudent from "./deleteStudent/DeleteStudent";
import EditStudent from "./editStudent/EditStudent";
import Pagination from "./pagination/Pagination";
import StudentModal from "./studentModal/StudentModal";
import StudentList from "./studentsList/StudentList";
import "./style.css";

function StudentsList() {
  const { allStudents, openModal, showModal, deleteStudentId, editStudentId } =
    useContext(StudentContext);

  return (
    <div className="studentsContainer">
      <div class="header">
        <h1>Students Management System</h1>
        <button className="button addBtn" onClick={openModal}>
          <FaPlus className="icon" />
          <span>Add New Student</span>
        </button>
      </div>
      {allStudents && allStudents.length > 0 ? (
        <>
          <StudentList />
          <Pagination />
        </>
      ) : (
        <p className="noRecord">
          No students available, please add some students
        </p>
      )}
      {showModal && (
        <StudentModal>
          {deleteStudentId ? (
            <DeleteStudent />
          ) : editStudentId ? (
            <EditStudent />
          ) : (
            <AddStudent />
          )}
        </StudentModal>
      )}
    </div>
  );
}
export default StudentsList;

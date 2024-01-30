import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

export const StudentContextProvider = ({ children }) => {
  const [allStudents, setAllStudents] = useState([]);
  const [students, setStudents] = useState(allStudents);
  const [showModal, setShowModal] = useState(false);
  const [deleteStudentId, setDeleteStudentId] = useState(null);
  const [editStudentId, setEditStudentId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = students.length;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = students.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    deleteStudentId && setDeleteStudentId(null);
    editStudentId && setEditStudentId(null);
    setShowModal(false);
  };

  const fetchData = async () => {
    try {
      const res = await fetch("data.json");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setAllStudents(data);
      setStudents(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        allStudents,
        openModal,
        closeModal,
        setDeleteStudentId,
        setEditStudentId,
        showModal,
        deleteStudentId,
        editStudentId,
        setAllStudents,
        students,
        setStudents,
        handlePageChange,
        currentItems,
        totalPages,
        currentPage,
        startIndex,
        setCurrentPage,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

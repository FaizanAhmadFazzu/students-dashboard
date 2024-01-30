import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../../context/StudentContext";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import "./style.css";

function StudentList() {
  const {
    allStudents,
    students,
    setStudents,
    openModal,
    setDeleteStudentId,
    setEditStudentId,
    currentItems,
    startIndex,
  } = useContext(StudentContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProperty, setFilterProperty] = useState("");
  const [sortProperty, setSortProperty] = useState("");

  const searchItems = () => {
    const newStudents = allStudents.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (sortProperty)
      newStudents.sort((a, b) => a[sortProperty] - b[sortProperty]);
    setStudents(newStudents);
  };

  const filterItems = () => {
    const newStudents = allStudents.filter(
      (item) => item.gender.toLowerCase() === filterProperty.toLowerCase()
    );
    if (sortProperty)
      newStudents.sort((a, b) => a[sortProperty] - b[sortProperty]);
    setStudents(newStudents);
  };

  const searchAndFilterItems = () => {
    const newStudents = allStudents.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        item.gender.toLowerCase() === filterProperty.toLowerCase()
    );
    if (sortProperty)
      newStudents.sort((a, b) => a[sortProperty] - b[sortProperty]);
    setStudents(newStudents);
  };

  const sortItems = () => {
    const sortedStudents = [...students];
    sortedStudents.sort((a, b) => a[sortProperty] - b[sortProperty]);
    setStudents(sortedStudents);
  };
  const getAllItems = () => {
    const newStudents = [...allStudents];
    if (sortProperty)
      newStudents.sort((a, b) => a[sortProperty] - b[sortProperty]);
    setStudents(newStudents);
  };
  useEffect(() => {
    if (searchQuery && filterProperty) searchAndFilterItems();
    else if (searchQuery) searchItems();
    else if (filterProperty) filterItems();
    else if (!searchQuery && !filterProperty) getAllItems();
  }, [searchQuery, filterProperty]);

  useEffect(() => {
    sortProperty && sortItems();
  }, [sortProperty]);

  const handleDelete = (studentId) => {
    setDeleteStudentId(studentId);
    openModal();
  };

  const handleEdit = (studentId) => {
    setEditStudentId(studentId);
    openModal();
  };

  return (
    <>
      <div className="tableHeader">
        <div className="searchContainer">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="search"
            placeholder="Search..."
            className="search"
          />
          <button>
            <FaSearch />
          </button>
        </div>
        <div>
          <select
            value={sortProperty}
            onChange={(e) => setSortProperty(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="age">Age</option>
            <option value="class">Class</option>
          </select>
          <select
            value={filterProperty}
            onChange={(e) => setFilterProperty(e.target.value)}
          >
            <option value="">Filter</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="tableContent">
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems &&
              currentItems.length > 0 &&
              currentItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{startIndex + 1 + index}</td>
                  <td>{item?.name}</td>
                  <td>{item?.gender}</td>
                  <td>{item?.age}</td>
                  <td>{item?.class}</td>
                  <td className="actionBtn">
                    <button onClick={() => handleEdit(item.id)}>
                      <FaEdit className="icon" />
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      <FaTrash className="icon" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {students && students.length === 0 && (
          <p className="noRecord">No Record Found</p>
        )}
      </div>
    </>
  );
}

export default StudentList;

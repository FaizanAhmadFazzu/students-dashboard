import React, { useContext } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { StudentContext } from "../../../context/StudentContext";
import "./style.css";

function Pagination() {
  const { totalPages, currentPage, handlePageChange } =
    useContext(StudentContext);
  return (
    <div className="pagination">
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <FaAngleLeft className="icon" />
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <FaAngleRight className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;

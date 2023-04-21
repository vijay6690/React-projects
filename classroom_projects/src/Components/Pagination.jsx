import React from "react";

export default function Pagination({ totalPosts, postPerPage, paginate }) {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      {pageNumbers.map((num) => (
        <li key={num} className="page-item">
          <a href="#" onClick={() => paginate(num)} className="page-link">
            {num}
          </a>
        </li>
      ))}
    </nav>
  );
}

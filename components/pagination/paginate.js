import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ onClick, pageCount }) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={3}
      pageRangeDisplayed={2}
      onPageChange={onClick}
      activeClassName={"active"}
      initialPage={0}
    />
  );
};

export default Paginate;

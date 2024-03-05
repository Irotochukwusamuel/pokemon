"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Paginator({ page, setPage, total_pages }) {
  const nextPage = () => {
    page < total_pages && setPage(page + 1);
  };

  const prevPage = () => {
    page > 1 && setPage(page - 1);
  };

  const setCurrentPage = (index) => {
    setPage(index);
  };

  return (
    <div className="flex justify-between items-center w-2/4 m-auto mt-10">
      <FaChevronLeft
        className="cursor-pointer"
        onClick={prevPage}
        width="16"
        height="16"
        fill="gray"
      />
      {Array.from(Array(total_pages)).map((_, index) => (
        <div
          key={index}
          onClick={setCurrentPage.bind(this, index)}
          className={`${
            page === index ? `bg-gray-200` : ``
          } p-2 rounded-full w-10 h-10  flex justify-center items-center cursor-pointer`}
        >
          <p>{index + 1}</p>
        </div>
      ))}
      <FaChevronRight
        className="cursor-pointer"
        onClick={nextPage}
        width="16"
        height="16"
        fill="gray"
      />
    </div>
  );
}

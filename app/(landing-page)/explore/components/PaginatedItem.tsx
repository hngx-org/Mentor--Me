"use client";

import React, { useState } from "react";
import Pagination from "./Pagination";

export default function PaginatedItem() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You can add logic here to fetch data for the new page if needed.
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

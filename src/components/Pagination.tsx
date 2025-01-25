
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2} alignItems="center" sx={{ marginY: 4 }}>
      <Pagination 
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="standard"
        shape="rounded"
        size="large"
      
      />
    </Stack>
  );
};

export default PaginationComponent;

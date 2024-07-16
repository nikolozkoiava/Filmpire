import { Typography, Button } from "@mui/material";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className="flex justify-center items-center">
      <Button
        className="py-[30px] px-[2px]"
        variant="contained"
        color="primary"
        type="button"
        onClick={handlePrev}
      >
        Prev
      </Button>
      <Typography variant="h4" className="py-0 px-[20px]">
        {currentPage}
      </Typography>
      <Button
        className=""
        variant="contained"
        color="primary"
        type="button"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;

import { useState } from 'react';
import Grid from './Grid';

const Pagination = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 100;

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1 >= 0 ? page - 1 : 0);
  };

  return (
    <div>
      <Grid page={page} itemsPerPage={itemsPerPage} />
      <div className="flex justify-between mt-4">
        <button onClick={handlePrev} className="p-2 bg-gray-300">
          Previous
        </button>
        <button onClick={handleNext} className="p-2 bg-gray-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

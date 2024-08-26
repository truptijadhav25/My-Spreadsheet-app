import Cell from './Cell';

const Grid = () => {
  const rows = Array.from({ length: 20 });
  const cols = Array.from({ length: 50 });

  return (
    <div className="grid grid-cols-50 gap-1">
      {rows.map((_, rowIndex) =>
        cols.map((_, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} />
        ))
      )}
    </div>
  );
};

export default Grid;

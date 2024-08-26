import React, { useState } from 'react';
import useStore from '../store/index';  // Import the store

const Cell = ({ row, col }) => {
    const [value, setValue] = useState('');
    const updateCell = useStore((state) => state.updateCell);  // Correctly get updateCell from the store

    const handleChange = (e) => {
        setValue(e.target.value);
        if (updateCell) {  // Ensure updateCell is defined before calling
            updateCell(row, col, e.target.value);  // Call updateCell with row, col, and the new value
        } else {
            console.error('updateCell is not a function');
        }
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            className="p-2 border border-gray-300"
        />
    );
};

export default Cell;

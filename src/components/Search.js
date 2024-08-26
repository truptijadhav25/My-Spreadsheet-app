import React from 'react';
import useStore from '../store/index';  // Import the store

const Search = () => {
    const searchQuery = useStore((state) => state.searchQuery);
    const setSearchQuery = useStore((state) => state.setSearchQuery);  // Correctly get setSearchQuery from the store

    const handleChange = (e) => {
        if (typeof setSearchQuery === 'function') {  // Ensure setSearchQuery is a function
            setSearchQuery(e.target.value);  // Use setSearchQuery to update the state
        } else {
            console.error('setSearchQuery is not a function');
        }
    };

    return (
        <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search..."
            className="p-2 border border-gray-300"
        />
    );
};

export default Search;

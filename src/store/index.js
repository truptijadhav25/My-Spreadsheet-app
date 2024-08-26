import { create } from 'zustand';

const useStore = create((set) => ({
    cells: {},
    searchQuery: '',
    filteredCells: {},

    // Function to update the cell data
    updateCell: (row, col, content) => set((state) => ({
        cells: {
            ...state.cells,
            [`${row}-${col}`]: content,
        },
        filteredCells: state.searchQuery
            ? Object.fromEntries(Object.entries(state.cells).filter(([key, value]) => value.includes(state.searchQuery)))
            : state.cells,
    })),

    // Function to update the search query
    setSearchQuery: (query) => set((state) => ({
        searchQuery: query,
        filteredCells: query
            ? Object.fromEntries(Object.entries(state.cells).filter(([key, value]) => value.includes(query)))
            : state.cells,
    })),

    // Other state and actions
}));

export default useStore;

import { create } from "zustand";

const useStore = create((set) => ({
    selectedCell: null,
    setSelectedCell: (selectedCell) => {
        set((state) => ({ selectedCell: selectedCell }))
    }
}))

export default useStore;
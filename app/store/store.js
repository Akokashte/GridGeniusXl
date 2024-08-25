import { create } from "zustand";
import { initialGrid } from "@/utils/initialGrid";

const useStore = create((set) => ({
    selectedCell: {
        rowIndex: 0,
        colIndex: 0
    },
    grid: initialGrid,

    setSelectedCell: (selectedCell) => {
        set((state) => ({ selectedCell: selectedCell }))
    },
    setGridData: (gridData) => {
        set((state) => ({ grid: gridData }))
    },
    setFormatAtIndex:(rowIndex,colIndex,formatedStyle)=>{
        set((state)=>{
            const newGrid = state.grid.map((row, rIdx) =>
                row.map((cell, cIdx) =>(
                    rIdx === rowIndex && cIdx === colIndex
                      ? {...cell,cellFormat:formatedStyle}
                      : cell
                )
                )
              )
              return { grid: newGrid };
        })
    }
}))

export default useStore;
import { create } from "zustand";
import { initialGrid } from "@/utils/initialGrid";

const useStore = create((set) => ({
    selectedCell: {
        rowIndex: 0,
        colIndex: 0,
    },
    grid: initialGrid,
    undoStack: [],
    redoStack: [],

    setSelectedCell: (selectedCell) => {
        set((state) => ({ selectedCell: selectedCell }));
    },

    setGridData: (gridData) => {
        set((state) => ({
            grid: gridData,
        }));
    },

    setFormatAtIndex: (rowIndex, colIndex, formatedStyle) => {
        set((state) => {
            const newGrid = state.grid.map((row, rIdx) =>
                row.map((cell, cIdx) =>
                    rIdx === rowIndex && cIdx === colIndex
                        ? { ...cell, cellFormat: formatedStyle }
                        : cell
                )
            );
            return {
                grid: newGrid,
                undoStack: [...state.undoStack, [...newGrid]],
            };
        });
    },

    undo: () => {
        set((state) => {
            console.log("kay re",state.undoStack)
              if (state.undoStack.length === 0) {
                return state;
              }

              const prevGrid = state.undoStack[state.undoStack.length - 1];
              const newUndoStack = state.undoStack.slice(0, -1);
              console.log("mast",prevGrid)
              return {
                grid: prevGrid,
                undoStack: newUndoStack,
                redoStack: [...state.redoStack, [...prevGrid]],
              };
        });
    },

    redo: () => {
        set((state) => {
            if (state.redoStack.length === 0) {
                return state;
            }

            const nextGrid = state.redoStack[state.redoStack.length - 1];
            const newRedoStack = state.redoStack.slice(0, -1);

            return {
                grid: nextGrid,
                redoStack: newRedoStack,
                undoStack: [...state.undoStack, [...nextGrid]],
            };
        });
    },
}));

export default useStore;

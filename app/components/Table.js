"use client";
import useStore from "../store/store";
import { useState } from "react";

const Table = ({ initialGrid }) => {
  // const [selected,setSelected] = useState()
  const [grid, setGrid] = useState(initialGrid);
  const {selectedCell,setSelectedCell} = useStore()

  const handleCellChange = (rowIndex, colIndex, cellValue) => {
    let newGrid = [...grid];
    newGrid[rowIndex][colIndex] = cellValue;
    setGrid(newGrid);
  };
  
  // console.log(grid)
  console.log("nice",selectedCell)
  const handleSelection=(rowIndex,colIndex)=>{
    console.log(rowIndex,colIndex)
    setSelectedCell({rowIndex,colIndex})
  }
  // console.log(initialGrid);
  return (
    <>
      <div className="w-full h-[25.8rem] overflow-auto p-2">
        <table className="table-auto overflow-auto w-full ">
          <tbody>
            {grid.map((curRow, rowIndex) => (
              <tr key={rowIndex}>
                {curRow.map((curCell, colIndex) => (
                  <td
                    key={colIndex}
                    className="text-slate-800 text-center outline outline-1 "
                  >
                    <input
                      type="text"
                      value={curCell.value}
                      className={selectedCell.rowIndex===rowIndex && selectedCell.colIndex===colIndex ?"w-full h-full text-center bg-transparent border-none outline-none text-red-400":"w-full h-full text-center bg-transparent border-none outline-none"}
                      onChange={(e) =>
                        handleCellChange(rowIndex, colIndex, e.target.value)
                      }
                      onClick={()=>handleSelection(rowIndex,colIndex)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

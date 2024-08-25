"use client";

import { useState } from "react";

const Table = ({ initialGrid }) => {
  const [grid, setGrid] = useState(initialGrid);

  const handleCellChange = (rowIndex, colIndex, cellValue) => {
    const newGrid = [...initialGrid];
    newGrid[(rowIndex, colIndex)] = cellValue;
    setGrid(newGrid);
  };
  console.log(initialGrid);
  return (
    <>
      <div className="w-full h-[25.8rem] overflow-auto p-2">
        <table className="table-auto overflow-auto w-full ">
          {/* <thead>
                    <tr>
                        <th>firest</th>
                        <th>firest</th>
                        <th>firest</th>
                        <th>firest</th>
                    </tr>
                </thead> */}
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
                      className="w-full h-full text-center bg-transparent border-none outline-none"
                      onChange={(e) =>
                        handleCellChange(rowIndex, colIndex, e.target.value)
                      }
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

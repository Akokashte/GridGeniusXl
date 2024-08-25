"use client"

import { useState } from "react";

const Table = ({ initialGrid }) => {
    const [grid, setGrid] = useState(initialGrid)

    const handleCellChange = (rowIndex, colIndex, cellValue) => {
        const newGrid = [...initialGrid]
        newGrid[rowIndex, colIndex] = cellValue;
        setGrid(newGrid);
    }

    console.log(initialGrid)
    return (
        <>
        <div className="p-2">
            <table className="table-auto overflow-auto w-full h-96 ">
                {/* <thead>
                    <tr>
                        <th>firest</th>
                        <th>firest</th>
                        <th>firest</th>
                        <th>firest</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        grid.map((curRow, rowIndex) => (
                            <tr key={rowIndex}>
                                {
                                    curRow.map((curCell, colIndex) => (
                                        <td key={colIndex}
                                            className="bg-red"
                                        // onChange={() => handleCellChange(rowIndex, colIndex, e.target.value)}
                                        >
                                            {curCell.value || "hi"}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Table;
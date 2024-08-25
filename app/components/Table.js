"use client";
import useStore from "../store/store";

const Table = () => {
  const {selectedCell,grid,setSelectedCell,setGridData} = useStore()

  const handleCellChange = (rowIndex, colIndex, cellValue) => {
    let newGrid = [...grid];
    newGrid[rowIndex][colIndex] = cellValue;
    setGridData(newGrid);
  };

  console.log(grid)
  
  console.log("nice",selectedCell)
  const handleSelection=(rowIndex,colIndex)=>{
    console.log(rowIndex,colIndex)
    setSelectedCell({rowIndex,colIndex})
  }

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
                      className={selectedCell.rowIndex===rowIndex && selectedCell.colIndex===colIndex ? `w-full h-full text-center bg-transparent border-none outline-none text-red-400 ${curCell.cellFormat}` : `w-full h-full text-center bg-transparent border-none outline-none ${curCell.cellFormat}`}
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

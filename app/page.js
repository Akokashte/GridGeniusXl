"use client";

import { LuUndo2, LuRedo2 } from "react-icons/lu";
import React from "react";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

import Table from "./components/Table";
import useStore from "./store/store";

export default function Home() {
  const { grid, selectedCell, setFormatAtIndex } = useStore()

  const handleFontChange = (e) => {
    const formatedStyle = e.target.value
    const { rowIndex, colIndex } = selectedCell;
    console.log(formatedStyle)
    setFormatAtIndex(rowIndex, colIndex, formatedStyle)
  }

  const handleAlignMent = (alignment) => {
    const { rowIndex, colIndex } = selectedCell;
    const currentCellFormat = grid[rowIndex][colIndex].cellFormat;
    const currentCellFormatWithSplit = grid[rowIndex][colIndex].cellFormat.split();
    if(!currentCellFormatWithSplit.includes(alignment)){
      const formatedStyle = currentCellFormat + " " + alignment
      setFormatAtIndex(rowIndex, colIndex, formatedStyle)
    }
    else{
      alert("already aligned",alignment)
    }
  }
  return (
    <main className="flex h-screen flex-col items-center p-10 bg-slate-800 overflow-auto">
      <div className="bg-slate-100 flex-col  w-full h-full justify-center rounded-md relative">
        {/* Features Section */}
        <div className="px-3 py-1 @media bg-slate-200 w-full h-auto rounded-r-md  rounded-b-md items-center flex flex-wrap gap-3 ">
          <h1 className="bg-red-400 rounded-t text-lg px-2 font-mono text-center font-extrabold tracking-wide cursor-default select-none absolute left-0 -top-7 text-slate-800">
            MS Excel App
          </h1>

          {/* Undo Redo */}
          <div className="w-max h-10 justify-center items-center flex gap-3">
            <LuUndo2 className="cursor-pointer text-black hover:text-red-500" />
            <LuRedo2 className="cursor-pointer text-black hover:text-red-500" />
          </div>

          {/* Search/Filter */}
          <div className="w-max ml-4">
            <input
              className="w-11/12 rounded-md p-1 text-black text-sm bg-slate-100 hover:bg-white"
              placeholder="Search/Filter"
            />
          </div>

          {/* Left Center Right */}
          <div className="flex gap-4 ml-6">
            <FaAlignLeft className="cursor-pointer text-black hover:text-red-500 " onClick={() => handleAlignMent("text-left")} />
            <FaAlignCenter className="cursor-pointer text-black hover:text-red-500" onClick={() => handleAlignMent("text-center")} />
            <FaAlignRight className="cursor-pointer text-black hover:text-red-500" onClick={() => handleAlignMent("text-right")} />
          </div>

          {/* Fonts */}
          <div className="w-max ml-6">
            <select className="p-1 rounded-md w-full text-center text-sm text-black  bg-slate-100 hover:bg-white cursor-pointer"
            >
              <option value="Select Font" disabled selected>
                Select Font
              </option>
              <option value="">font 1</option>
              <option value="">font 2</option>
              <option value="">font 3</option>
              <option value="">font 4</option>
              <option value="">font 5</option>
              <option value="">font 6</option>
              <option value="">font 7</option>
            </select>
          </div>

          {/* Font Size */}
          <div className="flex gap-2 items-center justify-center ml-6">
            <select className="p-1 rounded-md w-16 text-center text-sm text-black  bg-slate-100 hover:bg-white cursor-pointer"
              onChange={handleFontChange}
            >
              <option value="text-xs">8</option>
              <option value="text-sm">10</option>
              <option value="text-base">12</option>
              <option value="text-lg">14</option>
              <option value="text-xl">16</option>
              <option value="text-2xl">18</option>
              <option value="text-3xl">20</option>
            </select>
          </div>

          <div className="flex gap-1 items-center justify-center ml-6">
            <h1 className="text-sm text-slate-950 font-medium">Add Row</h1>
            <IoIosAdd className="cursor-pointer text-black hover:text-red-500 size-5" />
          </div>

          <div className="flex gap-1 items-center justify-center ml-6">
            <h1 className="text-sm text-slate-950 font-medium">Add Column</h1>
            <IoIosAdd className="cursor-pointer text-black hover:text-red-500 size-5" />
          </div>
        </div>

        <div className="h-3/4">
          <Table />
        </div>
      </div>
    </main>
  );
}

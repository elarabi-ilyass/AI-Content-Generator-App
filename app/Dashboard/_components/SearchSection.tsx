import React from "react";
import { Search } from "lucide-react";

function SearchSection({search ,setSearch}:void) {
  return (
    <div className="flex items-center justify-center  bg-gradient-to-r from-indigo-500  to-indigo-200  ">
      <div className="w-full max-w-md p-6 my-12 ">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-white ">Browse All Templates</h2>
        </div>
        <div className="mb-4 text-center">
          <p className="text-white">What would you like to create today?</p>
        </div>
        <div className="relative">
          <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;

import React from 'react';

const Structures = () => {
  return (
    <div className="p-4">
      <div className="space-y-4 w-full">
        {/* Single Full Width Block */}
        <div className="h-20 bg-gray-200 border border-gray-400 rounded"></div>

        {/* Two Equal Width Blocks */}
        <div className="flex space-x-4">
          <div className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded"></div>
          <div className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded"></div>
        </div>

        {/* Three Equal Width Blocks */}
        <div className="flex space-x-4">
          <div className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded"></div>
          <div className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded"></div>
          <div className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded"></div>
        </div>

        {/* Four Equal Width Blocks */}
        <div className="flex space-x-4">
          <div className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded"></div>
          <div className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded"></div>
          <div className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded"></div>
          <div className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded"></div>
        </div>

        {/* Mixed Width Blocks */}
        <div className="flex space-x-4">
          <div className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded"></div>
          <div className="w-2/3 h-20 bg-gray-200 border border-gray-400 rounded"></div>
        </div>

        {/* Two Rows of Two Equal Width Blocks */}
        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded"></div>
            <div className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded"></div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded"></div>
            <div className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structures;

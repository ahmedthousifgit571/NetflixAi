import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-20 w-full md:w-1/2 px-6 md:px-12 top-[10%] md:top-[15%] lg:top-[20%] text-white">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">{title}</h1>
      <p className="hidden md:block text-sm lg:text-base mb-4 md:mb-6 w-full lg:w-4/5">{overview}</p>
      <div className="flex flex-wrap gap-2 md:gap-4">
        <button className="bg-white text-black py-1 md:py-2 px-3 md:px-6 text-sm md:text-base rounded-md flex items-center hover:bg-opacity-80">
          <span className="mr-1">▶</span> Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 text-white py-1 md:py-2 px-3 md:px-6 text-sm md:text-base rounded-md flex items-center hover:bg-opacity-70">
          <span className="mr-1">ℹ</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10 flex flex-col justify-center px-12 md:px-24">
      <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">{title}</h1>
      <p className="text-base md:text-xl py-4 max-w-lg text-white/80">{overview}</p>
      <div className="flex gap-4 mt-4">
        <button className="bg-white hover:bg-white/90 text-black font-medium py-2 px-8 rounded flex items-center">
          <span className="mr-2">▶</span> Play
        </button>
        <button className="bg-gray-500/40 hover:bg-gray-500/60 text-white font-medium py-2 px-8 rounded flex items-center">
          <span className="mr-2">ℹ</span> More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle

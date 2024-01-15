import React, { useState } from 'react'
import ReactPlayer from 'react-player';

const Videopost = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleLoadClick = () => {
    setIsPlaying(true);
  };


  return (
    
    <>

<div >
      <div className='d-flex justify-content-center mt-4'>
      <input className='form-control input-group w-25  '
        type="text"
        placeholder="Enter Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      
      <button onClick={handleLoadClick} className='btn btn-success p-2 '>Post Video</button>

      </div>
      
      <div className='mt-4'>
      {isPlaying && (
        <ReactPlayer 
          url={videoUrl}
          playing={true}
          controls={true}
          height="65vh"
          width="100%"
        />
      )}
      </div>
    </div>
    </>
  )
}

export default Videopost
import React from 'react';

interface VideoProps {
  path: string;
}

const Video: React.FC<VideoProps> = ({ path }) => {
  return (
    <div className='flex py-2 justify-center'>
      <video className='rounded-xl' 
      style={{ boxShadow: '6px 6px 0px 0px rgba(233, 153, 12, 1)' }}
        width="700"
        height="400"
        src={path}
        controls
        title="YouTube video"
      ></video>
    </div>
  );
}

export default Video;

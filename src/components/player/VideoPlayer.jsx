import "./VideoPlayerStyles.css";
import ReactPlayer from 'react-player';

import React, {useRef} from 'react'

const VideoPlayer = () => {
    const playerRef = useRef(null);
  return (
    
    <div className="player">
        <ReactPlayer className='react-player' ref={playerRef} url="https://www.youtube.com/watch?v=hs4kIyWOOi8&pp=ygUVaG9tZSBkZWNvcmF0aW5nIGlkZWFz" controls={true} />
        <div className="playerbg">
            <h1>DREAM HOUSE</h1>
        </div>
    </div>
  )
}

export default VideoPlayer
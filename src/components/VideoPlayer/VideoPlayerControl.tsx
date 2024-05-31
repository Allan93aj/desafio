import React, { useEffect, useRef, useState } from 'react';
import Video from '../../img/Video.mp4'
import '../header/Header.scss'

interface VideoPlayerControlProps {
    src: string;
}

// eslint-disable-next-line no-empty-pattern
const VideoPlayerControl: React.FC<VideoPlayerControlProps> = ({}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(true);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleVideoClick = () => {
        handlePlayPause();
        setShowControls(!isPlaying);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isPlaying) {
                setShowControls(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [isPlaying]);

    return (
        <div className='video-player'>
            <video ref={videoRef} src={Video} className='video' onClick={handleVideoClick}></video>
            {showControls && (
                <div className='controls'>
                    <button onClick={handlePlayPause}>
                        {isPlaying ? '' : <h1>Pausado</h1>}
                    </button>
                </div>
            )}
        </div>
    );
};

export default VideoPlayerControl;
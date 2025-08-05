'use client'; // Only if using Next.js App Router

import { useRef, useState } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function Video() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    return (
        <div className="flex items-center justify-center p-4">
            <div className="relative w-[250px] lg:w-[480px] h-[400px] lg:h-[600px]  rounded-2xl overflow-hidden shadow-xl bg-black">
                <video
                    ref={videoRef}
                    src="https://res.cloudinary.com/di6zff0rd/video/upload/v1753102241/RexVetsWeb_tb3zcq.mp4"
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                />

                {/* Buttons Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button
                        onClick={togglePlay}
                        className="w-13 h-13 bg-white text-[#092366] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition cursor-pointer"
                    >
                        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                    </button>
                    <button
                        onClick={toggleMute}
                        className="w-13 h-13 bg-white text-[#092366] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition cursor-pointer"
                    >
                        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
}

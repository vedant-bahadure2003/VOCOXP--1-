import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, X, Maximize2, Minimize2 } from "lucide-react";

const YOUTUBE_VIDEO_ID = "5Ai_nmbf13s";

const FloatingVideoWidget = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const playerRef = useRef(null);
    const controlsTimeoutRef = useRef(null);
    const containerRef = useRef(null);

    // Load YouTube IFrame API
    useEffect(() => {
        if (!isOpen) return;

        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";

        // Only add if not already loaded
        if (!window.YT) {
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        const initPlayer = () => {
            if (playerRef.current) return;
            playerRef.current = new window.YT.Player("floating-yt-player", {
                videoId: YOUTUBE_VIDEO_ID,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    loop: 1,
                    playlist: YOUTUBE_VIDEO_ID,
                    playsinline: 1,
                    origin: window.location.origin,
                },
                events: {
                    onReady: (event) => {
                        event.target.playVideo();
                        setIsPlaying(true);
                    },
                    onStateChange: (event) => {
                        if (event.data === window.YT.PlayerState.PLAYING) {
                            setIsPlaying(true);
                        } else if (event.data === window.YT.PlayerState.PAUSED) {
                            setIsPlaying(false);
                        }
                    },
                },
            });
        };

        if (window.YT && window.YT.Player) {
            // Small delay to ensure DOM element exists
            setTimeout(initPlayer, 100);
        } else {
            window.onYouTubeIframeAPIReady = initPlayer;
        }

        return () => {
            if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current);
            }
        };
    }, [isOpen]);

    const togglePlay = useCallback(() => {
        if (!playerRef.current) return;
        if (isPlaying) {
            playerRef.current.pauseVideo();
        } else {
            playerRef.current.playVideo();
        }
        setIsPlaying(!isPlaying);
    }, [isPlaying]);

    const toggleMute = useCallback(() => {
        if (!playerRef.current) return;
        if (isMuted) {
            playerRef.current.unMute();
        } else {
            playerRef.current.mute();
        }
        setIsMuted(!isMuted);
    }, [isMuted]);

    const handleClose = useCallback(() => {
        if (playerRef.current) {
            playerRef.current.destroy();
            playerRef.current = null;
        }
        setIsOpen(false);
        setIsMinimized(true);
    }, []);

    const handleReopen = useCallback(() => {
        setIsMinimized(false);
        setIsOpen(true);
    }, []);

    const toggleExpand = useCallback(() => {
        setIsExpanded((prev) => !prev);
    }, []);

    const handleMouseEnter = useCallback(() => {
        setShowControls(true);
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    }, []);

    const handleMouseLeave = useCallback(() => {
        controlsTimeoutRef.current = setTimeout(() => {
            setShowControls(false);
        }, 2000);
    }, []);

    return (
        <>
            {/* Minimized bubble button */}
            <AnimatePresence>
                {isMinimized && !isOpen && (
                    <motion.button
                        className="floating-video-reopen-btn"
                        onClick={handleReopen}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="Watch Demo Video"
                    >
                        <div className="floating-video-reopen-icon">
                            <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                        </div>
                        <div className="floating-video-reopen-ring" />
                        <div className="floating-video-reopen-ring floating-video-reopen-ring-delayed" />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={containerRef}
                        className={`floating-video-container ${isExpanded ? "floating-video-expanded" : ""}`}
                        initial={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50, x: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Animated glow border */}
                        <div className="floating-video-glow" />

                        {/* Header bar */}
                        <div className="floating-video-header">
                            <div className="floating-video-header-left">
                                <div className={`floating-video-live-dot ${isPlaying ? "active" : ""}`} />
                                <span className="floating-video-title">VOCOxP</span>
                            </div>
                            <div className="floating-video-header-actions">
                                <button
                                    className="floating-video-header-btn"
                                    onClick={toggleExpand}
                                    title={isExpanded ? "Minimize" : "Expand"}
                                >
                                    {isExpanded ? (
                                        <Minimize2 className="w-3.5 h-3.5" />
                                    ) : (
                                        <Maximize2 className="w-3.5 h-3.5" />
                                    )}
                                </button>
                                <button
                                    className="floating-video-header-btn floating-video-close-btn"
                                    onClick={handleClose}
                                    title="Close"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        {/* Video iframe */}
                        <div className="floating-video-player-wrap">
                            <div id="floating-yt-player" className="floating-video-iframe" />

                            {/* Clickable overlay to toggle play */}
                            <div className="floating-video-click-overlay" onClick={togglePlay} />

                            {/* Play/Pause overlay icon */}
                            <AnimatePresence>
                                {!isPlaying && (
                                    <motion.div
                                        className="floating-video-play-overlay"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        onClick={togglePlay}
                                    >
                                        <div className="floating-video-play-btn">
                                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Controls bar */}
                            <AnimatePresence>
                                {showControls && (
                                    <motion.div
                                        className="floating-video-controls"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <button
                                            className="floating-video-ctrl-btn"
                                            onClick={togglePlay}
                                            title={isPlaying ? "Pause" : "Play"}
                                        >
                                            {isPlaying ? (
                                                <Pause className="w-4 h-4" />
                                            ) : (
                                                <Play className="w-4 h-4 ml-0.5" fill="white" />
                                            )}
                                        </button>

                                        <button
                                            className="floating-video-ctrl-btn"
                                            onClick={toggleMute}
                                            title={isMuted ? "Unmute" : "Mute"}
                                        >
                                            {isMuted ? (
                                                <VolumeX className="w-4 h-4" />
                                            ) : (
                                                <Volume2 className="w-4 h-4" />
                                            )}
                                        </button>

                                        <a
                                            href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="floating-video-yt-link"
                                            title="Watch on YouTube"
                                        >
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingVideoWidget;

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, Sparkles } from "lucide-react";

const VideoShowcase = () => {
    const videoRef = useRef(null);
    const progressRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [showControls, setShowControls] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const controlsTimeoutRef = useRef(null);
    const containerRef = useRef(null);

    const VIDEO_URL = "https://vocoxp.com/web/media/vocoxp_video.mp4";

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
            setIsLoading(false);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const dur = videoRef.current.duration;
            setCurrentTime(current);
            setProgress((current / dur) * 100);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleProgressClick = (e) => {
        if (progressRef.current && videoRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            videoRef.current.currentTime = pos * duration;
        }
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 3000);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setShowControls(true);
    };

    useEffect(() => {
        return () => {
            if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    return (
        <section
            id="video-showcase"
            className="relative py-16 md:py-24 overflow-hidden"
        >
            {/* Background matching About/Privacy style - CSS animated for performance */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />

                {/* Floating Orbs - CSS animated for GPU acceleration */}
                <div
                    className="absolute top-10 left-10 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl animate-float-orb"
                    style={{ willChange: 'transform' }}
                />
                <div
                    className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl animate-float-orb-slow"
                    style={{ willChange: 'transform' }}
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>


            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Section Header - Matching style */}
                <motion.div
                    className="text-center mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-700 text-sm font-semibold">See It In Action</span>
                    </motion.div>

                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Experience{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-gradient-text">
                            VOCOxP
                        </span>
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Watch how VOCOxP transforms security into an intelligent,
                        frictionless experience for your organization.
                    </p>
                </motion.div>

                {/* Video Player Container */}
                <motion.div
                    ref={containerRef}
                    className="relative max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => isPlaying && setShowControls(false)}
                >
                    {/* Glowing Border Effect - Blue/Purple */}
                    <div
                        className="absolute -inset-1 md:-inset-1.5 rounded-2xl md:rounded-3xl opacity-50"
                        style={{
                            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #3b82f6 100%)",
                            filter: "blur(12px)",
                        }}
                    />

                    {/* Glass Container */}
                    <div
                        className="relative rounded-xl md:rounded-2xl overflow-hidden"
                        style={{
                            background: "rgba(255, 255, 255, 0.95)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(59, 130, 246, 0.2)",
                            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15), 0 10px 30px rgba(0, 0, 0, 0.08)",
                        }}
                    >
                        {/* Video Element */}
                        <div className="relative aspect-video bg-slate-100">
                            {/* Loading Skeleton */}
                            <AnimatePresence>
                                {isLoading && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="video-shimmer absolute inset-0" />
                                        <motion.div
                                            className="w-14 h-14 border-3 border-blue-200 border-t-blue-600 rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                src={VIDEO_URL}
                                onLoadedMetadata={handleLoadedMetadata}
                                onTimeUpdate={handleTimeUpdate}
                                onEnded={handleVideoEnd}
                                onCanPlay={() => setIsLoading(false)}
                                playsInline
                            />

                            {/* Play Button Overlay */}
                            <AnimatePresence>
                                {!isPlaying && !isLoading && (
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center bg-slate-900/10 cursor-pointer"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={togglePlay}
                                    >
                                        <motion.button
                                            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                                            style={{
                                                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                                                boxShadow: "0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.3)",
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.8, opacity: 0 }}
                                        >
                                            <Play className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="white" />
                                        </motion.button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Controls Overlay */}
                            <AnimatePresence>
                                {showControls && !isLoading && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 p-4 md:p-5"
                                        style={{
                                            background: "linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 100%)",
                                        }}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 15 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Progress Bar */}
                                        <div
                                            ref={progressRef}
                                            className="relative h-1.5 bg-white/20 rounded-full cursor-pointer mb-4 group"
                                            onClick={handleProgressClick}
                                        >
                                            <div className="absolute inset-y-0 left-0 bg-white/30 rounded-full w-full" />
                                            <motion.div
                                                className="absolute inset-y-0 left-0 rounded-full"
                                                style={{
                                                    width: `${progress}%`,
                                                    background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
                                                }}
                                            />
                                            <motion.div
                                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                                style={{
                                                    left: `${progress}%`,
                                                    transform: `translate(-50%, -50%)`,
                                                    boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
                                                }}
                                            />
                                        </div>

                                        {/* Controls Row */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                {/* Play/Pause */}
                                                <motion.button
                                                    className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={togglePlay}
                                                >
                                                    {isPlaying ? (
                                                        <Pause className="w-4 h-4" />
                                                    ) : (
                                                        <Play className="w-4 h-4 ml-0.5" fill="white" />
                                                    )}
                                                </motion.button>

                                                {/* Volume */}
                                                <motion.button
                                                    className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={toggleMute}
                                                >
                                                    {isMuted ? (
                                                        <VolumeX className="w-4 h-4" />
                                                    ) : (
                                                        <Volume2 className="w-4 h-4" />
                                                    )}
                                                </motion.button>

                                                {/* Time */}
                                                <span className="text-white/80 text-sm font-medium">
                                                    {formatTime(currentTime)} / {formatTime(duration)}
                                                </span>
                                            </div>

                                            {/* Fullscreen */}
                                            <motion.button
                                                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={toggleFullscreen}
                                            >
                                                {isFullscreen ? (
                                                    <Minimize className="w-4 h-4" />
                                                ) : (
                                                    <Maximize className="w-4 h-4" />
                                                )}
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-10 md:mt-12"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-slate-600 text-base mb-5">
                        Ready to secure your premises with intelligent protection?
                    </p>
                    <motion.a
                        href="#enquiry"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white"
                        style={{
                            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                            boxShadow: "0 4px 20px rgba(59, 130, 246, 0.35)",
                            fontFamily: "var(--font-display)",
                        }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 8px 30px rgba(139, 92, 246, 0.4)",
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get Started Today
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoShowcase;

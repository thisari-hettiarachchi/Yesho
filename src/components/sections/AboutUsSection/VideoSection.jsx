"use client";
import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Settings,
} from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  const handleSkipBack = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        0,
        videoRef.current.currentTime - 10
      );
    }
  };

  const handleSkipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(
        videoRef.current.duration,
        videoRef.current.currentTime + 10
      );
    }
  };

  const toggleMute = () => {
    setVolume((prev) => (prev === 0 ? 0.8 : 0));
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (videoRef.current) {
      videoRef.current.currentTime =
        (newProgress / 100) * videoRef.current.duration;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress || 0);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section
      id="video-section"
      ref={sectionRef}
      className="py-16 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-6 sm:mb-8 px-4 transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            A GLIMPSE <span className="text-red-600">INTO YESHO</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-3 max-w-3xl mx-auto">
            Discover how our skilled professionals bring garments back to life
            through
            <br className="hidden sm:block" />
            careful mending, repairing, and stain removal techniques.
          </p>
        </div>

        <div
          className={`relative max-w-4xl mx-auto transition-all duration-600 delay-300  ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative aspect-videorounded-lg overflow-hidden shadow-2xl rounded-2xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onClick={togglePlay}
            >
              <source src="/assets/team video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/10 cursor-pointer"
                onClick={togglePlay}
              >
                <button className="w-16 h-16 sm:w-20 sm:h-20 bg-muted-foreground/80 rounded-full flex items-center justify-center hover:bg-muted-foreground/80 transition-all duration-300 hover:scale-105 active:scale-95">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground fill-background ml-1" />
                </button>
              </div>
            )}
          </div>

          <div className="bg-background border-t border-b border-background py-2 sm:py-3 px-2 sm:px-3 md:px-4 shadow-md">
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
              <button
                onClick={togglePlay}
                className="text-muted-foreground hover:text-red-600 transition-colors p-1"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                ) : (
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </button>

              <button
                onClick={handleSkipBack}
                className="text-muted-foreground hover:text-red-600 transition-colors p-1 hidden sm:block"
                aria-label="Skip back 10 seconds"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={handleSkipForward}
                className="text-muted-foreground hover:text-red-600 transition-colors p-1 hidden sm:block"
                aria-label="Skip forward 10 seconds"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <span className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <div className="flex-1 mx-1 sm:mx-1.5 md:mx-2 lg:mx-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-1 bg-muted-foreground rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${progress}%, #e5e7eb ${progress}%, #e5e7eb 100%)`,
                  }}
                />
              </div>

              <button
                onClick={toggleMute}
                className="text-muted-foreground hover:text-red-600 transition-colors p-1"
                aria-label={volume === 0 ? "Unmute" : "Mute"}
              >
                {volume === 0 ? (
                  <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </button>

              <button
                className="text-muted-foreground hover:text-red-600 transition-colors p-1 hidden md:block"
                aria-label="Settings"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Play, SkipBack, SkipForward, Volume2, Settings, Pause } from "lucide-react";
import { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A GLIMPSE <span className="text-red-600">INTO YESHO</span>
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-3xl mx-auto">
            Discover how our skilled professionals bring garments back to life through<br/>
            careful mending, repairing, and stain removal techniques.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-none overflow-hidden">
            {/* Video Player */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onClick={togglePlay}
            >
              <source src="/assets/team video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="w-20 h-20 bg-gray-700/80 rounded-full flex items-center justify-center hover:bg-gray-600/80 transition-all duration-300"
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </motion.button>
              </div>
            )}
          </div>

          {/* Video Controls Bar (Below Video) */}
          <div className="bg-white border-t border-b border-gray-200 py-3 px-4">
            <div className="flex items-center gap-3">
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              {/* Previous */}
              <button className="text-gray-700 hover:text-red-600 transition-colors">
                <SkipBack className="w-4 h-4" />
              </button>

              {/* Next */}
              <button className="text-gray-700 hover:text-red-600 transition-colors">
                <SkipForward className="w-4 h-4" />
              </button>

              {/* Progress Bar */}
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden mx-3">
                <div className="h-full w-1/3 bg-red-600 rounded-full"></div>
              </div>

              {/* Volume */}
              <button className="text-gray-700 hover:text-red-600 transition-colors">
                <Volume2 className="w-4 h-4" />
              </button>

              {/* Settings */}
              <button className="text-gray-700 hover:text-red-600 transition-colors">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

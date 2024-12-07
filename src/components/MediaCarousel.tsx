import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Image } from '@/components/ui/image';

interface MediaItem {
  title: string;
  location: string;
  url: string;
  type: 'video' | 'image' | 'text';
  media: string | null;
  description?: string;
}

interface MediaCarouselProps {
  /**
   * Array of media items to display in the carousel
   */
  media: MediaItem[];
  /**
   * Whether to enable image animation effects (panning and scaling)
   * @default true
   */
  enableAnimation?: boolean;
}

/**
 * A responsive media carousel component that supports images, videos, and text content.
 * Features include:
 * - Swipe/drag navigation
 * - Automatic image panning for wide images
 * - Video playback with mute controls
 * - Responsive layout and animations
 */
export function MediaCarousel({ media, enableAnimation = true }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});
  const [imageAspectRatios, setImageAspectRatios] = useState<{ [key: string]: number }>({});
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});
  const constraintsRef = useRef(null);

  useEffect(() => {
    // Update muted state for all videos
    Object.values(videoRefs.current).forEach((video) => {
      video.muted = videoMuted;
    });
  }, [videoMuted]);

  useEffect(() => {
    // Pause all videos except the current one
    Object.entries(videoRefs.current).forEach(([index, video]) => {
      if (parseInt(index) === currentIndex) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  const handleImageLoad = (index: number, event: any) => {
    const img = event.target;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    setImageAspectRatios(prev => ({ ...prev, [index]: aspectRatio }));
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && currentIndex < media.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < media.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative h-[80vh]" ref={constraintsRef}>
      <div className="overflow-hidden h-full">
        <motion.div
          className="flex h-full"
          animate={{ x: `${-currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={constraintsRef}
          onDragEnd={handleDragEnd}
          style={{ touchAction: 'pan-y pinch-zoom' }}
        >
          {media.map((item, index) => (
            <motion.div
              key={index}
              className="w-full flex-shrink-0 px-4 h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {item.type === 'video' && item.media && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-full max-w-[800px] flex items-center justify-center">
                        <video
                          ref={el => { if (el) videoRefs.current[index] = el; }}
                          className="w-full h-full object-contain rounded-xl"
                          autoPlay
                          loop
                          playsInline
                          muted={videoMuted}
                          controls={false}
                        >
                          <source src={item.media} type="video/mp4" />
                        </video>
                        <button
                          onClick={(e) => {
                            console.log('Button clicked');
                            e.stopPropagation();
                            const video = videoRefs.current[index];
                            console.log('Current video ref:', video);
                            console.log('Current index:', index);
                            console.log('All video refs:', videoRefs.current);
                            if (video) {
                              video.muted = !video.muted;
                              console.log('Video muted state changed to:', video.muted);
                              setVideoMuted(video.muted);
                            } else {
                              console.log('No video element found for index:', index);
                            }
                          }}
                          className="absolute bottom-4 right-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                          type="button"
                          style={{ pointerEvents: 'auto' }}
                        >
                          {videoMuted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                  {item.type === 'image' && item.media && (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <motion.div 
                        className="relative flex items-center justify-center"
                        initial={false}
                        animate={{
                          width: imageLoaded[index] && imageAspectRatios[index] > 1 
                            ? 'min(95vw, 1600px)'
                            : 'min(80vh, 800px)',
                          height: 'auto',
                          scale: enableAnimation ? [.99, 1, .99] : 1
                        }}
                        transition={{ 
                          width: { duration: 0.5, ease: "easeInOut" },
                          scale: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                        }}
                      >
                        <div className="relative w-full overflow-hidden rounded-xl" style={{ 
                          paddingTop: imageLoaded[index] 
                            ? `${100 / (imageAspectRatios[index] || 1)}%` 
                            : '100%',
                          maxHeight: '80vh'
                        }}>
                          <motion.div
                            className="absolute inset-0"
                          >
                            <Image
                              src={item.media}
                              alt={item.title}
                              fill
                              className="object-cover rounded-xl"
                              onLoad={(e) => handleImageLoad(index, { target: e.target })}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                  {item.type === 'text' && (
                    <div className="relative w-full h-full flex items-center justify-center bg-black rounded-xl overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          src="/patterns/dance-pattern.png"
                          alt="Dance Pattern"
                          fill
                          className="object-cover opacity-10"
                        />
                      </div>
                      <div className="relative text-center max-w-2xl mx-auto px-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h3 className="text-4xl font-bold text-white mb-4">{item.title}</h3>
                          <p className="text-xl text-white/80 mb-6">{item.location}</p>
                          <p className="text-lg text-white/70 leading-relaxed">{item.description}</p>
                        </motion.div>
                      </div>
                    </div>
                  )}
                  {(item.type === 'video' || item.type === 'image') && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl">
                      <div className="absolute bottom-0 p-6 z-20 w-full text-left md:text-center">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-block"
                        >
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                        </a>
                        <p className="text-gray-300">{item.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {currentIndex < media.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

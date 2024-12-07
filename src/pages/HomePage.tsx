import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { useState, useRef, useEffect } from 'react'

export function HomePage() {
    return (
        <div className="relative">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://i.imgur.com/iJsMbpg.jpeg"
                alt="Nina and Matheus dancing"
                fill
                className="object-cover opacity-50 image-mask"
                priority
              />
            </div>
            
            <div className="container relative z-10">
              <motion.div 
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1 
                  className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Learn Zouk with Nina & Matheus
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  International dance instructors, performers, and choreographers specializing in Brazilian Zouk and Lambada.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <a href="https://school.learnzouk.com/">
                    <Button size="lg" className="text-lg px-8">Zouk School</Button>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>
          
          {/* Follow Us Section */}
          <section className="relative py-16 bg-black overflow-hidden">
            <div className="">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                  Follow Us
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Join us at dance events around the world
                </p>
              </motion.div>

              <EventCarousel />
            </div>
          </section>
          
          {/* What We Do Section */}
          <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="container">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                  What We Do
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Bringing the passion and energy of Brazilian dance to audiences worldwide through various artistic expressions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Classes Card */}
                <motion.div
                  className="group relative overflow-hidden rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative z-10">
                    <div className="mb-4 inline-block rounded-lg bg-purple-500/10 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Dance Classes</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Brazilian Zouk (All Levels)</li>
                      <li>• Leads & Follows Styling Workshops</li>
                      <li>• Performance Training</li>
                      <li>• Private Lessons</li>
                    </ul>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* DJ Card */}
                <motion.div
                  className="group relative overflow-hidden rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative z-10">
                    <div className="mb-4 inline-block rounded-lg bg-blue-500/10 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Professional DJ</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• International Zouk Events</li>
                      <li>• Curated Dance Playlists</li>
                      <li>• Live Music Mixing</li>
                      <li>• Dance Party Experience</li>
                    </ul>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Shows Card */}
                <motion.div
                  className="group relative overflow-hidden rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative z-10">
                    <div className="mb-4 inline-block rounded-lg bg-pink-500/10 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Performances</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Traditional Zouk Shows</li>
                      <li>• Lambada Performances</li>
                      <li>• Lyrical Choreographies</li>
                      <li>• Wedding Performances</li>
                    </ul>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>

              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Book Us Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </section>
    
          {/* About Nina Section */}
          <section className="py-24 bg-black">
            <div className="container">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Nina Darbello</h2>
                  <p className="text-gray-300 mb-6">
                    Brazilian, born in 1998, Nina started her dance journey with Classic ballet at age 5. 
                    She specializes in Zouk, Lambada, High Heels, and Lady Style, bringing a young and creative 
                    approach to her dance and teaching methodology.
                  </p>
                  <p className="text-gray-300">
                    She is recognized for her musicality, autonomy and expressiveness that make her dance unique. 
                    Teacher, actress, performer and one of the directors of Barracão da Dança, she brings in her 
                    curriculum numerous achievements in competitions and festivals, both national and international.
                  </p>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image 
                    src="https://i.imgur.com/c1uDcqL.jpeg"
                    alt="Nina Darbello"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>
    
          {/* About Matheus Section */}
          <section className="py-24 bg-gray-900">
            <div className="container">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="order-2 lg:order-1 aspect-square rounded-lg overflow-hidden">
                  <Image 
                    src="https://i.imgur.com/WI4qc4o.jpeg"
                    alt="Matheus Franco"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold mb-6 text-white">Matheus Franco</h2>
                  <p className="text-gray-300 mb-6">
                    Brazilian, born in 1990, Matheus discovered his passion for dance at 13 but started at 20. 
                    His journey began with Classical and Contemporary Ballet, Hip-Hop and Jazz, before finding 
                    his true calling in Brazilian Zouk and social dances.
                  </p>
                  <p className="text-gray-300">
                    Currently working alongside Nina Darbello, they focus on Brazilian Zouk and Lambada, 
                    teaching at the biggest Zouk/Lambada congresses worldwide. As co-owner and director of 
                    Barracão da Dança, he helps manage a thriving community of over 320 students in Campinas-SP.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      )
}

export function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});
  const [imageAspectRatios, setImageAspectRatios] = useState<{ [key: string]: number }>({});
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});
  const constraintsRef = useRef(null);
  const [panDirection, setPanDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    let panInterval: NodeJS.Timeout | null = null;
    
    // Set up panning for wide images
    if (imageLoaded[currentIndex] && imageAspectRatios[currentIndex] > 1.5) {
      panInterval = setInterval(() => {
        setPanDirection(prev => prev * -1);
      }, 5000);
    }

    return () => {
      if (panInterval) {
        clearInterval(panInterval);
      }
    };
  }, [currentIndex, imageLoaded, imageAspectRatios]);

  const events = [
    {
      title: "Elevation Zouk Festival",
      location: "Currently in Denver, USA - 2024",
      url: "https://www.elevationdenverzouk.com/",
      type: "video",
      media: "/elevation-promo.mp4",
    },
    {
      title: "Back to the Zouker",
      location: "Chicago, USA - 2024",
      url: "https://www.facebook.com/events/1611-n-sheffield-ave-3rd-floor-chicago-il-60614/back-to-the-zouker-chicago-edition-/1013121027179055/",
      type: "image",
      media: "/back-to-zouker.jpg",
    },
    {
      title: "Boston Zouk on the Docks",
      location: "Boston, USA - 2024",
      url: "https://www.facebook.com/events/549341691334709",
      type: "image",
      media: "/boston-zotd-2024.jpg",
    },
    {
      title: "Global Dance Journey",
      location: "A Journey Through Time and Dance",
      description: "From vibrant festivals to intimate workshops, we've shared our passion for Brazilian Zouk across continents. Each event is a unique celebration of dance, music, and cultural connection.",
      type: "text",
      media: null,
    }
  ];

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
    if (info.offset.x < -swipeThreshold && currentIndex < events.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < events.length - 1) {
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
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="w-full flex-shrink-0 px-4 h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {event.type === 'video' && (
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
                          <source src={event.media} type="video/mp4" />
                        </video>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setVideoMuted(!videoMuted);
                          }}
                          className="absolute bottom-4 right-4 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
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
                  {event.type === 'image' && (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <motion.div 
                        className="relative flex items-center justify-center"
                        initial={false}
                        animate={{
                          width: imageLoaded[index] && imageAspectRatios[index] > 1 
                            ? 'min(95vw, 1600px)'
                            : 'min(80vh, 800px)',
                          height: 'auto',
                          scale: [1, 1.01, 1],
                          transition: { 
                            width: { duration: 0.5, ease: "easeInOut" },
                            scale: {
                              duration: 10,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
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
                            animate={{
                              x: imageLoaded[index] && imageAspectRatios[index] > 1.5
                                ? `${panDirection * -10}%`
                                : '0%'
                            }}
                            transition={{
                              duration: 5,
                              ease: "easeInOut"
                            }}
                          >
                            <Image
                              src={event.media}
                              alt={event.title}
                              fill
                              className="object-cover rounded-xl"
                              onLoadingComplete={(e) => handleImageLoad(index, { target: e })}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                  {event.type === 'text' && (
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
                          <h3 className="text-4xl font-bold text-white mb-4">{event.title}</h3>
                          <p className="text-xl text-white/80 mb-6">{event.location}</p>
                          <p className="text-lg text-white/70 leading-relaxed">{event.description}</p>
                        </motion.div>
                      </div>
                    </div>
                  )}
                  {(event.type === 'video' || event.type === 'image') && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl">
                      <div className="absolute bottom-0 p-6 z-20 w-full text-left md:text-center">
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-block"
                        >
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{event.title}</h3>
                        </a>
                        <p className="text-gray-300">{event.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          onClick={handlePrev}
          className={`p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={handleNext}
          className={`p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors ${
            currentIndex === events.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex === events.length - 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

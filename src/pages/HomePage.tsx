import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'

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
                  <Link href="/subscribe">
                    <Button size="lg" className="text-lg px-8">Start Dancing</Button>
                  </Link>
                </motion.div>
              </motion.div>
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
                    src="https://i.imgur.com/19UnUzm.jpeg"
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

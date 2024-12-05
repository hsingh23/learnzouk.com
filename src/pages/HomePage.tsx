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
                  Dance with Passion
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
          <section className="relative py-24 bg-gray-900">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.h2 
                    className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    What We Do
                  </motion.h2>
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Classes</h3>
                      <p className="text-gray-300">
                        Brazilian Zouk Classes for Leaders + Followers, Lady and Man Style, Performance Training, Choreographies.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">DJ</h3>
                      <p className="text-gray-300">
                        Matheus has been DJing in the biggest Zouk Congresses and events around the world.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Show</h3>
                      <p className="text-gray-300">
                        Traditional Zouk, Lambada, and Lyrical performances for events worldwide.
                      </p>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  className="relative aspect-square"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src="https://i.imgur.com/WI4qc4o.jpeg"
                    alt="Dance performance"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/60 rounded-lg" />
                </motion.div>
              </div>
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

import { motion } from 'motion/react'
import YouTube from '@/components/Youtube'

const performances = [
  {
    title: "Zouk Town 2022 Demo",
    description: "Demonstration at Zouk Town, Lyon, France",
    videoId: "RkggR4Wsbqk"
  },
  {
    title: "BDF 2022 Demo",
    description: "Demonstration at Brazilian Dance Festival, Amsterdam, Netherlands",
    videoId: "Dg7sG2s6sd4"
  },
  {
    title: "I Have Nothing - BDF 2022",
    description: "Choreography performed at Brazilian Dance Festival, Holland",
    videoId: "h5p7bwqecn0"
  },
  {
    title: "No Lie - Zouktime 2022",
    description: "Performance at Zouktime, Czech Republic",
    videoId: "VGztJuwu-gw"
  },
]

export function PerformancesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Performances
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Watch our latest performances and choreographies from around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performances.map((performance, index) => (
            <motion.div
              key={performance.videoId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-4 rounded-lg"
            >
              <div className="aspect-video">
                <YouTube
                  videoId={performance.videoId}
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{performance.title}</h3>
                <p className="text-gray-400">{performance.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

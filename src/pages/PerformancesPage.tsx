import { Motion, spring } from 'react-motion'
import YouTube from '@/components/Youtube'

const performances = [
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
  {
    title: "Zouk Town 2022 Demo",
    description: "Demonstration at Zouk Town, Lyon, France",
    videoId: "RkggR4Wsbqk"
  },
  {
    title: "BDF 2022 Demo",
    description: "Demonstration at Brazilian Dance Festival, Amsterdam, Netherlands",
    videoId: "Dg7sG2s6sd4"
  }
]

export function PerformancesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <Motion defaultStyle={{ opacity: 0, y: 50 }} style={{ opacity: spring(1), y: spring(0) }}>
          {interpolatedStyle => (
            <div
              style={{
                opacity: interpolatedStyle.opacity,
                transform: `translateY(${interpolatedStyle.y}px)`
              }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Our Performances
              </h1>
              <p className="text-gray-400 text-center mb-12">
                Watch our latest performances and choreographies from around the world
              </p>
            </div>
          )}
        </Motion>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performances.map((performance, index) => (
            <Motion
              key={performance.videoId}
              defaultStyle={{ opacity: 0, y: 50 }}
              style={{
                opacity: spring(1, { stiffness: 60, damping: 15 }),
                y: spring(0, { stiffness: 60, damping: 15 })
              }}
            >
              {interpolatedStyle => (
                <div
                  style={{
                    opacity: interpolatedStyle.opacity,
                    transform: `translateY(${interpolatedStyle.y}px)`
                  }}
                  className="bg-gray-900 rounded-lg overflow-hidden"
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
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{performance.title}</h3>
                    <p className="text-gray-400">{performance.description}</p>
                  </div>
                </div>
              )}
            </Motion>
          ))}
        </div>
      </div>
    </div>
  )
}


import { useState, useMemo } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Laptop, CalendarPlus, Instagram, UsersRound } from 'lucide-react'

interface Event {
  startDate: string
  endDate: string
  name: string
  location: string
  isLocation: boolean
  link?: string
  mediaUrl?: string
  instagramLink?: string
}

const scheduleData: Event[] = [
  {
    startDate: "2025-01-08",
    endDate: "2025-01-12",
    name: "Rio Zouk Congress",
    location: "Rio de Janeiro, Brazil",
    isLocation: false,
    link: "https://lnk.bio/riozoukcongress",
    // mediaUrl: "https://example.com/rio-zouk-congress.jpg",
    instagramLink: "https://www.instagram.com/riozoukcongress/"
  },
  {
    startDate: "2025-01-16",
    endDate: "2025-01-20",
    name: "International Zouk Congress (IZC)",
    location: "Miami, USA",
    isLocation: false,
    // link: "https://internationalzoukcongress.com",
    // mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    startDate: "2025-02-21",
    endDate: "2025-02-23",
    name: "Taiwan Zouk Festival",
    location: "Taipei, Taiwan",
    isLocation: false,
    link: "https://taiwanzoukfestival.com"
  },
  {
    startDate: "2025-03-14",
    endDate: "2025-03-16",
    name: "Phoenix Workshop",
    location: "Phoenix, USA",
    isLocation: true
  },
  {
    startDate: "2025-03-21",
    endDate: "2025-03-23",
    name: "Michigan Workshop",
    location: "Michigan, USA",
    isLocation: true
  },
  {
    startDate: "2025-03-28",
    endDate: "2025-04-03",
    name: "USA Tour",
    location: "Various cities, USA",
    isLocation: true
  },
  {
    startDate: "2025-04-04",
    endDate: "2025-04-10",
    name: "USA Tour",
    location: "Various cities, USA",
    isLocation: true
  },
  {
    startDate: "2025-04-11",
    endDate: "2025-04-17",
    name: "USA Tour",
    location: "Various cities, USA",
    isLocation: true
  },
  {
    startDate: "2025-04-18",
    endDate: "2025-04-20",
    name: "Boston Workshop",
    location: "Boston, USA",
    isLocation: true
  },
  {
    startDate: "2025-04-25",
    endDate: "2025-04-27",
    name: "Miami Beach Festival",
    location: "Miami Beach, USA",
    isLocation: false,
    link: "https://miamibeachfestival.com"
  },
  {
    startDate: "2025-05-02",
    endDate: "2025-05-04",
    name: "Embrazouk",
    location: "São Paulo, Brazil",
    isLocation: false,
    link: "https://embrazouk.com"
  },
  {
    startDate: "2025-05-23",
    endDate: "2025-05-29",
    name: "Japan Tour",
    location: "Various cities, Japan",
    isLocation: true
  },
  {
    startDate: "2025-05-30",
    endDate: "2025-06-01",
    name: "Japan Workshop",
    location: "Tokyo, Japan",
    isLocation: true
  },
  {
    startDate: "2025-06-06",
    endDate: "2025-06-08",
    name: "South Korea Workshop",
    location: "Seoul, South Korea",
    isLocation: true
  },
  {
    startDate: "2025-07-18",
    endDate: "2025-07-20",
    name: "Auckland Workshop",
    location: "Auckland, New Zealand",
    isLocation: true
  },
  {
    startDate: "2025-07-25",
    endDate: "2025-07-27",
    name: "Casa do Zouk",
    location: "Rio de Janeiro, Brazil",
    isLocation: false,
    link: "https://casadozouk.com"
  },
  {
    startDate: "2025-08-01",
    endDate: "2025-08-03",
    name: "Melbourne Workshop",
    location: "Melbourne, Australia",
    isLocation: true
  },
  {
    startDate: "2025-08-08",
    endDate: "2025-08-10",
    name: "Zouk On",
    location: "Campinas, São Paulo, Brazil",
    isLocation: false,
    link: "https://zoukon.com"
  },
  {
    startDate: "2025-08-29",
    endDate: "2025-08-31",
    name: "Malaysia Workshop",
    location: "Kuala Lumpur, Malaysia",
    isLocation: true
  },
  {
    startDate: "2025-09-05",
    endDate: "2025-09-07",
    name: "UaiZouk",
    location: "Uberlândia, Minas Gerais, Brazil",
    isLocation: false,
    link: "https://uaizouk.com"
  },
  {
    startDate: "2025-09-12",
    endDate: "2025-09-14",
    name: "ConectZouk",
    location: "Curitiba, Paraná, Brazil",
    isLocation: false,
    link: "https://conectzouk.com"
  },
  {
    startDate: "2025-10-31",
    endDate: "2025-11-02",
    name: "Halloween Zouk Party",
    location: "New York, USA",
    isLocation: true
  },
  {
    startDate: "2025-11-07",
    endDate: "2025-11-09",
    name: "Silesian Zouk Festival",
    location: "Katowice, Poland",
    isLocation: false,
    link: "https://silesianzoukfestival.com"
  },
  {
    startDate: "2025-11-14",
    endDate: "2025-11-16",
    name: "ZoukTime",
    location: "Brno, Czech Republic",
    isLocation: false,
    link: "https://zouktime.cz"
  },
  {
    startDate: "2025-12-05",
    endDate: "2025-12-07",
    name: "Zouk Brasa",
    location: "Cuiabá, Mato Grosso, Brazil",
    isLocation: false,
    link: "https://zoukbrasa.com"
  }
]

export function TourSchedule() {
  const sortedEvents = useMemo(() => {
    return [...scheduleData].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
  }, [])

  const currentDate = new Date()

  const { upcomingEvents, pastEvents } = useMemo(() => {
    return sortedEvents.reduce((acc, event) => {
      const eventEndDate = new Date(event.endDate)
      if (eventEndDate >= currentDate) {
        acc.upcomingEvents.push(event)
      } else {
        acc.pastEvents.push(event)
      }
      return acc
    }, { upcomingEvents: [] as Event[], pastEvents: [] as Event[] })
  }, [sortedEvents, currentDate])

  const addToCalendar = (event: Event) => {
    const startDate = new Date(event.startDate)
    const endDate = new Date(event.endDate)
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.name)}&dates=${startDate.toISOString().replace(/-|:|\.\d\d\d/g,"")
}/${endDate.toISOString().replace(/-|:|\.\d\d\d/g,"")}&details=${encodeURIComponent(`${event.name} at ${event.location}`)}&location=${encodeURIComponent(event.location)}`
    window.open(calendarUrl, '_blank')
  }

  const getMediaType = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'youtube'
    } else if (url.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
      return 'image'
    } else {
      return 'video'
    }
  }

  const renderMedia = (url: string) => {
    const mediaType = getMediaType(url)
    switch (mediaType) {
      case 'youtube':
        const videoId = url.split('v=')[1] || url.split('/').pop()
        return (
          <iframe
            width="240"
            height="135"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )
      case 'image':
        return <img src={url} alt="Event media" className="w-full h-full object-cover" />
      case 'video':
        return <video src={url} className="w-full h-full object-cover" controls />
      default:
        return null
    }
  }

  const renderEvent = (event: Event) => (
    <div key={`${event.startDate}-${event.name}`} className="mb-4 p-4 bg-gray-800 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{event.name}</h3>
          <p className="text-sm text-gray-300">{event.location}</p>
          <p className="text-sm text-gray-300">
            {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
          </p>
        </div>
        {event.mediaUrl && (
          <div className="w-24 h-24 rounded-md overflow-hidden">
            {renderMedia(event.mediaUrl)}
          </div>
        )}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div>
          {event.isLocation ? (
            <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Location</span>
          ) : (
            <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Festival</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => addToCalendar(event)}
            className="text-blue-400 hover:text-blue-300"
            aria-label="Add to Google Calendar"
          >
            <CalendarPlus className="h-5 w-5" />
          </button>
          {event.link && (
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <Laptop className="h-5 w-5" />
            </a>
          )}
          {event.instagramLink && (
            <a href={event.instagramLink} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {event.isLocation && (
            <a href="https://tidycal.com/learnzouk/workshop-private" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300" title='Book Private'>
              <UsersRound className="h-5 w-5" xlinkTitle='Book private' />
            </a>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="space-y-4">
            {upcomingEvents.map(renderEvent)}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="space-y-4">
            {pastEvents.map(renderEvent)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


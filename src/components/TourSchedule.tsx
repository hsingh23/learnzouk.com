import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Laptop, CalendarPlus, Instagram, UsersRound } from "lucide-react";

interface Event {
  startDate: string;
  endDate: string;
  name: string;
  location: string;
  isLocation: boolean;
  link?: string;
  mediaUrl?: string;
  instagramLink?: string;
  instructor?: "nina" | "matheus" | "both";
}

const scheduleData: Event[] = [
  // Nina's Events
  {
    startDate: "2025-02-11",
    endDate: "2025-02-12",
    name: "Paris Workshop",
    location: "Paris, France",
    isLocation: true,
    instructor: "nina",
  },
  {
    startDate: "2025-02-13",
    endDate: "2025-02-16",
    name: "Warsaw Workshop",
    location: "Warsaw, Poland",
    isLocation: true,
    instructor: "nina",
  },
  {
    startDate: "2025-02-17",
    endDate: "2025-02-18",
    name: "Paris Workshop",
    location: "Paris, France",
    isLocation: true,
    instructor: "nina",
  },
  {
    startDate: "2025-02-26",
    endDate: "2025-03-05",
    name: "Paris Workshop",
    location: "Paris, France",
    isLocation: true,
    instructor: "nina",
  },
  {
    startDate: "2025-06-13",
    endDate: "2025-06-15",
    name: "Saint-Laurent-d'Aigouze Workshop",
    location: "Saint-Laurent-d'Aigouze, France",
    isLocation: true,
    instructor: "nina",
  },
  {
    startDate: "2025-06-16",
    endDate: "2025-06-23",
    name: "Paris Workshop",
    location: "Paris, France",
    isLocation: true,
    instructor: "nina",
  },
  // Matheus's Events
  {
    startDate: "2025-02-07",
    endDate: "2025-02-19",
    name: "Taiwan Workshop",
    location: "Taiwan",
    isLocation: true,
    instructor: "matheus",
  },
  {
    startDate: "2025-03-07",
    endDate: "2025-03-12",
    name: "Tokyo Workshop",
    location: "Tokyo, Japan",
    isLocation: true,
    instructor: "matheus",
  },
  // Joint Events
  {
    startDate: "2025-01-08",
    endDate: "2025-01-12",
    name: "Rio Zouk Congress",
    location: "Rio de Janeiro, Brazil",
    isLocation: false,
    link: "https://lnk.bio/riozoukcongress",
    instagramLink: "https://www.instagram.com/riozoukcongress/",
    instructor: "both",
  },
  {
    startDate: "2025-01-16",
    endDate: "2025-01-20",
    name: "International Zouk Congress (IZC)",
    location: "Miami, USA",
    isLocation: false,
    instructor: "both",
  },
  {
    startDate: "2025-02-21",
    endDate: "2025-02-23",
    name: "Taiwan Zouk Festival",
    location: "Taipei, Taiwan",
    isLocation: false,
    link: "https://taiwanzoukfestival.com",
    instructor: "both",
  },
  {
    startDate: "2025-03-14",
    endDate: "2025-03-16",
    name: "Phoenix Workshop",
    location: "Phoenix, USA",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-03-21",
    endDate: "2025-03-23",
    name: "Michigan Workshop",
    location: "Michigan, USA",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-03-28",
    endDate: "2025-04-03",
    name: "USA Tour",
    location: "Various cities, USA",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-04-04",
    endDate: "2025-04-10",
    name: "USA Tour",
    location: "Various cities, USA",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-04-11",
    endDate: "2025-04-17",
    name: "USA Tour",
    location: "Various cities, USA",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-04-18",
    endDate: "2025-04-20",
    name: "Boston Workshop",
    location: "Boston, USA",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-04-25",
    endDate: "2025-04-27",
    name: "Miami Beach Festival",
    location: "Miami Beach, USA",
    isLocation: false,
    link: "https://miamibeachfestival.com",
    instructor: "both",
  },
  {
    startDate: "2025-05-02",
    endDate: "2025-05-04",
    name: "Embrazouk",
    location: "São Paulo, Brazil",
    isLocation: false,
    link: "https://embrazouk.com",
    instructor: "both",
  },
  {
    startDate: "2025-05-23",
    endDate: "2025-05-29",
    name: "Japan Tour",
    location: "Various cities, Japan",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-05-30",
    endDate: "2025-06-01",
    name: "Japan Workshop",
    location: "Tokyo, Japan",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-06-06",
    endDate: "2025-06-08",
    name: "South Korea Workshop",
    location: "Seoul, South Korea",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-07-18",
    endDate: "2025-07-20",
    name: "Auckland Workshop",
    location: "Auckland, New Zealand",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-07-25",
    endDate: "2025-07-27",
    name: "Casa do Zouk",
    location: "Rio de Janeiro, Brazil",
    isLocation: false,
    link: "https://casadozouk.com",
    instructor: "both",
  },
  {
    startDate: "2025-08-01",
    endDate: "2025-08-03",
    name: "Melbourne Workshop",
    location: "Melbourne, Australia",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-08-08",
    endDate: "2025-08-10",
    name: "Zouk On",
    location: "Campinas, São Paulo, Brazil",
    isLocation: false,
    link: "https://zoukon.com",
    instructor: "both",
  },
  {
    startDate: "2025-08-29",
    endDate: "2025-08-31",
    name: "Malaysia Workshop",
    location: "Kuala Lumpur, Malaysia",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-09-05",
    endDate: "2025-09-07",
    name: "UaiZouk",
    location: "Uberlândia, Minas Gerais, Brazil",
    isLocation: false,
    link: "https://uaizouk.com",
    instructor: "both",
  },
  {
    startDate: "2025-09-12",
    endDate: "2025-09-14",
    name: "ConectZouk",
    location: "Curitiba, Paraná, Brazil",
    isLocation: false,
    link: "https://conectzouk.com",
    instructor: "both",
  },
  {
    startDate: "2025-10-31",
    endDate: "2025-11-02",
    name: "Halloween Zouk Party",
    location: "New York, USA",
    isLocation: true,
    instructor: "both",
  },
  {
    startDate: "2025-11-07",
    endDate: "2025-11-09",
    name: "Silesian Zouk Festival",
    location: "Katowice, Poland",
    isLocation: false,
    link: "https://silesianzoukfestival.com",
    instructor: "both",
  },
  {
    startDate: "2025-11-14",
    endDate: "2025-11-16",
    name: "ZoukTime",
    location: "Brno, Czech Republic",
    isLocation: false,
    link: "https://zouktime.cz",
    instructor: "both",
  },
  {
    startDate: "2025-12-05",
    endDate: "2025-12-07",
    name: "Zouk Brasa",
    location: "Cuiabá, Mato Grosso, Brazil",
    isLocation: false,
    link: "https://zoukbrasa.com",
    instructor: "both",
  },
];

export function TourSchedule() {
  const [selectedInstructor, setSelectedInstructor] = useState<"all" | "nina" | "matheus" | "both">("all");

  const sortedEvents = useMemo(() => {
    return [...scheduleData].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  }, []);

  const currentDate = new Date();

  const { upcomingEvents, pastEvents } = useMemo(() => {
    const filtered = selectedInstructor === "all" ? sortedEvents : sortedEvents.filter((event) => event.instructor === selectedInstructor);

    return filtered.reduce(
      (acc, event) => {
        const eventEndDate = new Date(event.endDate);
        if (eventEndDate >= currentDate) {
          acc.upcomingEvents.push(event);
        } else {
          acc.pastEvents.push(event);
        }
        return acc;
      },
      { upcomingEvents: [] as Event[], pastEvents: [] as Event[] }
    );
  }, [sortedEvents, currentDate, selectedInstructor]);

  const addToCalendar = (event: Event) => {
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.name)}&dates=${startDate
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "")}/${endDate.toISOString().replace(/-|:|\.\d\d\d/g, "")}&details=${encodeURIComponent(
      `${event.name} at ${event.location}`
    )}&location=${encodeURIComponent(event.location)}`;
    window.open(calendarUrl, "_blank");
  };

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
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-2">
          {event.isLocation ? (
            <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Location</span>
          ) : (
            <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Festival</span>
          )}
          {event.instructor && (
            <span
              className={`text-xs px-2 py-1 rounded ${event.instructor === "nina" ? "bg-pink-600" : event.instructor === "matheus" ? "bg-purple-600" : "bg-orange-600"} text-white`}
            >
              {event.instructor === "nina" ? "Nina" : event.instructor === "matheus" ? "Matheus" : "Both"}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={() => addToCalendar(event)} className="text-blue-400 hover:text-blue-300" aria-label="Add to Google Calendar">
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
            <a href="https://tidycal.com/learnzouk/workshop-private" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300" title="Book Private">
              <UsersRound className="h-5 w-5" xlinkTitle="Book private" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4 flex justify-center gap-1 sm:gap-2">
        <Button 
          onClick={() => setSelectedInstructor("all")} 
          variant={selectedInstructor === "all" ? "default" : "outline"} 
          className="px-2 py-1 text-xs sm:text-sm sm:px-4 sm:py-2"
        >
          All Events
        </Button>
        <Button 
          onClick={() => setSelectedInstructor("both")} 
          variant={selectedInstructor === "both" ? "default" : "outline"} 
          className="px-2 py-1 text-xs sm:text-sm sm:px-4 sm:py-2"
        >
          Nina & Matheus
        </Button>
        <Button 
          onClick={() => setSelectedInstructor("nina")} 
          variant={selectedInstructor === "nina" ? "default" : "outline"} 
          className="px-2 py-1 text-xs sm:text-sm sm:px-4 sm:py-2"
        >
          Just Nina
        </Button>
        <Button 
          onClick={() => setSelectedInstructor("matheus")} 
          variant={selectedInstructor === "matheus" ? "default" : "outline"} 
          className="px-2 py-1 text-xs sm:text-sm sm:px-4 sm:py-2"
        >
          Just Matheus
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="space-y-4">{upcomingEvents.map(renderEvent)}</div>
        </TabsContent>
        <TabsContent value="past">
          <div className="space-y-4">{pastEvents.map(renderEvent)}</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

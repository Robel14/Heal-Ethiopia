"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"

// Mock data for events
const MOCK_EVENTS = [
  {
    id: 1,
    title: "Healthcare Training Workshop",
    date: "2023-12-15",
    time: "9:00 AM - 4:00 PM",
    location: "Addis Ababa, Ethiopia",
    description:
      "A comprehensive training workshop for healthcare professionals focusing on maternal and child health.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Training",
  },
  {
    id: 2,
    title: "Community Outreach Program",
    date: "2023-12-22",
    time: "10:00 AM - 2:00 PM",
    location: "Bahir Dar, Ethiopia",
    description:
      "Join us for a community outreach program providing essential health services to underserved communities.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Outreach",
  },
  {
    id: 3,
    title: "Annual Fundraising Gala",
    date: "2024-01-20",
    time: "6:00 PM - 10:00 PM",
    location: "Sheraton Hotel, Addis Ababa",
    description: "Our annual fundraising gala to support our programs across Ethiopia.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Fundraising",
  },
]

export default function EventsList() {
  const [events, setEvents] = useState(MOCK_EVENTS)
  const [filter, setFilter] = useState("All")

  // In a real implementation, this would fetch from your API
  useEffect(() => {
    // This would be replaced with an actual API call
    setEvents(MOCK_EVENTS)
  }, [])

  const filteredEvents = filter === "All" ? events : events.filter((event) => event.category === filter)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["All", "Training", "Outreach", "Fundraising"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full mb-4">
                  {event.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No events found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}


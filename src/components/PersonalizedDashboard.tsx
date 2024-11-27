import React, { useState } from 'react';
import { Calendar, Users, ShoppingBag } from 'lucide-react';
import MixtapeGrid from './MixtapeGrid';

interface PersonalizedDashboardProps {
  userName: string;
}

const exclusiveMixtapes = [
  {
    name: "Best Reg Coffee 2024",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/subway-musician-564bd.appspot.com/o/aminy-generation%2Fminy-2670b158-b5bc-49d4-a574-7b7cf333448a?alt=media&token=c57faad5-15ac-488d-adf9-357e90d3fc0e",
    shortenedLink: "https://go.minyvinyl.com/best2024"
  },
  {
    name: "Hot 100 Indie Artists",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/subway-musician-564bd.appspot.com/o/aminy-generation%2Fminy-8136b20f-c2f2-422f-8f36-1c14ae58580d?alt=media&token=1b708cb2-a4b2-4281-bbaa-223cdd8a880e",
    shortenedLink: "https://go.minyvinyl.com/hot100indie"
  },
  {
    name: "Reg Coffee Exclusives",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/subway-musician-564bd.appspot.com/o/aminy-generation%2Fminy-4b1aa2b6-311e-44ea-bd8f-47da1814715d?alt=media&token=4e06c53e-4491-4c6c-81e3-4ecc5ebe24b4",
    shortenedLink: "https://go.minyvinyl.com/exclusives"
  }
];

const upcomingEvents = [
  {
    id: 1,
    name: "Birmingham Bulls vs. Pensacola Ice Flyers",
    date: "Dec 5",
    time: "7:00 PM",
    venue: "The Pelham Civic Complex",
    status: "RSVP",
    image: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?auto=format&fit=crop&q=80&w=1024"
  },
  {
    id: 2,
    name: "Birmingham Bulls vs Evansville Thunderbolts",
    date: "Dec 6",
    time: "7:00 PM",
    venue: "Birmingham Barons",
    status: "RSVP",
    image: "https://images.unsplash.com/photo-1518093606789-a3c6e6a5539e?auto=format&fit=crop&q=80&w=1024"
  },
  {
    id: 3,
    name: "The Wood Brothers",
    date: "Dec 8",
    time: "8:00 PM",
    venue: "Iron City",
    status: "RSVP",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80&w=1024"
  }
];

const merchItems = [
  {
    id: 1,
    name: "Limited Edition Tour Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1024"
  },
  {
    id: 2,
    name: "Exclusive Vinyl Bundle",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1024"
  },
  {
    id: 3,
    name: "Coffee House Hoodie",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1024"
  }
];

const PersonalizedDashboard = ({ userName }: PersonalizedDashboardProps) => {
  const [rsvpStatus, setRsvpStatus] = useState<{ [key: number]: string }>({});

  const handleRSVP = (eventId: number) => {
    setRsvpStatus(prev => ({
      ...prev,
      [eventId]: "Reserved"
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="bg-black py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Welcome to Your Dashboard, {userName}!</h1>
          <p className="text-lg sm:text-xl text-gray-400">Your personalized MINY holder experience awaits.</p>
        </div>
      </section>

      {/* MINY Exclusives */}
      <section id="miny-exclusives" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">MINY Exclusives</h2>
          <MixtapeGrid mixtapes={exclusiveMixtapes} />
        </div>
      </section>

      {/* Exclusive Videos */}
      <section id="exclusive-videos" className="py-12 sm:py-20 bg-neutral-800 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Exclusive Videos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Kathleen Edwards - Brilliant Covers"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Behind The Scenes with Phil Lesh"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Events */}
      <section id="vip-events" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">VIP Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-neutral-800 rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{event.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                          <Users className="w-4 h-4" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRSVP(event.id)}
                    className={`w-full btn ${
                      rsvpStatus[event.id] 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'btn-primary'
                    }`}
                  >
                    {rsvpStatus[event.id] ? 'Reserved ✓' : event.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Merch */}
      <section id="member-merch" className="py-12 sm:py-20 bg-neutral-800 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Member Exclusive Merch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {merchItems.map((item) => (
              <div key={item.id} className="bg-neutral-900 rounded-xl overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 sm:p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{item.name}</h3>
                  <span className="block text-2xl font-bold text-white">${item.price}</span>
                  <button className="w-full btn btn-primary flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalizedDashboard;
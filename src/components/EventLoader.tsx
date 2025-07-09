import React, { useState } from 'react';
import FrostedGlassPane from './FrostedPane';
import NeonButton from './NeonButton';
import events from '../data/events.json';
import '../assets/fonts/fonts.css';

const formatReadableDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};

interface EventItem {
    id: number;
    title: string;
    date: string;
    day: string;
    time: string;
    venue: string;
    address: string;
    host: string;
    description: string;
    highlights: string[];
    promoVideo?: string;
    ticketsLink?: string;
    agenda?: {
        time: string;
        title: string;
        details: string;
    }[];
    tags: string[];
    public: boolean;
    past?: boolean;
}

const EventLoader: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
    const today = new Date();
    const parseDate = (dateStr: string) => new Date(dateStr + 'T00:00:00');

    const upcomingEvents = events
        .filter((event: EventItem) => parseDate(event.date) >= today)
        .sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());

    const pastEvents = events
        .filter((event: EventItem) => parseDate(event.date) < today)
        .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

    const displayedEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

    return (
        <FrostedGlassPane className="w-full p-4">
            {/* Neon Tab Buttons */}
            <div className="absolute top-2 left-2 flex gap-2">
                <NeonButton
                    text="Upcoming"
                    onClick={() => setActiveTab('upcoming')}
                    className={activeTab === 'upcoming' ? 'nav-link' : ''}
                />
                <NeonButton
                    text="Past"
                    onClick={() => setActiveTab('past')}
                    className={activeTab === 'past' ? 'nav-link' : ''}
                />
            </div>

            {/* Responsive Event Grid */}
            <div className="mt-16 flex flex-wrap gap-6 justify-start">
                {displayedEvents.length === 0 && (
                    <p className="text-white text-center w-full">No events to display.</p>
                )}
                {displayedEvents.map((event) => (
                    <div
                        key={event.id}
                        className="w-[300px] bg-opacity-80 backdrop-blur-sm rounded-xl p-4 bg-black/40 border border-white/20 shadow-md"
                    >
                        <h3 className="text-xl font-bold text-cyan-200 neon-title">{event.title}</h3>
                        <br />
                        <p className="text-sm neon-ice-blue-small mt-1">
                            {formatReadableDate(event.date)}
                        </p>
                        <p className="text-sm neon-ice-blue-small">{event.time}</p>
                        <p className="text-sm neon-ice-blue-small mt-2">{event.venue}</p>
                        <p className="text-xs neon-ice-blue-small mb-3">{event.address}</p>
                        <p className="text-sm neon-ice-blue-small whitespace-pre-line">{event.description}</p>

                        <div className="mt-4 flex flex-col gap-1">
                            {event.ticketsLink && (
                                <a
                                    href={event.ticketsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="neon-ice-blue-small underline text-sm"
                                >
                                    🎟️ Tickets
                                </a>
                            )}
                            {event.promoVideo && (
                                <a
                                    href={event.promoVideo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="neon-ice-blue-small underline text-sm"
                                >
                                    📺 Promo Video
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </FrostedGlassPane>
    );
};

export default EventLoader;

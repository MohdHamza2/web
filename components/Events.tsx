"use client";

import { Button } from "@/components/ui/button";

const events = [
    {
        date: "MAR 15",
        year: "2026",
        title: "Satellite Imagery Analysis Workshop",
        location: "Houston, TX",
        status: "Open",
    },
    {
        date: "APR 02",
        year: "2026",
        title: "Global AI Hackathon: Earth Edition",
        location: "Remote",
        status: "Register",
    },
    {
        date: "APR 18",
        year: "2026",
        title: "Keynote: Future of Propulsion",
        location: "Auditorium B",
        status: "Waitlist",
    },
];

export default function Events() {
    return (
        <section id="events" className="py-32 bg-stone-950 text-white border-t border-white/10">
            <div className="container mx-auto px-6">
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-stone-500 mb-12">Flight Manifest</h2>

                <div className="border-t border-b border-white/10 divide-y divide-white/10">
                    {events.map((event, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-center group hover:bg-white/5 transition-colors duration-300 px-4 -mx-4">
                            {/* Date */}
                            <div className="col-span-2 font-mono">
                                <div className="text-2xl font-bold text-white uppercase">{event.date}</div>
                                <div className="text-xs text-stone-500">{event.year}</div>
                            </div>

                            {/* Title */}
                            <div className="col-span-6">
                                <h3 className="text-2xl font-display font-medium group-hover:pl-4 transition-all duration-300 group-hover:text-mission-blue">
                                    {event.title}
                                </h3>
                            </div>

                            {/* Meta */}
                            <div className="col-span-2 font-mono text-xs text-stone-400 uppercase tracking-wider">
                                {event.location}
                            </div>

                            {/* Action */}
                            <div className="col-span-2 text-right">
                                <span className="inline-block border border-white/20 px-4 py-2 font-mono text-xs uppercase hover:bg-white hover:text-black cursor-pointer transition-all">
                                    {event.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

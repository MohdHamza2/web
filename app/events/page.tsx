export default function EventsPage() {
    return (
        <main className="min-h-screen bg-navy-900 text-white pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 text-center">
                    Events <span className="text-mission-blue">Organized</span>
                </h1>
                <p className="text-center text-stone-400 max-w-2xl mx-auto mb-16">
                    Exploring the frontiers of geoscience through workshops, hackathons, and industrial visits.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-stone-500 py-20 border border-white/10 rounded-lg bg-white/5">
                    <div className="col-span-full">
                        <p className="font-mono text-sm uppercase tracking-widest">Awaiting Data Uplink...</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

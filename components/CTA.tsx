import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-space-black flex items-center justify-center">
            {/* Ambient Shield */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mission-blue/5 to-transparent opacity-20" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="mb-12">
                    <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto mb-8" />
                    <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8">
                        Launch <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Readiness</span>
                    </h2>
                    <p className="text-stone-400 font-mono text-sm uppercase tracking-[0.2em] max-w-xl mx-auto">
                        Initiate sequence to join the elite engineering collective. <br />
                        Systems are primed for new operatives.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
                    <Button size="lg" className="h-16 px-12 text-sm font-bold bg-mission-blue text-white hover:bg-mission-blue/80 uppercase tracking-widest rounded-none border border-mission-blue/50 shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] transition-all scale-100 hover:scale-105">
                        Initialize Uplink
                    </Button>
                    <div className="flex items-center gap-4 text-xs font-mono text-stone-500 uppercase tracking-widest">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        Status: Green
                    </div>
                </div>
            </div>
        </section>
    );
}

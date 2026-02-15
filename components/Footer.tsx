import { Github, Linkedin, Twitter, Mail, Radio } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-5">
                        <Link href="/" className="font-display font-bold text-3xl tracking-tighter mb-6 block text-white uppercase">
                            IEEE <span className="text-mission-blue">GRSS</span>
                        </Link>
                        <p className="text-stone-500 font-mono text-xs uppercase tracking-wider leading-relaxed max-w-sm">
                            Sector 7, Engineering Block <br />
                            Institute of Technology <br />
                            Coordinates: 34.05N, 118.24W
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Index</h4>
                        <ul className="space-y-3 text-stone-400 font-mono text-xs uppercase tracking-wider">
                            <li><Link href="#" className="hover:text-mission-blue transition-colors">Mission</Link></li>
                            <li><Link href="#" className="hover:text-mission-blue transition-colors">Telemetry</Link></li>
                            <li><Link href="#" className="hover:text-mission-blue transition-colors">Manifest</Link></li>
                            <li><Link href="#" className="hover:text-mission-blue transition-colors">Crew</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-5">
                        <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Comms Array</h4>
                        <div className="flex gap-4 mb-8">
                            {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center text-stone-400 hover:text-mission-blue hover:border-mission-blue/50 hover:bg-mission-blue/5 transition-all group">
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-3 text-stone-600 font-mono text-[10px] uppercase tracking-widest">
                            <Radio className="w-4 h-4 text-emerald-500 animate-pulse" />
                            Signal Strength: 100%
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-600 font-mono text-[10px] uppercase tracking-widest">
                    <p>© 2026 IEEE GRSS Student Chapter. All Systems Nominal.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

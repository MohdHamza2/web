import { Github, Linkedin, Twitter, Mail, Radio, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { DecryptedText } from "@/components/ui/decrypted-text";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-5">
                        <Link href="/" className="font-display font-bold text-3xl tracking-tighter mb-6 block text-white uppercase">
                            IEEE <span className="text-mission-blue">GRSS</span>
                        </Link>
                        <div className="space-y-4 max-w-sm">
                            <p className="text-stone-500 font-mono text-xs uppercase tracking-wider leading-relaxed">
                                Muffakham Jah College of Engineering & Technology (MJCET)
                            </p>
                            <div className="w-full h-48 rounded-lg overflow-hidden border border-white/10 bg-stone-900">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7613.312657294364!2d78.442908!3d17.428273000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cd7708dfd7%3A0x77482b7aa8b696f3!2sMuffakham%20Jah%20College%20of%20Engineering%20%26%20Technology%20(MJCET)!5e0!3m2!1sen!2sus!4v1771185621432!5m2!1sen!2sus"
                                    className="w-full h-full border-0 invert hue-rotate-180 opacity-85 hover:opacity-100 transition-opacity duration-300"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Index</h4>
                        <ul className="space-y-3 text-stone-400 font-mono text-sm uppercase tracking-wider">
                            <li>
                                <Link href="/#about-grss" className="hover:text-mission-blue transition-all duration-300 hover:scale-110 origin-left block w-fit">
                                    <DecryptedText text="About" animateOnView={true} speed={40} className="" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="hover:text-mission-blue transition-all duration-300 hover:scale-110 origin-left block w-fit">
                                    <DecryptedText text="Events" animateOnView={true} speed={40} className="" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-mission-blue transition-all duration-300 hover:scale-110 origin-left block w-fit">
                                    <DecryptedText text="Team" animateOnView={true} speed={40} className="" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="hover:text-mission-blue transition-all duration-300 hover:scale-110 origin-left block w-fit">
                                    <DecryptedText text="Resources" animateOnView={true} speed={40} className="" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-5">
                        <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Social Uplink</h4>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/ieee-grss-mjcet/" },
                                { icon: Twitter, label: "X", href: "https://x.com/ieeegrssmjcet?s=21&t=A80UVpD9QpREYvmJRssJxg" },
                                { icon: Github, label: "GitHub", href: "#" },
                                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/ieeegrssmjcet?igsh=MWU5MHV5Ym14OXV5cw==" },
                                { icon: MessageCircle, label: "WhatsApp", href: "https://chat.whatsapp.com/K5SgKXOeH36BxdvdYSVZ9k" },
                                { icon: Mail, label: "Email", href: "mailto:ieeegrssmjcet@gmail.com" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-4 text-stone-400 group"
                                >
                                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-mission-blue group-hover:bg-mission-blue/10 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:text-mission-blue transition-all duration-300 rounded-lg">
                                        <item.icon className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                                    </div>
                                    <span className="font-mono text-xs uppercase tracking-wider group-hover:text-white group-hover:translate-x-2 transition-all duration-300">{item.label}</span>
                                </a>
                            ))}
                        </div>
                        <p className="text-stone-400 font-mono text-[10px] uppercase tracking-wider leading-relaxed border-t border-white/10 pt-4 mt-8">
                            Join our community channel and follow our feeds for the latest mission updates.
                        </p>
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

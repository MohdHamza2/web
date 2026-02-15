import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function FacultyAdvisor() {
    return (
        <section className="py-20 bg-navy-900 relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] w-56 md:w-72">
                                <img
                                    src="/team/Faculty.jpeg" // Placeholder image
                                    alt="Faculty Advisor"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            Faculty <span className="text-blue-500">Advisor</span>
                        </h2>
                        <div className="h-1 w-20 bg-blue-500 mx-auto md:mx-0 mb-8"></div>

                        <Card className="bg-navy-800/50 border-white/10 p-8 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-2">Dr. Uma N Dulhare</h3>
                            <p className="text-blue-400 font-medium mb-6">Chapter Advisor, IEEE SMC & GRSS MJCET</p>

                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    As the Faculty Advisor for the IEEE GRSS Student Chapter, Dr. Dulhare plays a pivotal role in guiding our mission to advance Earth observation technologies.
                                </p>
                                <p>
                                    With extensive expertise in remote sensing and geoscience, she mentors our team in developing innovative solutions and fostering a collaborative research environment. Her leadership ensures that our chapter remains at the forefront of technological advancement in the field.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/3"></div>
        </section>
    );
}

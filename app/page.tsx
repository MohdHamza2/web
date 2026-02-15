import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import FacultyAdvisor from "@/components/FacultyAdvisor";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import SatelliteCanvas from "@/components/SatelliteCanvas";
import { ShootingStars } from "@/components/ui/shooting-stars";
import LaunchSequence from "@/components/LaunchSequence";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900 text-white overflow-hidden relative">
      <LaunchSequence />
      <ShootingStars starColor="#FFFFFF" trailColor="#3B82F6" className="fixed inset-0 z-0" minDelay={2000} maxDelay={5000} />
      <Hero />
      <SatelliteCanvas />
      <ValueProps />
      <FacultyAdvisor />
      <Stats />
      <Projects />
      <Events />
      <Team />
      <CTA />
    </main>
  );
}

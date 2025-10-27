import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Expertise from '@/components/sections/Expertise';
import ProjectsAdvanced from '@/components/sections/ProjectsAdvanced';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
       <ProjectsAdvanced />
      <Expertise />
      <Stats />
      <Contact />
    </main>
  );
}

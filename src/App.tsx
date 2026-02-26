import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { Navigation } from "@/features/navigation/Navigation";
import { Hero } from "@/features/hero/Hero";
import { Projects } from "@/features/projects/Projects";
import { Skills } from "@/features/skills/Skills";
import { Timeline } from "@/features/timeline/Timeline";
import { Blog } from "@/features/blog/Blog";
import { Contact } from "@/features/contact/Contact";

export default function App() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      <SpeedInsights/>
      <Analytics/>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}
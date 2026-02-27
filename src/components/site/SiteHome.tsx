import { lazy, Suspense, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "@/components/site/navigation/Navigation";
import { Hero } from "@/components/site/hero/Hero";

const Projects = lazy(() => import("@/components/site/projects/Projects").then((module) => ({ default: module.Projects })));
const Skills = lazy(() => import("@/components/site/skills/Skills").then((module) => ({ default: module.Skills })));
const Timeline = lazy(() => import("@/components/site/timeline/Timeline").then((module) => ({ default: module.Timeline })));
const Blog = lazy(() => import("@/components/site/blog/Blog").then((module) => ({ default: module.Blog })));
const Contact = lazy(() => import("@/components/site/contact/Contact").then((module) => ({ default: module.Contact })));

type IdleApi = {
  requestIdleCallback?: (callback: () => void) => number;
  cancelIdleCallback?: (id: number) => void;
};

function DeferredSectionsSkeleton() {
  return (
    <div className="space-y-20 px-6 py-24">
      <div className="mx-auto h-72 max-w-6xl animate-pulse rounded-xl border border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-white/5" />
      <div className="mx-auto h-72 max-w-6xl animate-pulse rounded-xl border border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-white/5" />
      <div className="mx-auto h-72 max-w-6xl animate-pulse rounded-xl border border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-white/5" />
    </div>
  );
}

export function SiteHome() {
  useEffect(() => {
    const preloadDeferredSections = () => {
      void import("@/components/site/projects/Projects");
      void import("@/components/site/skills/Skills");
      void import("@/components/site/timeline/Timeline");
      void import("@/components/site/blog/Blog");
      void import("@/components/site/contact/Contact");
    };

    const idleApi = window as Window & IdleApi;

    if (typeof idleApi.requestIdleCallback === "function") {
      const idleId = idleApi.requestIdleCallback(preloadDeferredSections);
      return () => {
        if (typeof idleApi.cancelIdleCallback === "function") {
          idleApi.cancelIdleCallback(idleId);
        }
      };
    }

    const timeoutId = window.setTimeout(preloadDeferredSections, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SpeedInsights />
      <Analytics />
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<DeferredSectionsSkeleton />}>
          <Projects />
          <Skills />
          <Timeline />
          <Blog />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

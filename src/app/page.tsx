import HeroSection from "./home/components/hero-section";
import AboutSection from "./home/components/about-section";
import WorkSection from "./home/components/work-section";
import ExperienceSection from "./home/components/experience-section";
import TimelineSection from "./home/components/timeline-section";
import TechStackSection from "./home/components/tech-stack-section";
import RecentProjectsSection from "./home/components/recent-projects-section";
import ContactSection from "./home/components/contact-section";
import LineChartStorySection from "./home/components/line-chart-story-section";
import TopNavigation from "@/components/ui-david/top-navigation";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <TopNavigation />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <TimelineSection />
      <LineChartStorySection />
      <TechStackSection />
      <RecentProjectsSection />
      <ContactSection />
    </main>
  );
}

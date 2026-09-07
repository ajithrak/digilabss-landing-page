import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StoryWhat from "@/components/StoryWhat";
import StoryWhy from "@/components/StoryWhy";
import StatsStrip from "@/components/StatsStrip";
import ProcessSteps from "@/components/ProcessSteps";
import LeadForm from "@/components/LeadForm";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <StoryWhat />
        <StoryWhy />
        <StatsStrip />
        <ProcessSteps />
        <LeadForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

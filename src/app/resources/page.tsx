import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesContent from "@/components/resources/ResourcesContent";
import ResourcesUseCases from "@/components/resources/ResourcesUseCases";
import ResourcesGuides from "@/components/resources/ResourcesGuides";
import ResourcesCTA from "@/components/resources/ResourcesCTA";

export const metadata: Metadata = {
  title: "Resources - AI Automation Guides, Case Studies & Best Practices | Wachsum.app",
  description: "Discover how businesses are using AI agents to automate customer support, generate leads, and scale operations. Get guides, case studies, and implementation tips.",
  keywords: "AI automation guides, chatbot case studies, customer service automation, lead generation AI, business automation resources",
  openGraph: {
    title: "AI Automation Resources & Success Stories | Wachsum.app",
    description: "Learn how to implement AI agents in your business with our comprehensive guides and real customer success stories.",
    type: "website",
  },
};

export default function ResourcesPage() {
  return (
    <main>
      <Header />
      <ResourcesHero />
      <ResourcesContent />
      <ResourcesUseCases />
      <ResourcesGuides />
      <ResourcesCTA />
      <Footer />
    </main>
  );
}

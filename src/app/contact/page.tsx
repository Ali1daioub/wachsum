import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Wachsum.app AI Experts",
  description: "Contact our AI automation experts to discuss how Wachsum.app can transform your business. Get personalized demos, support, and implementation guidance.",
  keywords: "contact AI experts, customer support, business automation consultation, demo booking, technical support",
  openGraph: {
    title: "Contact Wachsum.app - AI Automation Experts",
    description: "Get in touch with our AI experts to see how we can automate your business processes and boost efficiency.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Wachsum.app - AI-Powered Customer Communication",
  description: "Learn about Wachsum.app's mission to transform business communication with intelligent AI agents that handle calls, chats, and lead generation 24/7.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transforming Business Communication with AI
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Wachsum.app was founded with a simple mission: to help businesses never miss an opportunity
                by providing intelligent AI agents that handle customer interactions 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                  <p className="text-gray-600 mb-4">
                    Founded in 2024, Wachsum.app emerged from a simple observation: businesses were losing
                    countless opportunities due to missed calls, delayed responses, and overwhelmed support teams.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our team of AI specialists and customer experience experts came together to create a solution
                    that would ensure no customer inquiry goes unanswered, no lead gets lost, and no business
                    opportunity slips through the cracks.
                  </p>
                  <p className="text-gray-600">
                    Today, we're proud to serve thousands of businesses worldwide, helping them scale their
                    customer communications and grow their revenue through intelligent automation.
                  </p>
                </div>
                <div className="bg-gray-100 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                    <p className="text-gray-600 mb-4">Calls Handled Daily</p>

                    <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                    <p className="text-gray-600 mb-4">Customer Satisfaction</p>

                    <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                    <p className="text-gray-600">Available Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
                  <p className="text-gray-600">
                    Every decision we make is guided by what's best for our customers and their success.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously push the boundaries of what's possible with AI and automation.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
                  <p className="text-gray-600">
                    Our platform is built to be dependable, secure, and always available when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-600 mb-12">
                Meet the experts behind Wachsum.app's cutting-edge AI technology.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">AK</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Alex Kim</h3>
                  <p className="text-blue-600 mb-2">CEO & Co-Founder</p>
                  <p className="text-gray-600 text-sm">
                    Former Google AI researcher with 10+ years in machine learning and NLP.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">SR</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Rodriguez</h3>
                  <p className="text-purple-600 mb-2">CTO & Co-Founder</p>
                  <p className="text-gray-600 text-sm">
                    Previously led engineering teams at Microsoft and Amazon, expert in scalable AI systems.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">MJ</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Marcus Johnson</h3>
                  <p className="text-green-600 mb-2">VP of Customer Success</p>
                  <p className="text-gray-600 text-sm">
                    20+ years in customer experience, former VP at Salesforce and HubSpot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using Wachsum.app to automate their customer communications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://api.leadconnectorhq.com/widget/booking/sjHvld0GhtDNlZV8wG3b"
                target="_blank"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

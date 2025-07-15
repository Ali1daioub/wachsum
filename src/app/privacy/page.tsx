import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Wachsum.app",
  description: "Wachsum.app Privacy Policy and Data Protection Agreement (DPA) - Learn how we protect your data and comply with GDPR regulations.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy & Data Protection</h1>
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> January 1, 2024 | <strong>Last Updated:</strong> January 1, 2024
            </p>

            {/* Privacy Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account,
                use our services, or contact us for support. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Business information (company name, industry, use case)</li>
                <li>Call recordings and transcripts (with your consent)</li>
                <li>Usage data and analytics</li>
                <li>Technical information (IP address, device information)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide and improve our AI communication services</li>
                <li>Process transactions and send notifications</li>
                <li>Respond to your comments and questions</li>
                <li>Train and improve our AI models (anonymized)</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Data Sharing</h3>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or rent your personal information. We may share your information only in limited circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>With trusted service providers (under strict data processing agreements)</li>
                <li>In case of business transfer (merger, acquisition)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Data Security</h3>
              <p className="text-gray-600 mb-6">
                We implement industry-standard security measures including encryption, access controls,
                and regular security audits to protect your information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Your Rights (GDPR)</h3>
              <p className="text-gray-600 mb-4">Under GDPR, you have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your data ("right to be forgotten")</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
            </section>

            {/* DPA Section */}
            <section id="dpa" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Processing Agreement (DPA)</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Data Processing</h3>
              <p className="text-gray-600 mb-6">
                When you use Wachsum.app for business purposes, we act as a data processor on your behalf.
                This DPA governs how we handle personal data of your customers and end-users.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Your Responsibilities as Data Controller</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Ensure lawful basis for processing personal data</li>
                <li>Provide appropriate privacy notices to your customers</li>
                <li>Obtain necessary consents for call recording and AI processing</li>
                <li>Respond to data subject requests from your customers</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Our Commitments as Data Processor</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Process data only according to your documented instructions</li>
                <li>Maintain appropriate technical and organizational measures</li>
                <li>Assist with data subject requests and compliance obligations</li>
                <li>Notify you of any data breaches within 72 hours</li>
                <li>Delete or return data upon termination of services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. International Transfers</h3>
              <p className="text-gray-600 mb-6">
                Data may be transferred to and processed in countries outside the EU. We ensure adequate
                protection through Standard Contractual Clauses (SCCs) and other approved mechanisms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or DPA, please contact us:
              </p>
              <div className="text-gray-600">
                <p><strong>Data Protection Officer:</strong> privacy@wachsum.app</p>
                <p><strong>General Contact:</strong> support@wachsum.app</p>
                <p><strong>Phone Support:</strong> +1 (864) 778-2414</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

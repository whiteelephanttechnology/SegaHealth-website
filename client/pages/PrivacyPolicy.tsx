import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function PrivacyPolicy() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openCalendly = () => {
    window.location.href = "https://calendly.com/iam-samisiddiqui/30min";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 lg:top-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:max-w-4xl z-50 bg-black/40 lg:bg-black/80 backdrop-blur-md text-white px-6 py-3 lg:rounded-full border-b lg:border border-white/10 shadow-lg"
        style={{
          boxShadow:
            "0 0 20px rgba(249, 115, 22, 0.3), 0 0 40px rgba(249, 115, 22, 0.2), 0 0 60px rgba(249, 115, 22, 0.1), 0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="inline-block animate-logo-spin">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754696037/WhatsApp_Image_2025-08-04_at_20.42.08_81fe8df0_1_tq2qgj.svg"
                  alt="SegaHealth Logo"
                  className="h-16 lg:h-12 w-auto"
                />
              </span>
            </Link>
            <div className="hidden lg:flex space-x-6">
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/#about"
                className="hover:text-orange-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/#courses"
                className="hover:text-orange-500 transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/#equipment"
                className="hover:text-orange-500 transition-colors"
              >
                Equipment
              </Link>
              <Link
                to="/#contact"
                className="hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-orange-500/20 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span
                  className={`h-1 w-6 bg-orange-500 rounded transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
                ></span>
                <span
                  className={`h-1 w-6 bg-orange-500 rounded transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`h-1 w-6 bg-orange-500 rounded transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
                ></span>
              </div>
            </button>
          </div>
          <Button
            onClick={openCalendly}
            className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium ml-6"
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 lg:top-20 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:max-w-sm z-40 bg-black/90 backdrop-blur-md text-white p-6 rounded-2xl border border-white/10 shadow-lg lg:hidden"
            style={{
              boxShadow:
                "0 0 20px rgba(249, 115, 22, 0.3), 0 0 40px rgba(249, 115, 22, 0.2), 0 0 60px rgba(249, 115, 22, 0.1), 0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/#about"
                className="hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#courses"
                className="hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/#equipment"
                className="hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Equipment
              </Link>
              <Link
                to="/#contact"
                className="hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCalendly();
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Effective Date: August 29, 2025
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12 text-gray-700">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-orange-500">1.</span> Introduction
                </h2>
                <p className="leading-relaxed mb-4">
                  SegaHealth LLC (&quot;SegaHealth,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visit our website</li>
                  <li>Use the SegaHealth or SegaHealth Academy mobile applications</li>
                  <li>Participate in educational programs or certifications</li>
                  <li>Interact with our services through third-party platforms</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  SegaHealth Academy operates as a division of SegaHealth LLC.
                </p>
                <p className="leading-relaxed">
                  By using our services, you agree to the practices described in this policy.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-orange-500">2.</span> Information We Collect
                </h2>
                <p className="leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">A. Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Mailing address</li>
                      <li>Date of birth (if required for certification)</li>
                      <li>Professional credentials</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">B. Account & Usage Information</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Login credentials</li>
                      <li>Course progress and certifications</li>
                      <li>Training activity data</li>
                      <li>Device information (IP address, device type, OS version)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">C. Payment Information</h3>
                    <p className="leading-relaxed">
                      Payments are processed securely through third-party providers such as Stripe. We do not store full credit card information on our servers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">D. Health & Fitness Information</h3>
                    <p className="leading-relaxed">
                      If using WB-EMS training services or integrated wearable devices, limited performance or biometric data may be processed for training and certification purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-orange-500">3.</span> How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide education and certification services</li>
                  <li>Process payments</li>
                  <li>Manage user accounts</li>
                  <li>Improve platform functionality</li>
                  <li>Communicate updates and marketing information</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
                <p className="leading-relaxed mt-4 font-medium">
                  We do not sell personal information to third parties.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-orange-500">4.</span> Third-Party Services
                </h2>
                <p className="leading-relaxed mb-4">
                  We may use trusted third-party providers including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Apple App Store / Google Play</li>
                  <li>MyPT Hub (white-label platform services)</li>
                  <li>Stripe (payment processing)</li>
                  <li>Email marketing and CRM platforms</li>
                  <li>Analytics providers</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  These services may process data in accordance with their own privacy policies.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-orange-500">5.</span> Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no system is completely secure.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-orange-500">6.</span> Your Rights
                </h2>
                <p className="leading-relaxed mb-4">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent</li>
                  <li>Opt out of marketing communications</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To make a request, contact us at:{" "}
                  <a
                    href="mailto:info@segahealth.com"
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    info@segahealth.com
                  </a>
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-orange-500">7.</span> Data Retention
                </h2>
                <p className="leading-relaxed mb-4">
                  We retain information only as long as necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide services</li>
                  <li>Maintain certification records</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-orange-500">8.</span> Children&apos;s Privacy
                </h2>
                <p className="leading-relaxed">
                  Our services are not intended for individuals under 18 years of age without parental consent.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-orange-500">9.</span> Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-orange-500">10.</span> Contact Information
                </h2>
                <p className="leading-relaxed mb-2">
                  <strong>SegaHealth LLC</strong>
                </p>
                <p className="leading-relaxed mb-2">
                  600 Three Islands Blvd Hallandale Beach FL 33009
                </p>
                <p className="leading-relaxed">
                  Email:{" "}
                  <a
                    href="mailto:info@segahealth.com"
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    info@segahealth.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
              style={{
                boxShadow:
                  "15px 0 30px rgba(249, 115, 22, 0.6), 30px 0 60px rgba(249, 115, 22, 0.4), 45px 0 90px rgba(249, 115, 22, 0.2)",
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="font-bold text-xl">SegaHealth Academy</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leading the future of fitness with professional WB-EMS
                certification and training programs.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link to="/#about" className="hover:text-orange-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/#courses" className="hover:text-orange-500 transition-colors">
                    Certification Program
                  </Link>
                </li>
                <li>
                  <Link to="/#equipment" className="hover:text-orange-500 transition-colors">
                    Equipment
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="hover:text-orange-500 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-orange-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="hover:text-orange-500 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Email: info@segahealth.com</li>
                <li>Office #: 1-954-738-7220</li>
                <li>
                  Address: 600 Three Islands Blvd, Hallandale Beach FL 33009
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>&copy; 2025 SegaHealth LLC All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookie-policy" className="hover:text-orange-500 transition-colors">
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

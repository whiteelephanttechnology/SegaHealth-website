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

export default function CookiePolicy() {
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
              <Link to="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link to="/#about" className="hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link to="/#courses" className="hover:text-orange-500 transition-colors">
                Courses
              </Link>
              <Link to="/#equipment" className="hover:text-orange-500 transition-colors">
                Equipment
              </Link>
              <Link to="/#contact" className="hover:text-orange-500 transition-colors">
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
              <Link to="/" className="hover:text-orange-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/#about" className="hover:text-orange-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/#courses" className="hover:text-orange-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Courses
              </Link>
              <Link to="/#equipment" className="hover:text-orange-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Equipment
              </Link>
              <Link to="/#contact" className="hover:text-orange-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
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
            Cookie <span className="text-orange-500">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg">Effective Date: August 29, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12 text-gray-700">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">1.</span> Introduction
              </h2>
              <p className="leading-relaxed mb-4">
                This Cookie Policy explains how SegaHealth LLC (&quot;SegaHealth,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar technologies when you visit our website, use our mobile applications, or interact with our services through third-party platforms.
              </p>
              <p className="leading-relaxed">
                This policy should be read alongside our{" "}
                <Link to="/privacy-policy" className="text-orange-500 hover:text-orange-600 font-medium">
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your personal information.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">2.</span> What Are Cookies?
              </h2>
              <p className="leading-relaxed">
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help the website remember your preferences, improve performance, and provide analytics. We may also use similar technologies such as web beacons, pixel tags, and local storage.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">3.</span> Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">A. Essential Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are necessary for the website and applications to function. They enable core features such as security, network management, and account access. You cannot opt out of these cookies.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">B. Functional Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies remember your preferences (such as language or region) and enhance your experience. They may be set by us or by third-party providers whose services we have integrated.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">C. Analytics Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies help us understand how visitors interact with our website and applications. They collect information such as pages visited, time spent, and traffic sources. This data is used to improve our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">D. Marketing Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies may be used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. They may be set by our advertising partners.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">4.</span> Third-Party Cookies
              </h2>
              <p className="leading-relaxed mb-4">
                Our services may integrate with third-party platforms that set their own cookies, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Calendly (scheduling)</li>
                <li>Stripe (payment processing)</li>
                <li>Analytics providers</li>
                <li>Email marketing and CRM platforms</li>
                <li>Apple App Store / Google Play (for mobile applications)</li>
              </ul>
              <p className="leading-relaxed">
                These third parties have their own privacy and cookie policies. We encourage you to review their policies.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">5.</span> Managing Your Cookie Preferences
              </h2>
              <p className="leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Browser settings:</strong> Most browsers allow you to refuse or delete cookies. Check your browser&apos;s help section for instructions.</li>
                <li><strong>Opt-out tools:</strong> You may use industry opt-out tools for certain advertising cookies.</li>
                <li><strong>Contact us:</strong> For questions about our use of cookies, contact us at{" "}
                  <a href="mailto:info@segahealth.com" className="text-orange-500 hover:text-orange-600 font-medium">
                    info@segahealth.com
                  </a>.
                </li>
              </ul>
              <p className="leading-relaxed">
                Please note that disabling certain cookies may affect the functionality of our website and services.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">6.</span> Cookie Duration
              </h2>
              <p className="leading-relaxed">
                Cookies may be &quot;session&quot; cookies (deleted when you close your browser) or &quot;persistent&quot; cookies (stored for a set period or until you delete them). The duration varies depending on the type and purpose of the cookie.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">7.</span> Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">8.</span> Contact Information
              </h2>
              <p className="leading-relaxed mb-2">
                <strong>SegaHealth LLC</strong>
              </p>
              <p className="leading-relaxed mb-2">600 Three Islands Blvd Hallandale Beach FL 33009</p>
              <p className="leading-relaxed">
                Email:{" "}
                <a href="mailto:info@segahealth.com" className="text-orange-500 hover:text-orange-600 font-medium">
                  info@segahealth.com
                </a>
              </p>
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
                Leading the future of fitness with professional WB-EMS certification and training programs.
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
                <li>Address: 600 Three Islands Blvd, Hallandale Beach FL 33009</li>
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

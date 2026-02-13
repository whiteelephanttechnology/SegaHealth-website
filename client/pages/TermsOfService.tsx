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

export default function TermsOfService() {
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
            Terms of <span className="text-orange-500">Service</span>
          </h1>
          <p className="text-gray-400 text-lg">Effective Date: August 15, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12 text-gray-700">
            <div>
              <p className="leading-relaxed mb-6">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of services provided by SegaHealth LLC (&quot;SegaHealth,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), including SegaHealth Academy, our website, mobile applications, certifications, educational programs, and related services.
              </p>
              <p className="leading-relaxed font-medium">
                By accessing or using our services, you agree to these Terms.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">1.</span> Legal Entity
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>SegaHealth Academy operates as a division of SegaHealth LLC.</li>
                <li>All services are legally provided by SegaHealth LLC.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">2.</span> Eligibility
              </h2>
              <p className="leading-relaxed mb-4">
                You must be at least 18 years old to use our services unless supervised by a parent or legal guardian.
              </p>
              <p className="leading-relaxed mb-4">By using our services, you represent that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are legally able to enter into this agreement.</li>
                <li>You will provide accurate and truthful information.</li>
                <li>You understand the physical risks associated with WB-EMS training.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">3.</span> Medical & Fitness Disclaimer{" "}
                <span className="text-orange-500 text-base font-normal">(Critical Section)</span>
              </h2>
              <p className="leading-relaxed mb-4">
                Whole-Body Electromyostimulation (WB-EMS) is a physical training modality.
              </p>
              <p className="leading-relaxed mb-4">You acknowledge:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>WB-EMS may involve physical exertion.</li>
                <li>Improper use can result in muscle soreness, injury, or in rare cases, rhabdomyolysis.</li>
                <li>WB-EMS is not recommended for individuals with pacemakers, implanted electrical devices, epilepsy, pregnancy, or other contraindicated conditions.</li>
              </ul>
              <p className="leading-relaxed mb-4">You agree:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for consulting a qualified medical professional before participating.</li>
                <li>SegaHealth does not provide medical advice.</li>
                <li>Participation is voluntary and at your own risk.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">4.</span> Assumption of Risk & Waiver of Liability
              </h2>
              <p className="leading-relaxed mb-4">
                By participating in WB-EMS training or educational programming, you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Voluntarily assume all risks associated with physical training.</li>
                <li>Release SegaHealth LLC, its officers, instructors, partners, and affiliates from liability for injury, illness, or damages arising from participation, except where prohibited by law.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                This includes injuries resulting from misuse of equipment or failure to follow instruction.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">5.</span> Certification & Education
              </h2>
              <p className="leading-relaxed mb-4">
                Completion of courses or certifications does not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Employment</li>
                <li>Licensing approval</li>
                <li>Regulatory acceptance in all jurisdictions</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Users are responsible for complying with local laws and fitness regulations.
              </p>
              <p className="leading-relaxed mb-4">SegaHealth reserves the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify certification standards</li>
                <li>Revoke certifications for misconduct or misuse</li>
                <li>Update educational materials</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">6.</span> Payments & Refunds
              </h2>
              <p className="leading-relaxed mb-4">
                Payments are processed through secure third-party providers.
              </p>
              <p className="leading-relaxed mb-4">Unless otherwise stated:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fees are non-refundable.</li>
                <li>Subscription services renew automatically unless cancelled.</li>
                <li>Chargebacks may result in account suspension.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to change pricing with notice.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">7.</span> Intellectual Property
              </h2>
              <p className="leading-relaxed mb-4">All content including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Videos</li>
                <li>Course materials</li>
                <li>Logos</li>
                <li>Branding</li>
                <li>Templates</li>
                <li>App features</li>
              </ul>
              <p className="leading-relaxed mb-4">
                are the intellectual property of SegaHealth LLC.
              </p>
              <p className="leading-relaxed mb-4">You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy</li>
                <li>Reproduce</li>
                <li>Distribute</li>
                <li>Resell</li>
                <li>Modify</li>
              </ul>
              <p className="leading-relaxed mt-4">
                without written consent.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">8.</span> Account Responsibility
              </h2>
              <p className="leading-relaxed mb-4">You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Maintaining account security</li>
                <li>Protecting login credentials</li>
                <li>All activity under your account</li>
              </ul>
              <p className="leading-relaxed mb-4">
                We reserve the right to suspend or terminate accounts for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fraud</li>
                <li>Misrepresentation</li>
                <li>Safety violations</li>
                <li>Improper EMS use</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">9.</span> Third-Party Platforms
              </h2>
              <p className="leading-relaxed mb-4">Our services may integrate with:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Apple App Store</li>
                <li>Google Play</li>
                <li>MyPT Hub</li>
                <li>Stripe</li>
                <li>Wearable devices</li>
              </ul>
              <p className="leading-relaxed">
                We are not responsible for third-party service failures or policies.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">10.</span> Limitation of Liability
              </h2>
              <p className="leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <p className="leading-relaxed mb-4">
                SegaHealth LLC shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Indirect damages</li>
                <li>Lost profits</li>
                <li>Consequential damages</li>
                <li>Data loss</li>
                <li>Business interruption</li>
              </ul>
              <p className="leading-relaxed">
                Total liability shall not exceed the amount paid by the user in the previous 12 months.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">11.</span> Indemnification
              </h2>
              <p className="leading-relaxed mb-4">
                You agree to indemnify and hold harmless SegaHealth LLC from any claims arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Misuse of WB-EMS equipment</li>
                <li>Violation of these Terms</li>
                <li>Violation of laws or regulations</li>
                <li>Injury to third parties caused by your instruction or use</li>
              </ul>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">12.</span> Governing Law
              </h2>
              <p className="leading-relaxed mb-4">
                These Terms are governed by the laws of the State of Florida, United States.
              </p>
              <p className="leading-relaxed">
                Any disputes shall be resolved in Florida courts unless otherwise required by law.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">13.</span> Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We may update these Terms at any time. Continued use of our services constitutes acceptance of updated Terms.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-orange-500">14.</span> Contact Information
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

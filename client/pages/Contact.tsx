import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useState, useRef } from "react";

const contactReasons = [
  "Certification Inquiry",
  "Equipment Questions",
  "Schedule Training",
  "Partnership Interest",
  "General Question",
  "Other",
];

const contactMethods = ["Phone", "Email", "Text"];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    reason: "Certification Inquiry",
    contactMethod: "Email",
    message: "",
  });

  const formRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      reason: "Certification Inquiry",
      contactMethod: "Email",
      message: "",
    });
    alert(
      "Thank you for reaching out! We will contact you shortly to confirm your inquiry."
    );
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-block bg-orange-500/20 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            SEGAHEALTH ACADEMY
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Contact{" "}
            <span className="text-orange-500">SegaHealth Academy</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Have questions about our WB-EMS certification program or training
            services? Reach out today and our team will help you take the next
            step toward becoming a certified trainer or expanding your business.
          </p>
        </div>
      </section>

      {/* Contact Card Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              {/* Image Section */}
              <div className="hidden lg:block">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754757529/XB_2022-29_pl7nh0.jpg"
                  alt="WB-EMS Training Equipment"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Content Section */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
                  Talk to our team
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Call us directly or send a message and we'll help you get
                  started with your SegaHealth Academy certification or
                  partnership.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+1-954-738-7220"
                    className="block w-full"
                  >
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 rounded-full font-semibold">
                      Call Now: (954) 738-7220
                    </Button>
                  </a>

                  <Button
                    onClick={scrollToForm}
                    className="w-full bg-white hover:bg-gray-50 text-black border-2 border-orange-500 text-lg py-6 rounded-full font-semibold"
                  >
                    Request Appointment
                  </Button>

                  <button
                    onClick={scrollToForm}
                    className="w-full text-orange-500 hover:text-orange-600 font-semibold py-3 transition-colors"
                  >
                    Send us a message →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Send us a message
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="(954) 738-7220"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Reason for Contact
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {contactReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="contactMethod"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Preferred Contact Method
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {contactMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-black mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Send Message
            </button>

            <p className="text-xs text-gray-500 text-center mt-6">
              By submitting this form, you agree to be contacted by SegaHealth
              Academy regarding your inquiry.
            </p>
          </form>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Training</h3>
              <p className="text-gray-600">
                Comprehensive WB-EMS certification from industry leaders with
                hands-on experience.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Schedule training sessions that fit your busy lifestyle and
                business needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Support</h3>
              <p className="text-gray-600">
                Join a network of certified trainers and receive ongoing support
                and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to get <span className="text-orange-500">certified</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Start with a conversation. We'll help you understand the next best
            step toward becoming a SegaHealth certified trainer.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+1-954-738-7220">
              <Button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-full w-full md:w-auto">
                Call Now
              </Button>
            </a>
            <Button
              onClick={scrollToForm}
              className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold text-lg rounded-full w-full md:w-auto"
            >
              Request Appointment
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

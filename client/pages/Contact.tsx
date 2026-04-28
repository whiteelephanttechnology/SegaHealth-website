import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader transparent />

      {/* Hero Contact Section */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-black to-black" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Talk to SAGE
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Call Sage directly and we'll help you get started with your
              SegaHealth Academy certification or partnership.
            </p>
          </div>

          <div className="mb-10 max-w-xs sm:max-w-sm mx-auto rounded-3xl overflow-hidden border border-orange-500/40 bg-zinc-900/80 backdrop-blur shadow-[0_0_40px_rgba(249,115,22,0.15)]">
            <div className="p-3">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/contact-sage.png"
                  alt="Sage - SegaHealth Academy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="tel:+17869838885"
              className="block w-full md:w-auto md:inline-block"
            >
              <Button className="w-full md:w-auto px-12 py-5 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full shadow-[0_0_35px_rgba(249,115,22,0.35)]">
                Call Now: +1 786 983 8885
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-center">
              <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center mb-6 ring-1 ring-orange-500/40">
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
              <h3 className="text-xl font-bold mb-3 text-white">Expert Training</h3>
              <p className="text-gray-300">
                Comprehensive WB-EMS certification from industry leaders with
                hands-on experience.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-center">
              <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center mb-6 ring-1 ring-orange-500/40">
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
              <h3 className="text-xl font-bold mb-3 text-white">Flexible Scheduling</h3>
              <p className="text-gray-300">
                Schedule training sessions that fit your busy lifestyle and
                business needs.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-center">
              <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center mb-6 ring-1 ring-orange-500/40">
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
              <h3 className="text-xl font-bold mb-3 text-white">Industry Support</h3>
              <p className="text-gray-300">
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
            Call Sage today. We'll help you understand the next best step toward
            becoming a SegaHealth certified trainer.
          </p>
          <a href="tel:+17869838885">
            <Button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-full shadow-[0_0_35px_rgba(249,115,22,0.35)]">
              Call Now: +1 786 983 8885
            </Button>
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

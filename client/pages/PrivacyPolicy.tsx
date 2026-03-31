import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const sections = [
  {
    title: "Introduction",
    body: [
      "SegaHealth Academy provides WB-EMS education, certification, and related services. This Privacy Policy explains how SegaHealth Academy and SegaHealth LLC collect, use, store, and share personal information when you visit our website, register for courses, purchase services, attend live sessions, or contact us.",
      "By using our website or services, you agree to the practices described in this policy.",
    ],
  },
  {
    title: "Data Collection",
    body: [
      "We may collect personal information you provide directly, such as your name, email address, phone number, billing address, company details, and any information you submit through forms, inquiries, or course registration.",
      "Payments are processed through Stripe. We do not store full payment card numbers on our website, but we may receive limited transaction details such as payment status, customer name, and billing information needed to confirm purchases and maintain records.",
      "If you join training calls, consultations, or online sessions, we may collect information associated with Zoom, including your name, email address, meeting attendance details, and any information you choose to share during those sessions.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use personal information to provide certification programs, process registrations and payments, schedule and deliver training sessions, respond to questions, send service updates, and improve our website and offerings.",
      "We may also use your information to communicate about courses, support requests, account activity, and important administrative notices related to your relationship with SegaHealth Academy.",
    ],
  },
  {
    title: "Sharing Policy",
    body: [
      "We do not sell personal information. We may share information with service providers that help us operate our business, such as Stripe for payment processing, Zoom for virtual sessions, email or hosting providers, and professional advisors when needed for legal or operational support.",
      "We may also disclose information when required by law, to protect our rights, to prevent fraud, or in connection with a business transfer such as a merger, acquisition, or asset sale.",
    ],
  },
  {
    title: "Retention",
    body: [
      "We keep personal information for as long as reasonably necessary to provide services, maintain business and tax records, resolve disputes, enforce agreements, and meet legal obligations.",
      "When information is no longer needed for these purposes, we will delete it, de-identify it, or securely store it until deletion is practical.",
    ],
  },
  {
    title: "User Rights",
    body: [
      "Depending on where you live, you may have the right to request access to the personal information we hold about you, ask for corrections, request deletion, object to certain uses, or ask for a copy of your information in a portable format.",
      "To make a privacy request, contact us using the email address listed below. We may need to verify your identity before completing your request.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our website may use cookies and similar technologies to remember preferences, understand site traffic, improve performance, and support basic website functions.",
      "You can manage cookies through your browser settings. Disabling cookies may affect how some parts of the website function.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "SegaHealth Academy's services are intended for adults and professional training audiences. We do not knowingly collect personal information from children under 13.",
      "If you believe a child has provided personal information to us, please contact us so we can review the situation and delete the information if appropriate.",
    ],
  },
  {
    title: "Policy Changes",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or business practices.",
      "When we make material changes, we will post the updated policy on this page and revise the effective date below.",
    ],
  },
  {
    title: "Contact Information",
    body: [
      "If you have questions about this Privacy Policy or want to make a privacy-related request, please contact SegaHealth Academy at privacy@segahealthacademy.com.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />

      <main>
        <section className="bg-black text-white pt-36 pb-16 px-6">
          <div className="max-w-[800px] mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500 mb-4">
              SegaHealth Academy
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              This page explains how we collect, use, share, and protect
              personal information related to SegaHealth Academy's WB-EMS
              certification services.
            </p>
            <p className="text-sm text-gray-400 mt-6">
              Effective date: August 16, 2025
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-[800px] mx-auto space-y-8">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="border border-gray-200 rounded-3xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white font-semibold">
                    {index + 1}
                  </span>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-7">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

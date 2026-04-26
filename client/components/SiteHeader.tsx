import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface SiteHeaderProps {
  homePage?: boolean;
  transparent?: boolean;
  onPrimaryAction?: () => void;
}

const logoSrc =
  "https://res.cloudinary.com/dcd0zqorf/image/upload/v1754696037/WhatsApp_Image_2025-08-04_at_20.42.08_81fe8df0_1_tq2qgj.svg";

export default function SiteHeader({
  homePage = false,
  transparent = false,
  onPrimaryAction,
}: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: homePage ? "#home" : "/#home" },
    { label: "About", href: homePage ? "#about" : "/#about" },
    { label: "Courses", href: homePage ? "#courses" : "/#courses" },
    { label: "Equipment", href: homePage ? "#equipment" : "/#equipment" },
    { label: "Contact", href: homePage ? "#contact" : "/contact" },
  ];

  const primaryButton = onPrimaryAction ? (
    <Button
      onClick={onPrimaryAction}
      className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium"
    >
      Get Started
    </Button>
  ) : (
    <Button
      asChild
      className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium"
    >
      <a href={homePage ? "#contact" : "/contact"}>Get Started</a>
    </Button>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 lg:top-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:max-w-4xl z-50 text-white px-6 py-3 lg:rounded-full ${
          transparent
            ? "bg-transparent backdrop-blur-0 border-b border-transparent lg:border-transparent shadow-none"
            : "bg-black/40 lg:bg-black/80 backdrop-blur-md border-b lg:border border-white/10 shadow-lg"
        }`}
        style={{
          boxShadow: transparent
            ? "none"
            : "0 0 20px rgba(249, 115, 22, 0.3), 0 0 40px rgba(249, 115, 22, 0.2), 0 0 60px rgba(249, 115, 22, 0.1), 0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex items-center justify-between w-full lg:min-h-[56px] lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-6">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={logoSrc}
                alt="SegaHealth Logo"
                className="h-14 lg:h-10 w-auto"
              />
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-orange-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="p-2 rounded-lg hover:bg-orange-500/20 transition-colors"
              aria-label="Toggle navigation menu"
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

          <div className="hidden lg:block lg:justify-self-end">{primaryButton}</div>
        </div>
      </nav>

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
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-orange-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {onPrimaryAction ? (
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mt-4"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onPrimaryAction();
                  }}
                >
                  Get Started
                </Button>
              ) : (
                <Button
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mt-4"
                >
                  <a
                    href={homePage ? "#contact" : "/contact"}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

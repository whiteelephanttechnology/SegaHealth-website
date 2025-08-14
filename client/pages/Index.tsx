import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Index() {
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const equipmentImages = [
    {
      src: "https://res.cloudinary.com/dcd0zqorf/image/upload/v1754757529/XB_2022-29_pl7nh0.jpg",
      alt: "XBody EMS Equipment 1",
    },
    {
      src: "https://res.cloudinary.com/dcd0zqorf/image/upload/v1754757508/XB_2022-1_luocdd.jpg",
      alt: "XBody EMS Equipment 2",
    },
    {
      src: "https://res.cloudinary.com/dcd0zqorf/image/upload/v1754757507/IMG_8742_w8mplk.jpg",
      alt: "XBody EMS Equipment 3",
    },
    {
      src: "https://res.cloudinary.com/dcd0zqorf/image/upload/v1754757491/IMG_8676_kodeiv.jpg",
      alt: "XBody EMS Equipment 4",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % equipmentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + equipmentImages.length) % equipmentImages.length,
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/10 shadow-lg"
        style={{
          boxShadow:
            "0 0 20px rgba(249, 115, 22, 0.3), 0 0 40px rgba(249, 115, 22, 0.2), 0 0 60px rgba(249, 115, 22, 0.1), 0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex items-center justify-between w-full max-w-4xl">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754696037/WhatsApp_Image_2025-08-04_at_20.42.08_81fe8df0_1_tq2qgj.svg"
                alt="SegaHealth Logo"
                className="h-16 lg:h-12 w-auto"
              />
            </div>
            <div className="hidden lg:flex space-x-6">
              <a
                href="#home"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <a
                href="#courses"
                className="hover:text-orange-500 transition-colors"
              >
                Courses
              </a>
              <a
                href="#equipment"
                className="hover:text-orange-500 transition-colors"
              >
                Equipment
              </a>
              <a
                href="#contact"
                className="hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          {/* Mobile hamburger menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Desktop Get Started button */}
          <Button className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium ml-6">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-black text-white overflow-hidden min-h-[600px] lg:min-h-[800px]"
      >
        <div className="absolute inset-0">
          <video
            src="https://res.cloudinary.com/dcd0zqorf/video/upload/v1755172753/lv_0_20250813060004_keo6hb.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100vw",
              height: "100vh",
              transform: "translate(-50%, -50%)",
              minWidth: "100%",
              minHeight: "100%",
              pointerEvents: "none",
            }}
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl mt-16 lg:mt-24">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Whole body
              <br />
              <span className="text-orange-500">
                Electric Muscle Stimulation
              </span>
            </h1>
            <p className="text-base text-gray-300 mb-8 max-w-lg leading-relaxed">
              Unlock your potential become a certified WB-EMS trainer never been
              easier through our comprehensive training program
            </p>
            <div className="flex justify-start">
              <Button
                className="bg-white hover:bg-gray-50 text-black px-8 py-3 rounded-full text-lg relative overflow-visible"
                style={{
                  boxShadow:
                    "15px 0 30px rgba(249, 115, 22, 0.6), 30px 0 60px rgba(249, 115, 22, 0.4), 45px 0 90px rgba(249, 115, 22, 0.2)",
                }}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 capitalize leading-tight max-w-5xl mx-auto">
              Elevate Your Career With Our Specialized WB-EMS Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Elevate your career with our specialized EMS certification,
              personalized coaching, and top-quality equipment. We empower you
              to achieve your professional goals and enhance your skills.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <video
              src="https://res.cloudinary.com/dcd0zqorf/video/upload/v1755171515/lv_0_20250814130510_txbcww.mp4"
              autoPlay
              muted
              loop
              className="max-w-full w-full max-w-5xl h-auto rounded-3xl shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="text-center">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-visible"
              style={{
                boxShadow:
                  "15px 0 30px rgba(249, 115, 22, 0.6), 30px 0 60px rgba(249, 115, 22, 0.4), 45px 0 90px rgba(249, 115, 22, 0.2)",
              }}
            >
              Get Certified Today
            </Button>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 bg-gray-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168291/WhatsApp_Image_2025-08-13_at_20.52.19_c3c83f5f-removebg-preview_yrcdho.png"
                  alt="Partner Logo 1"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168291/WhatsApp_Image_2025-08-13_at_20.52.19_b6cc7e51-removebg-preview_cckoqq.png"
                  alt="EMS BodySculpt"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168290/EMS-Training-empulse-training_1_cvtkun.png"
                  alt="EMS Training Empulse"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168290/3.a_Ruby_1723491857_1-removebg-preview_jkof7o.png"
                  alt="Ruby Fitness"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168290/image_8-removebg-preview_wugzyg.png"
                  alt="ZeroXCuses"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168290/The_body_lab_white_logo_black_bg_1-removebg-preview_1_kqzm39.png"
                  alt="The Body Lab"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168290/LOGO-343X52-01_1_vixano.png"
                  alt="Empulse Training"
                  className="max-h-20 w-auto object-contain"
                />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168291/WhatsApp_Image_2025-08-13_at_20.52.19_c3c83f5f-removebg-preview_yrcdho.png"
                  alt="Partner Logo 1"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168291/WhatsApp_Image_2025-08-13_at_20.52.19_b6cc7e51-removebg-preview_cckoqq.png"
                  alt="EMS BodySculpt"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168290/EMS-Training-empulse-training_1_cvtkun.png"
                  alt="EMS Training Empulse"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168290/3.a_Ruby_1723491857_1-removebg-preview_jkof7o.png"
                  alt="Ruby Fitness"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168290/image_8-removebg-preview_wugzyg.png"
                  alt="ZeroXCuses"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168290/The_body_lab_white_logo_black_bg_1-removebg-preview_1_kqzm39.png"
                  alt="The Body Lab"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-24 w-32 md:w-60 flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755168290/LOGO-343X52-01_1_vixano.png"
                  alt="Empulse Training"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Steps */}
      <section id="courses" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Get Certified in 3 Simple Steps
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-6">
            <div className="space-y-6 lg:ml-8">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div className="bg-white text-black px-6 py-3 rounded-full font-semibold text-lg">
                  Get Complete 80 Hours of Training!
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div className="bg-white text-black px-6 py-3 rounded-full font-semibold text-lg">
                  Take the Online Exam
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div className="bg-white text-black px-6 py-3 rounded-full font-semibold text-lg">
                  Get Certified!
                </div>
              </div>

              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full mt-8 shadow-lg relative overflow-visible"
                style={{
                  boxShadow:
                    "15px 0 30px rgba(249, 115, 22, 0.6), 30px 0 60px rgba(249, 115, 22, 0.4), 45px 0 90px rgba(249, 115, 22, 0.2)",
                }}
              >
                Start Your Certification Today
              </Button>
            </div>

            <div>
              <video
                src="https://res.cloudinary.com/dcd0zqorf/video/upload/v1754758156/lv_0_20250809043759_hrsucr.mp4"
                autoPlay
                muted
                loop
                className="w-full h-auto rounded-2xl pr-10"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Sage Section */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <video
                src="https://res.cloudinary.com/dcd0zqorf/video/upload/v1754693202/WhatsApp_Video_2025-08-08_at_03.20.20_50e0c599_g2awt0.mp4"
                autoPlay
                muted
                loop
                className="w-full h-auto rounded-2xl"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Meet Sage</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                With over a decade of experience in fitness and rehabilitation,
                Sage is a certified EMS specialist who has helped thousands of
                clients achieve their health and fitness goals through
                innovative WB-EMS technology.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                As your instructor, Sage will guide you through every step of
                your certification journey, ensuring you have the knowledge and
                confidence to excel in your EMS career.
              </p>
              <Button
                className="bg-white hover:bg-gray-50 text-black px-8 py-3 rounded-full relative overflow-visible"
                style={{
                  boxShadow:
                    "15px 0 30px rgba(249, 115, 22, 0.6), 30px 0 60px rgba(249, 115, 22, 0.4), 45px 0 90px rgba(249, 115, 22, 0.2)",
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                  Own Your <span className="text-orange-500">XBody</span>{" "}
                  Equipment:
                </h2>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Special Offer For SegaHealth Students
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Get exclusive access to professional-grade XBody EMS equipment
                  at special student prices. Start your business with the best
                  technology in the industry.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    Professional Grade
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    Easy Financing Options
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    Full Training Included
                  </Badge>
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full">
                  Learn More About Equipment
                </Button>
              </div>
              <div className="relative max-w-2xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <motion.div
                    className="flex"
                    animate={{ x: -currentImageIndex * 100 + "%" }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                    }}
                  >
                    {equipmentImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 object-cover flex-shrink-0"
                        loading="eager"
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Image Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {equipmentImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? "bg-orange-500"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 border-none shadow-md hover:shadow-lg transition-shadow bg-gray-300 rounded-2xl h-64 flex flex-col justify-center">
              <CardContent className="space-y-3 p-4">
                <div className="w-16 h-16 mx-auto flex items-center justify-center mb-3">
                  <img
                    src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754696088/discount_1_qbvvix.svg"
                    alt="Exclusive discount"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black">
                  Exclusive discounts for students
                </h3>
                <p className="text-gray-700 text-sm">
                  Our certification is recognized worldwide by leading fitness
                  organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-md hover:shadow-lg transition-shadow bg-gray-300 rounded-2xl h-64 flex flex-col justify-center">
              <CardContent className="space-y-3 p-4">
                <div className="w-16 h-16 mx-auto flex items-center justify-center mb-3">
                  <img
                    src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754696041/money_1_zwrxea.svg"
                    alt="Easy financing"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black">
                  Easy financing options
                </h3>
                <p className="text-gray-700 text-sm">
                  Flexible payment plans to make your certification journey
                  affordable.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-md hover:shadow-lg transition-shadow bg-gray-300 rounded-2xl h-64 flex flex-col justify-center">
              <CardContent className="space-y-3 p-4">
                <div className="w-16 h-16 mx-auto flex items-center justify-center mb-3">
                  <img
                    src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754696190/body_1_ytrfvt.svg"
                    alt="Industry-leading EMS technology"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black">
                  Industry-leading EMS technology
                </h3>
                <p className="text-gray-700 text-sm">
                  Learn the latest in electric muscle stimulation technology and
                  techniques.
                </p>
              </CardContent>
            </Card>
          </div>

          <div id="equipment" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
              Explore Your WB-EMS Equipment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of <strong>FDA approved</strong>{" "}
              professional-grade equipment to start your EMS business or enhance
              your training offerings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm mx-auto">
              <img
                src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754693678/Group_39_ivzc3w.png"
                alt="XBody GO"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm mx-auto">
              <img
                src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754693907/Group_40_la0qcs.png"
                alt="XBody PRO"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm mx-auto">
              <img
                src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754757036/newave_yprkng.png"
                alt="ACTIWAVE"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
              Book a Free Demo
            </Button>
            <p className="text-gray-600 text-lg">
              See it in action. Ask questions. Find the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Juan Uribe - Left */}
            <div className="text-center lg:text-left">
              <img
                src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1755007791/quality_restoration_20250809051254101_vvyv9h.jpg"
                alt="Juan Uribe"
                className="w-full max-w-md mx-auto lg:mx-0 h-auto object-cover rounded-2xl mb-6"
              />
              <div className="bg-black bg-opacity-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Juan Uribe
                </h3>
                <p className="text-orange-500 mb-2">Founder - SegaHealth</p>
                <p className="text-sm text-gray-300">
                  Strategy, Energy and Execution.
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  A veteran and builder at heart
                </p>
              </div>
            </div>

            {/* Center Content */}
            <div className="text-center lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Meet The Minds
                <br />
                Behind
                <br />
                <span className="text-orange-500">SegaHealth</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-md mx-auto">
                We're not just building a fitness program we're creating a
                community focused on transformation. With Juan's expertise in
                coaching and strategy and Brian's technical excellence in EMS
                technology and execution, we guide you from the inside out and
                the outside in. Together, we combine science, empathy, and
                proven methods to help you grow, heal, and perform at your
                best—physically, mentally, and emotionally. Whether you're
                overcoming trauma, managing stress, or improving fitness, we're
                here to help you move forward with strength and resilience.
              </p>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full relative overflow-visible"
                style={{
                  boxShadow:
                    "15px 0 30px rgba(249, 115, 22, 0.6), 30px 0 60px rgba(249, 115, 22, 0.4), 45px 0 90px rgba(249, 115, 22, 0.2)",
                }}
              >
                Get Started Today
              </Button>
            </div>

            {/* Brian Cooper - Right */}
            <div className="text-center lg:text-right lg:order-3">
              <img
                src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754694329/WhatsApp_Image_2025-08-07_at_23.56.52_54fb83d7_rex4u8.svg"
                alt="Brian Cooper"
                className="w-full max-w-md mx-auto lg:mx-0 h-auto object-cover rounded-2xl mb-6"
              />
              <div className="bg-black bg-opacity-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Brian Cooper
                </h3>
                <p className="text-orange-500 mb-2">
                  Lead Educator, Clinical Advisor
                </p>
                <p className="text-sm text-gray-300">
                  30+ Years of integrative health leadership
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Turning hope into systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Commonly Asked Questions
            </h2>
            <p className="text-orange-500 text-lg font-medium">
              I am here to help!
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem
              value="item-1"
              className="border-b border-gray-700 pb-4"
            >
              <AccordionTrigger className="text-left font-medium text-white hover:text-orange-500 transition-colors text-lg py-4 hover:no-underline">
                How do I get started with WBEMS certification?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 mt-4 leading-relaxed">
                To begin your journey, simply enroll in our{" "}
                <strong>80-hour training course</strong>, available in both{" "}
                <strong>live</strong> and <strong>virtual formats</strong>.
                After completing the course, you'll take an online exam, and
                once passed, you'll receive your official certification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-b border-gray-700 pb-4"
            >
              <AccordionTrigger className="text-left font-medium text-white hover:text-orange-500 transition-colors text-lg py-4 hover:no-underline">
                What equipment will I need to start my WBEMS business?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 mt-4 leading-relaxed">
                You will need an <strong>X Body EMS machine</strong>, which is
                used for training and rehabilitation. We offer exclusive student
                discounts and financing options for purchasing the equipment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-b border-gray-700 pb-4"
            >
              <AccordionTrigger className="text-left font-medium text-white hover:text-orange-500 transition-colors text-lg py-4 hover:no-underline">
                Can I purchase the EMS equipment after I complete my
                certification?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 mt-4 leading-relaxed">
                Yes! As a <strong>SegaHealth student</strong>, you can purchase
                the <strong>X Body EMS equipment</strong> at a discounted price,
                with <strong>financing options</strong> available. You can own
                the equipment and start your own fitness business!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-b border-gray-700 pb-4"
            >
              <AccordionTrigger className="text-left font-medium text-white hover:text-orange-500 transition-colors text-lg py-4 hover:no-underline">
                How much does the EMS equipment cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 mt-4 leading-relaxed">
                The cost varies based on the type and package you choose.
                Contact us for more details on <strong>pricing</strong> and{" "}
                <strong>special student discounts</strong>.
              </AccordionContent>
            </AccordionItem>

            <AnimatePresence>
              {showAllFAQs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    height: { duration: 0.6 },
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="space-y-6 mt-6"
                  >
                    <AccordionItem
                      value="item-5"
                      className="border-b border-gray-700 pb-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-white hover:text-orange-500 transition-colors text-lg py-4 hover:no-underline">
                        Do you offer financing for the equipment?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 mt-4 leading-relaxed">
                        Yes, we offer <strong>easy financing options</strong>{" "}
                        for students to help you invest in the equipment with
                        manageable payment plans. Learn more about financing
                        when you request a demo.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-6"
                      className="border-b border-gray-700 pb-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-white hover:text-orange-500 transition-colors text-lg py-4 hover:no-underline">
                        How long will it take to become certified?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 mt-4 leading-relaxed">
                        The <strong>80-hour training course</strong> can be
                        completed at your own pace, either through{" "}
                        <strong>live</strong> sessions or{" "}
                        <strong>virtual learning</strong>. Afterward, you'll
                        take the <strong>online exam</strong>, and once passed,
                        you'll receive your certification immediately.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-7"
                      className="border-b border-gray-700 pb-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-white hover:text-orange-500 transition-colors text-lg py-4 hover:no-underline">
                        Can I run a WBEMS business from home?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 mt-4 leading-relaxed">
                        Yes! You can set up your WBEMS business in your{" "}
                        <strong>home gym</strong> or any{" "}
                        <strong>private space</strong>. With the right equipment
                        and knowledge, you can train clients from the comfort of
                        your own home.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-8"
                      className="border-b border-gray-700 pb-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-white hover:text-orange-500 transition-colors text-lg py-4 hover:no-underline">
                        What makes X Body EMS equipment different from other
                        brands?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 mt-4 leading-relaxed">
                        <strong>X Body</strong> offers{" "}
                        <strong>industry-leading technology</strong> with
                        unmatched performance in{" "}
                        <strong>electrical muscle stimulation (EMS)</strong>.
                        The equipment is trusted by professionals worldwide for
                        its quality and results.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-9"
                      className="border-b border-gray-700 pb-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-white hover:text-orange-500 transition-colors text-lg py-4 hover:no-underline">
                        How can I promote my WBEMS business once I'm certified?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 mt-4 leading-relaxed">
                        Once certified, you'll have access to marketing
                        resources to help promote your services. You can use our
                        platform to find <strong>clients</strong> or set up your
                        own <strong>website</strong> for business promotion.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-10"
                      className="border-b border-gray-700 pb-4"
                    >
                      <AccordionTrigger className="text-left font-medium text-white hover:text-orange-500 transition-colors text-lg py-4 hover:no-underline">
                        Can I provide remote support or virtual training for my
                        clients?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 mt-4 leading-relaxed">
                        While <strong>EMS training</strong> requires the client
                        to be physically present for the session, you can
                        provide <strong>remote support</strong>,{" "}
                        <strong>consultations</strong>, and{" "}
                        <strong>progress tracking</strong> virtually. This
                        allows you to stay connected with your clients even when
                        they are not physically in the same location.
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </Accordion>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllFAQs(!showAllFAQs)}
              className="text-orange-500 hover:text-orange-400 transition-colors font-medium text-lg"
            >
              {showAllFAQs ? "Show fewer FAQs" : "See more FAQs"}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="font-bold text-xl">SegaHealth</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leading the future of fitness with professional WB-EMS
                certification and training programs.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Certification Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Equipment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Email: info@segahealth.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Fitness Ave, Training City, TC 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>&copy; 2025 SegaHealth LLC All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Cookie Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

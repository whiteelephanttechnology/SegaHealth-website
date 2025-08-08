import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl">SegaHealth</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
              <a href="#" className="hover:text-orange-500 transition-colors">About</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Courses</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Equipment</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[600px] lg:min-h-[800px]">
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/XJR5etgd4lA?autoplay=1&mute=1&loop=1&playlist=XJR5etgd4lA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
            className="w-full h-full object-cover"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              pointerEvents: 'none'
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Whole body <br />
              <span className="text-orange-500">Electric Muscle Stimulation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-4">
              Certified Trainer
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Never been Easier
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
                Start Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg">
                Learn More
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
              Elevate your career with our specialized EMS certification, personalized coaching, and top-quality 
              equipment. We empower you to achieve your professional goals and enhance your skills.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7aa975340aaa281db095b12c53eb93ab4620df31?width=2164" 
              alt="EMS Training Session" 
              className="max-w-full w-full max-w-5xl h-auto rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Certified Today
            </Button>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/d556602bd5b1ce5cb1e60c1db107fa0ceafb483d?width=3456" 
            alt="Partner Logos" 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Certification Steps */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Get Certified in 3 Simple Steps
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Complete 80 Hours of Training</h3>
                  <p className="text-gray-300">Complete comprehensive training covering all aspects of WB-EMS technology and methodology.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Take the Online Exam</h3>
                  <p className="text-gray-300">Pass our comprehensive online examination to demonstrate your knowledge and skills.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Certified</h3>
                  <p className="text-gray-300">Receive your official WB-EMS certification and start your professional journey.</p>
                </div>
              </div>
              
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full mt-8">
                Start Your Certification Journey
              </Button>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/111708a03aa370aa27cd2e0f6d996d380f3a8205?width=800" 
                alt="Take the Online Exam" 
                className="w-full h-auto rounded-xl mb-4"
              />
              <p className="text-center text-lg font-medium">Take the Online Exam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Sage Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <video
                src="https://res.cloudinary.com/dcd0zqorf/video/upload/v1754693202/WhatsApp_Video_2025-08-08_at_03.20.20_50e0c599_g2awt0.mp4"
                autoPlay
                muted
                loop
                controls
                className="w-full h-auto rounded-2xl"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Meet Sage</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                With over a decade of experience in fitness and rehabilitation, Sage is a certified EMS specialist 
                who has helped thousands of clients achieve their health and fitness goals through innovative 
                WB-EMS technology.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                As your instructor, Sage will guide you through every step of your certification journey, 
                ensuring you have the knowledge and confidence to excel in your EMS career.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
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
                  Own Your <span className="text-orange-500">XBody</span> Equipment:
                </h2>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Special Offer For SegaHealth Students
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Get exclusive access to professional-grade XBody EMS equipment at special student prices. 
                  Start your business with the best technology in the industry.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">Professional Grade</Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">Easy Financing Options</Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">Full Training Included</Badge>
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full">
                  Learn More About Equipment
                </Button>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754694109/54-accessories_1_unr2fy.png"
                  alt="XBody EMS Equipment"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4 pt-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Internationally Recognized</h3>
                <p className="text-gray-600">Our certification is recognized worldwide by leading fitness organizations.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4 pt-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Easy Financing Options</h3>
                <p className="text-gray-600">Flexible payment plans to make your certification journey affordable.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4 pt-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">EMS Technology</h3>
                <p className="text-gray-600">Learn the latest in electric muscle stimulation technology and techniques.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
              Explore Your WB-EMS Equipment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of professional-grade equipment to start your EMS business or enhance your training offerings.
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
                src="https://res.cloudinary.com/dcd0zqorf/image/upload/v1754693957/alexander-jawfox-Kl2t5U6Gkm0-unsplash_rjgq9d.png"
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
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Meet The Minds Behind SegaHealth
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardContent className="p-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/111708a03aa370aa27cd2e0f6d996d380f3a8205?width=400" 
                  alt="Juan Uribe" 
                  className="w-32 h-32 rounded-full object-cover mb-6"
                />
                <h3 className="text-2xl font-bold mb-2">Juan Uribe</h3>
                <p className="text-orange-500 mb-4">Founder & Lead Instructor</p>
                <p className="text-gray-300 leading-relaxed">
                  With over 15 years in the fitness industry, Juan is a pioneer in EMS training methodology. 
                  He has certified thousands of trainers worldwide and continues to advance the field through 
                  research and innovation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardContent className="p-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/111708a03aa370aa27cd2e0f6d996d380f3a8205?width=400" 
                  alt="Brian Cooper" 
                  className="w-32 h-32 rounded-full object-cover mb-6"
                />
                <h3 className="text-2xl font-bold mb-2">Brian Cooper</h3>
                <p className="text-orange-500 mb-4">Technical Director & Equipment Specialist</p>
                <p className="text-gray-300 leading-relaxed">
                  Brian brings technical expertise in EMS technology and equipment design. His background in 
                  biomedical engineering ensures our training programs incorporate the latest technological 
                  advancements in the field.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
              Commonly Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How do I get started with the EMS certification?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Getting started is easy! Simply enroll in our comprehensive 80-hour training program, complete the coursework, 
                pass the online examination, and receive your certification. Our support team will guide you through every step.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What experience do I need to start my WB-EMS business?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                While prior fitness experience is helpful, it's not required. Our comprehensive training program covers everything 
                you need to know to start your WB-EMS business, from basic physiology to advanced training techniques and business operations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Can I purchase the EMS equipment after I complete the Certification?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes! We offer special pricing on professional EMS equipment for our certified graduates. Choose from various models 
                including XBody GO, XBody PRO, and ACTIWAVE systems with flexible financing options available.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How does the EMS equipment work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                EMS (Electric Muscle Stimulation) equipment uses low-frequency electrical impulses to stimulate muscle contractions. 
                This technology enhances traditional workouts by activating up to 90% of muscle fibers simultaneously, leading to more 
                efficient and effective training sessions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-xl">SegaHealth</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leading the future of fitness with professional WB-EMS certification and training programs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Certification Program</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Equipment</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a></li>
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
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SegaHealth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

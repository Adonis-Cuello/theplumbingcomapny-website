'use client'; // This directive is necessary for client-side components in Next.js

// IMPORTS_START
import { useState, useEffect } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Star,
  ChevronDown,
} from 'lucide-react';
// IMPORTS_END

// COMPONENT_START: Header
const Header = () => (
  <header className="bg-white">
    {/* Top Bar */}
    <div className="text-white py-2 px-4 md:px-8" style={{backgroundColor: '#01B1AF'}}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <div className="flex items-center gap-2">
            <Phone size={16} style={{color: '#09B1AF'}} />
            <a href="tel:302-998-0938" className="hover:underline">(302) 998-0938</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} style={{color: '#01B1AF'}} />
            <span>Mon-Fri 9:00AM - 4:00PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} style={{color: '#01B1AF'}} />
            <span>Serving New Castle County</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Reviews</a>
          <a href="#" className="hover:underline">Contact Us</a>
  
        </div>
      </div>
    </div>
    
    {/* Main Navigation */}
          <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <h1 className="text-3xl caslon-bold-italic text-gray-800">
              <span style={{color: '#0A605B', textShadow: '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000'}}>THE</span> PLUMBING <span style={{color: '#0A605B', textShadow: '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000'}}>COMPANY</span>
            </h1>
          </div>
        </div>
      <nav className="hidden md:flex gap-6 items-center font-semibold text-gray-700">
                  <a href="/" style={{color: '#01B1AF'}} onMouseEnter={(e) => e.currentTarget.style.color = '#01B1AF'} onMouseLeave={(e) => e.currentTarget.style.color = '#01B1AF'}>HOME</a>
        <div className="relative group">
                      <button className="flex items-center" style={{color: '#01B1AF'}} onMouseEnter={(e) => e.currentTarget.style.color = '#01B1AF'} onMouseLeave={(e) => e.currentTarget.style.color = '#01B1AF'}>
            SERVICES <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
                  <a href="#about" style={{color: '#01B1AF'}} onMouseEnter={(e) => e.currentTarget.style.color = '#01B1AF'} onMouseLeave={(e) => e.currentTarget.style.color = '#01B1AF'}>ABOUT US</a>
                  <a href="/reviews" style={{color: '#01B1AF'}} onMouseEnter={(e) => e.currentTarget.style.color = '#01B1AF'} onMouseLeave={(e) => e.currentTarget.style.color = '#01B1AF'}>REVIEWS</a>
                      <a href="tel:302-998-0938" style={{color: '#01B1AF'}} onMouseEnter={(e) => e.currentTarget.style.color = '#01B1AF'} onMouseLeave={(e) => e.currentTarget.style.color = '#01B1AF'}>CONTACT US</a>
        
      </nav>
      <button className="md:hidden">
        {/* Hamburger menu icon would go here */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
);
// COMPONENT_END: Header

// COMPONENT_START: HeroSection
const HeroSection = () => (
  <section
    className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center text-center px-4"
    style={{ backgroundImage: `url(https://placehold.co/1920x500/003366/FFFFFF?text=Plumbing+Hero+Image)` }}
  >
            <div className="absolute inset-0 opacity-70" style={{backgroundColor: '#01B1AF'}}></div>
    <div className="relative z-10 text-white">
              <div className="mb-4">
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
            <img 
              src="/tpc_logo-removebg-preview.png" 
              alt="The Plumbing Company Logo" 
              className="max-w-full h-auto mx-auto"
              style={{maxHeight: '300px'}}
            />
          </div>
        </div>
      <p className="text-lg md:text-2xl mb-6">
        The Plumbing Company, your leading New Castle County Plumbing Company!
      </p>
              <button className="text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300" style={{backgroundColor: '#0A605B'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0A605B'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0A605B'}>
        Request an Appointment Today
      </button>
    </div>
  </section>
);
// COMPONENT_END: HeroSection

// COMPONENT_START: ServiceCards
const ServiceCards = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
        <img src="https://placehold.co/150x150/f0f0f0/000000?text=Sewer+Drain" alt="Sewer and Drain" className="w-24 h-24 mb-4 rounded-full" />
                  <h3 className="text-xl caslon-bold-italic mb-2 text-gray-800">Sewer and Drain</h3>
        <p className="text-gray-600">
          We offer complete solutions for all your sewer and drain problems, from minor clogs to major repairs.
        </p>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
        <img src="https://placehold.co/150x150/f0f0f0/000000?text=Water+Heater" alt="Water Heater" className="w-24 h-24 mb-4 rounded-full" />
                  <h3 className="text-xl caslon-bold-italic mb-2 text-gray-800">Water Heater</h3>
        <p className="text-gray-600">
          Professional water heater installation, repair, and maintenance services.
        </p>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
        <img src="https://placehold.co/150x150/f0f0f0/000000?text=Toilets" alt="Toilets" className="w-24 h-24 mb-4 rounded-full" />
                  <h3 className="text-xl caslon-bold-italic mb-2 text-gray-800">Toilets</h3>
        <p className="text-gray-600">
          Our team can fix any toilet problem from leaks to clogs. We also offer installation services.
        </p>
      </div>
      {/* Card 4 */}
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
        <img src="https://placehold.co/150x150/f0f0f0/000000?text=Water+Gas" alt="Water and Gas" className="w-24 h-24 mb-4 rounded-full" />
                  <h3 className="text-xl caslon-bold-italic mb-2 text-gray-800">Water and Gas</h3>
        <p className="text-gray-600">
          We are experienced in installing and repairing both water and gas lines.
        </p>
      </div>
    </div>
  </section>
);
// COMPONENT_END: ServiceCards

// COMPONENT_START: AboutUsSection
const AboutUsSection = () => (
  <section id="about" className="py-16 bg-white">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl caslon-bold-italic mb-4 text-gray-800">
          Dedicated To Providing Quality Plumbing
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-blue-600">
          Your Local Plumbing Experts in Delaware, Maryland, and Pennsylvania
        </h3>
        <p className="mb-4 text-gray-700">
          At The Plumbing Company, our team of dedicated plumbing professionals is committed to providing top-notch plumbing services to residential and commercial clients in New Castle County. We are a family-owned and operated business with a strong reputation for reliability, expertise, and customer satisfaction.
        </p>
        <p className="mb-4 text-gray-700">
          Whether you need a leaky faucet repaired, a new water heater installed, or a complex sewer line replaced, our skilled technicians have the knowledge and tools to get the job done right the first time. We pride ourselves on our attention to detail and our ability to handle any plumbing issue, big or small.
        </p>
        <p className="mb-4 text-gray-700">
          We understand that plumbing problems can be stressful, which is why we offer prompt and reliable service, professional expertise, and competitive pricing. When you choose The Plumbing Company, you can rest assured that you're getting the best plumbing services in New Castle County.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="https://placehold.co/600x400/CCCCCC/333333?text=Plumbing+Van+Image"
          alt="The Plumbing Company Van"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  </section>
);
// COMPONENT_END: AboutUsSection

// COMPONENT_START: TestimonialsSection
const TestimonialsSection = () => (
  <section id="reviews" className="bg-gray-100 py-16 text-center">
            <h2 className="text-4xl caslon-bold-italic mb-8 text-gray-800">Great Reviews</h2>
    <div className="container mx-auto px-4">
      {/* Testimonial card 1 */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <p className="text-gray-700 italic mb-4">
          "The team at The Plumbing Company was professional, courteous, and efficient. They fixed my leaky pipe quickly and the price was very fair. I highly recommend them!"
        </p>
        <div className="flex justify-center items-center gap-1 text-yellow-400">
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
        </div>
        <p className="mt-2 text-gray-600 font-semibold"> - John D. </p>
      </div>
      {/* Testimonial card 2 */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-700 italic mb-4">
          "I had a clogged drain and they came out the same day. The technician was knowledgeable and solved the problem in no time. Excellent service!"
        </p>
        <div className="flex justify-center items-center gap-1 text-yellow-400">
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} />
        </div>
        <p className="mt-2 text-gray-600 font-semibold"> - Jane S. </p>
      </div>
    </div>
  </section>
);
// COMPONENT_END: TestimonialsSection

// COMPONENT_START: ServicesListSection
const ServicesListSection = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl caslon-bold-italic text-gray-800">
          Comprehensive Plumbing Services in New Castle County
        </h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
        <div className="text-center">
          <h3 className="text-2xl caslon-bold-italic text-blue-600 mb-2">Plumbing Services in New Castle County, Delaware</h3>
          <ul className="list-disc list-inside space-y-2 inline-block text-left">
            <li>Residential Plumbing Services</li>
            <li>Commercial Plumbing Services</li>
            <li>Sewer and Drain Cleaning</li>
            <li>Water Heater Repair & Installation</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl caslon-bold-italic text-blue-600 mb-2">Why Choose The Plumbing Company?</h3>
          <ul className="list-disc list-inside space-y-2 inline-block text-left">
            <li>Affordable Pricing</li>
            <li>Experienced & Certified Plumbers</li>
            <li>Customer Satisfaction Guaranteed</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
// COMPONENT_END: ServicesListSection

// COMPONENT_START: CallToActionFooter
const CallToActionFooter = () => (
  <section className="bg-blue-900 text-white py-16 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl caslon-bold-italic mb-4">Professionals You Can Trust</h2>
      <p className="text-xl mb-8">
        For all your plumbing needs in New Castle County, call The Plumbing Company today!
      </p>
    </div>
  </section>
);
// COMPONENT_END: CallToActionFooter

// COMPONENT_START: Footer
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Column 1 - Logo & Social */}
      <div>
        <h3 className="text-2xl caslon-bold-italic mb-4" style={{color: '#01B1AF'}}>THE PLUMBING COMPANY</h3>
        <p className="mb-4">
          Dedicated to providing quality plumbing services to our communities in New Castle County.
        </p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/theplumbingcompany" className="text-gray-400 hover:text-white">
            <Facebook size={24} />
          </a>
        </div>
      </div>
      {/* Column 2 - Services */}
      <div>
        <h3 className="text-lg caslon-bold-italic mb-4">SERVICES</h3>
        <ul className="space-y-2 text-gray-400">
          
          <li>Residential Plumbing</li>
          <li>Commercial Plumbing</li>
          <li>Sewer & Drain Cleaning</li>
          <li>Water Heater Repair</li>
          <li>Tankless Water Heaters</li>
        </ul>
      </div>
      {/* Column 3 - Quick Links */}
      <div>
        <h3 className="text-lg caslon-bold-italic mb-4">QUICK LINKS</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#about" className="hover:text-white">About Us</a></li>
          <li><a href="/reviews" className="hover:text-white">Reviews</a></li>
          <li><a href="tel:302-998-0938" className="hover:text-white">Contact Us</a></li>
          <li><a href="/" className="hover:text-white">Home</a></li>
        </ul>
      </div>
      {/* Column 4 - Contact */}
      <div>
        <h3 className="text-lg caslon-bold-italic mb-4">CONTACT</h3>
        <a href="tel:302-998-0938" className="text-gray-400 hover:text-white">
          (302) 998-0938
        </a>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
      &copy; 2024 The Plumbing Company. All Rights Reserved.
    </div>
  </footer>
);
// COMPONENT_END: Footer

// MAIN_APP_START
const App = () => {
  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Left Side Wave Pattern */}
      <div className="left-wave-pattern"></div>
      {/* Second Wave Pattern Above */}
      <div className="left-wave-pattern-2"></div>
      {/* Third Wave Pattern Below */}
      <div className="left-wave-pattern-3"></div>
      {/* Fourth Wave Pattern at Top */}
      <div className="left-wave-pattern-4"></div>
      
      {/* Right Side Wave Pattern */}
      <div className="right-wave-pattern"></div>
      {/* Second Right Wave Pattern Above */}
      <div className="right-wave-pattern-2"></div>
      {/* Third Right Wave Pattern Below */}
      <div className="right-wave-pattern-3"></div>
      {/* Fourth Right Wave Pattern at Top */}
      <div className="right-wave-pattern-4"></div>
      
      <Header />
      <HeroSection />
      <ServiceCards />
      <AboutUsSection />
      <TestimonialsSection />
      <ServicesListSection />
      <CallToActionFooter />
      <Footer />
    </div>
  );
};
// MAIN_APP_END

// EXPORT_START
export default App;
// EXPORT_END

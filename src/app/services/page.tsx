'use client';

import { Phone, Facebook } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';

// COMPONENT_START: ServicesHero
const ServicesHero = () => (
  <section className="text-white py-8" style={{backgroundColor: '#01B1AF'}}>
    <div className="container mx-auto px-4 text-center">
              <div className="mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
            <img 
              src="/tpc_logo-removebg-preview.png" 
              alt="The Plumbing Company Logo" 
              className="max-w-full h-auto mx-auto"
              style={{maxHeight: '300px'}}
            />
          </div>
        </div>
      <p className="text-xl max-w-3xl mx-auto">
        Professional plumbing services in Delaware. 
        From complete installations to repairs, we handle it all with expertise.
      </p>
    </div>
  </section>
);
// COMPONENT_END: ServicesHero

// COMPONENT_START: DetailedServices
const DetailedServices = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Bathroom Plumbing & Renovation */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl caslon-bold-italic mb-4 text-blue-600">
            Bathroom Plumbing & Renovation
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Shower valve installation</li>
            <li>• Faucet and fixture replacement</li>
            <li>• Toilet installation and repair</li>
            <li>• Vanity and sink installation</li>
            <li>• Bathroom leak detection</li>
          </ul>
        </div>

        {/* Water Heaters */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl caslon-bold-italic mb-4 text-blue-600">
            Water Heaters
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Tankless water heater installation</li>
            <li>• Traditional water heater replacement</li>
            <li>• Water heater repair and maintenance</li>
            <li>• Gas and electric water heaters</li>
            <li>• Water heater troubleshooting</li>
            <li>• Energy-efficient upgrades</li>
          </ul>
        </div>

        {/* Drain & Pipe Services */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl caslon-bold-italic mb-4 text-blue-600">
            Drain & Pipe Services
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Drain cleaning and unclogging</li>
            <li>• Sewer line inspection and repair</li>
            <li>• Pipe replacement and repair</li>
            <li>• Preventative maintenance</li>
          </ul>
        </div>

        {/* General Plumbing Repairs */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl caslon-bold-italic mb-4 text-blue-600">
            General Plumbing Repairs
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Leaky faucet repair</li>
            <li>• Pipe leak detection and repair</li>
            <li>• Garbage disposal installation</li>
            <li>• Sink and drain repair</li>
            <li>• Valve replacement</li>
            <li>• Plumbing fixture repairs</li>
          </ul>
        </div>

        {/* Plumbing Services & Old Homes */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl caslon-bold-italic mb-4 text-blue-600">
            Plumbing Services & Old Homes
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Professional plumbing service</li>
            <li>• Historic home plumbing updates</li>
            <li>• Old pipe system modernization</li>
            <li>• Lead pipe replacement</li>
            <li>• Galvanized pipe upgrades</li>
          </ul>
        </div>

        {/* Gas Lines & Sump Pumps */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl caslon-bold-italic mb-4 text-blue-600">
            Gas Lines & Sump Pumps
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Gas line installation and repair</li>
            <li>• Gas leak detection</li>
            <li>• Sump pump installation</li>
            <li>• Sump pump maintenance</li>
            <li>• Backup sump pump systems</li>
            <li>• Gas appliance connections</li>
          </ul>
        </div>



        {/* Sewer & Drain Services */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl caslon-bold-italic mb-4 text-blue-600">
            Sewer & Drain Services
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Sewer line replacement</li>
            <li>• Drain cleaning and snaking</li>
            <li>• Sewer camera inspections</li>
            <li>• Root removal services</li>
            <li>• Sewer line maintenance</li>
          </ul>
        </div>


      </div>
    </div>
  </section>
);
// COMPONENT_END: DetailedServices

// COMPONENT_START: CallToAction
const CallToAction = () => (
  <section className="text-white py-8 text-center" style={{backgroundColor: '#01B1AF'}}>
    <div className="container mx-auto px-4">
              <h2 className="text-4xl caslon-bold-italic mb-4">Ready for Professional Service?</h2>
      <p className="text-xl mb-8">
        Call <strong>302-998-0938</strong> for fast, friendly plumbing you can trust.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300" style={{color: '#0A605B'}}>
          Call Now
        </button>
        <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#01B1AF'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
          Request Estimate
        </button>
      </div>
    </div>
  </section>
);
// COMPONENT_END: CallToAction

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
          <li><Link href="/#about" className="hover:text-white">About Us</Link></li>
          <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
          <li><a href="tel:302-998-0938" className="hover:text-white">Contact Us</a></li>
          <li><Link href="/" className="hover:text-white">Home</Link></li>
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
const ServicesPage = () => {
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
      <ServicesHero />
      <DetailedServices />
      <CallToAction />
      <Footer />
    </div>
  );
};
// MAIN_APP_END

export default ServicesPage; 
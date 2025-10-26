'use client'; // This directive is necessary for client-side components in Next.js

// IMPORTS_START
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import {
  Phone,
  Facebook,
  Star,
  Droplets,
  Flame,
  Toilet,
  Zap,
} from 'lucide-react';
// IMPORTS_END

// COMPONENT_START: AppointmentModal
const AppointmentModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Appointment request:', formData);
    alert('Thank you for your appointment request! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      preferredDate: '',
      preferredTime: ''
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl caslon-bold-italic text-gray-800">Request Appointment</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(302) 998-0938"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Needed *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
        
                <option value="drain-cleaning">Drain Cleaning</option>
                <option value="water-heater">Water Heater Service</option>
                <option value="toilet-repair">Toilet Repair</option>
                <option value="pipe-repair">Pipe Repair</option>
                <option value="bathroom-renovation">Bathroom Renovation</option>
                <option value="sump-pump">Sump Pump Service</option>
                <option value="gas-lines">Gas Lines</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select time</option>
                <option value="morning">Morning (8AM-12PM)</option>
                <option value="afternoon">Afternoon (12PM-4PM)</option>
                <option value="evening">Evening (4PM-8PM)</option>
                <option value="asap">ASAP (Emergency)</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your plumbing issue or special requirements..."
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
                      style={{backgroundColor: '#01B1AF'}}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#01B1AF'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#01B1AF'}
              >
                Submit Request
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
// COMPONENT_END: AppointmentModal

// COMPONENT_START: HeroSection
const HeroSection = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <section
      className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3J1d3JlZWFwY3B5dXE2aXM2Mmc0bnJmN3oyY3E2YjZkeG5nazI0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FZCSoCACYeEjS/giphy.gif)` }}
    >
              <div className="absolute inset-0 opacity-70" style={{backgroundColor: '#01B1AF'}}></div>
      <div className="relative z-10 text-white">
        <div className="mb-4">
          <div className="bg-white rounded-lg p-4 inline-block mx-auto">
            <img 
              src="/tpc_logo-removebg-preview.png" 
              alt="The Plumbing Company Logo" 
              className="max-w-full h-auto"
              style={{ maxHeight: '200px' }}
            />
          </div>
        </div>
        <p className="text-lg md:text-2xl mb-6">
          Father and son owned owned and operated, celebrating 25 years in business!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="tel:302-998-0938"
            className="text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 inline-block"
            style={{backgroundColor: '#0A605B'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0A605B'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0A605B'}
          >
            Call or Text Now
          </a>
        </div>
      </div>
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </section>
  );
};
// COMPONENT_END: HeroSection

// COMPONENT_START: ImageSwiper
const ImageSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "/work-pics/plumim1.png",
      title: "Professional Plumbing Installation",
      description: "Complex plumbing system with copper pipes, valves, and water treatment equipment."
    },
    {
      id: 2,
      image: "/work-pics/plumim2.png",
      title: "Sump Pump Installation",
      description: "Professional installation of sump pump with PVC piping and electrical connections."
    },
    {
      id: 3,
      image: "/work-pics/plumim3.png",
      title: "Water Heater Installation",
      description: "Professional installation of Bradford White water heater with expansion tank."
    },
    {
      id: 4,
      image: "/work-pics/plumim4.png",
      title: "Toilet Installation",
      description: "Proper toilet flange preparation with new wax ring for leak-free installation."
    },
    {
      id: 5,
      image: "/work-pics/plumim5.png",
      title: "Bathroom fixtures",
      description: "Professional bathroom fixtures and fittings."
    },
    {
      id: 6,
      image: "/work-pics/plumim6.png",
      title: "Drain Systems",
      description: "Professional PVC drain systems with proper P-traps and connections."
    },
    {
      id: 7,
      image: "/work-pics/plumim7.png",
      title: "Plumbing Fixtures",
      description: "Quality chrome fixtures and shut-off valves for reliable water control."
    },
    {
      id: 8,
      image: "/work-pics/plumim8.png",
      title: "Tankless Water Heater",
      description: "Professional Rinnai tankless water heater with copper piping and expansion tank."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl caslon-bold-italic text-gray-800 mb-4">
            Our Professional Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at our quality plumbing installations and professional workmanship. 
            From complex systems to simple repairs, we handle it all with expertise.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <div className="relative h-96 md:h-[500px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentSlide 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img 
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl md:text-3xl caslon-bold-italic mb-2">{slide.title}</h3>
                    <p className="text-lg opacity-90">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={index === currentSlide ? {backgroundColor: '#01B1AF'} : {}}
              />
            ))}
          </div>
          
          {/* Slide Counter */}
          <div className="text-center mt-4 text-gray-600">
            <span className="font-semibold">{currentSlide + 1}</span>
            <span className="mx-2">/</span>
            <span>{slides.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
// COMPONENT_END: ImageSwiper

// COMPONENT_START: ServiceCards
const ServiceCards = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
                  <div className="w-24 h-24 mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#01B1AF'}}>
            <Droplets size={48} style={{color: '#ffffff'}} />
          </div>
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

// COMPONENT_START: Services
const Services = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl caslon-bold-italic text-gray-800 mb-4">
          Our Plumbing Services
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Serving Wilmington and New Castle County with over 40 years of experience. 
          We are licensed, insured, and bonded professionals. Trust our expertise for all your plumbing needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
          <div className="w-24 h-24 mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#01B1AF'}}>
            <Droplets size={48} style={{color: '#ffffff'}} />
          </div>
          <h3 className="text-xl caslon-bold-italic mb-2 text-gray-800">Sewer and Drain</h3>
          <p className="text-gray-600">
            We offer complete solutions for all your sewer and drain problems, from minor clogs to major repairs.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
          <div className="w-24 h-24 mb-4 rounded-full bg-orange-100 flex items-center justify-center">
            <Flame size={48} className="text-orange-600" />
          </div>
          <h3 className="text-xl caslon-bold-italic mb-2 text-gray-800">Water Heater</h3>
          <p className="text-gray-600">
            Professional water heater installation, repair, and maintenance services.
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
          <div className="w-24 h-24 mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <Toilet size={48} className="text-green-600" />
          </div>
          <h3 className="text-xl caslon-bold-italic mb-2 text-gray-800">Toilets</h3>
          <p className="text-gray-600">
            Our team can fix any toilet problem from leaks to clogs. We also offer installation services.
          </p>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-shadow hover:shadow-xl">
          <div className="w-24 h-24 mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
            <Zap size={48} className="text-yellow-600" />
          </div>
          <h3 className="text-xl caslon-bold-italic mb-2 text-gray-800">Water and Gas</h3>
          <p className="text-gray-600">
            We are experienced in installing and repairing both water and gas lines.
          </p>
        </div>
      </div>

      {/* See All Services Button */}
      <div className="text-center mt-8 mb-12">
        <a 
          href="/services" 
          className="inline-flex items-center gap-2 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
          style={{backgroundColor: '#0A605B'}}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0A605B'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0A605B'}
        >
          <span>See All Services</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="text-center mt-12">
        <div className="text-white p-8 rounded-lg shadow-lg" style={{backgroundColor: '#01B1AF'}}>
                  <h3 className="text-2xl caslon-bold-italic mb-4">
          Ready for Professional Plumbing Service?
        </h3>
          <p className="text-xl mb-6">
            Call <strong>302-998-0938</strong> for fast, friendly plumbing you can trust.
          </p>
          <a 
            href="tel:302-998-0938" 
            className="bg-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 inline-block" 
            style={{color: '#01B1AF'}}
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  </section>
);
// COMPONENT_END: Services

// COMPONENT_START: LiveTestimonials
const LiveTestimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Lori Haubrich",
      location: "New Castle County, DE",
      rating: 5,
      text: "Michael and Cory were very quick unclogging my pipe. They were professional and left the area cleaner than they found it. Very reasonable price too! Highly recommend! Will only use The Plumbing Company for plumbing needs.",
      date: "2024-01-12",
      service: "Pipe Unclogging",
      image: "/icon/iconkaren.png"
    },
    {
      id: 2,
      name: "Steve Vucetic",
      location: "New Castle County, DE",
      rating: 5,
      text: "Larry and his team are excellent and what they do. I had a sagging pipe in my crawl space and they fixed it in a few hours, and set me up really well for future service as well as some quality work. On top of all that, the pricing was very reasonable. I couldn't be happier with my choice in a plumber, and its well known they will be my go to from here out.",
      date: "2024-01-10",
      service: "Crawl Space Pipe Repair",
      image: "/icon/iconsteve.png"
    },
    {
      id: 3,
      name: "Marion Farrell",
      location: "New Castle County, DE",
      rating: 5,
      text: "Superb Master Plumber with pricing that beats the competition—they did outstanding work on our home plumbing project.",
      date: "2024-01-08",
      service: "Home Plumbing Project",
      image: "/icon/iconmarguerite.png"
    },
    {
      id: 4,
      name: "Lola Durosomo",
      location: "New Castle County, DE",
      rating: 5,
      text: "These guys are FANTASTIC!!! I had an emergency situation and Larry was so prompt in handling it for me the same day!! I highly suggest these guys and so very thankful for what they did for me!!!",
      date: "2024-01-05",
      service: "Emergency Plumbing",
      image: "/icon/iconjagannatha.png"
    },
    {
      id: 5,
      name: "Bill Jefferson",
      location: "New Castle County, DE",
      rating: 5,
      text: "Helped me with urgent tub problems same day. Excellent and professional. Very satisfied with the owner Larry and his son Michael's work.",
      date: "2024-01-03",
      service: "Urgent Tub Repair",
      image: "/icon/iconbill.png"
    },
    {
      id: 6,
      name: "Ann Lopez",
      location: "New Castle County, DE",
      rating: 5,
      text: "I chose Larry based on Google ratings and comments. It was a good choice. Had 3 relatively minor plumbing jobs to do and Larry handle them well. Excellent quality, easy to work with, pricing was in line with what we expected. I'll use him again if we have additional needs.",
      date: "2024-01-01",
      service: "Multiple Plumbing Jobs",
      image: "/icon/iconann.png"
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const highRatedTestimonials = testimonials.filter(testimonial => testimonial.rating >= 4);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Real Customer Reviews
          </h2>
          <p className="text-lg text-gray-600">
            Real 5-star testimonials from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
            <div className="flex items-center justify-end mb-6">
              <div className="text-sm text-gray-500">
                {highRatedTestimonials.length} 4+ star reviews
              </div>
            </div>

                                        <div className="min-h-[300px] flex items-start relative overflow-hidden">
                      {highRatedTestimonials.map((testimonial, index) => (
                        <div
                          key={testimonial.id}
                          className={`w-full absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === currentIndex 
                              ? 'opacity-100 translate-x-0' 
                              : index < currentIndex 
                                ? 'opacity-0 -translate-x-full' 
                                : 'opacity-0 translate-x-full'
                          }`}
                        >
                          <div className="text-center p-4">
                            <div className="flex justify-center items-center gap-1 text-yellow-400 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={24} fill="currentColor" />
                              ))}
                            </div>
                            
                            <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed max-w-3xl mx-auto">
                              &quot;{testimonial.text}&quot;
                            </blockquote>
                            
                            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-3">
                                <img 
                                  src={testimonial.image} 
                                  alt={testimonial.name}
                                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                                />
                                <div>
                                  <div className="font-semibold">{testimonial.name}</div>
                                  <div className="text-gray-500">{testimonial.location}</div>
                                </div>
                              </div>
                              
                              <div className="text-gray-400">|</div>
                              
                              <div>
                                <div className="font-semibold" style={{color: '#01B1AF'}}>{testimonial.service}</div>
                                <div className="text-gray-500">{new Date(testimonial.date).toLocaleDateString()}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

            <div className="flex justify-center gap-2 mt-6">
              {highRatedTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              All reviews are verified and from real customers
            </p>
            <a 
              href="/reviews"
              className="inline-block text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 hover:bg-opacity-90" 
              style={{backgroundColor: '#0A605B'}}
            >
              Read More Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
// COMPONENT_END: LiveTestimonials

// COMPONENT_START: LicenseCard
const LicenseCard = () => (
  <section className="text-white py-16 text-center" style={{backgroundColor: '#01B1AF'}}>
    <div className="container mx-auto px-4">
      <h2 className="text-4xl caslon-bold-italic mb-4">Professionals You Can Trust</h2>
      <p className="text-xl mb-8">
        For all your plumbing needs in New Castle County, call The Plumbing Company today!
      </p>
      
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-2xl caslon-bold-italic text-gray-800 mb-1">
                Larry Wilson
              </h3>
              <p className="text-lg text-gray-700 font-semibold mb-3">
                Licensed Master Plumber
              </p>
              <div className="space-y-1 text-gray-600 text-sm">
                <p><span className="font-semibold">State of Delaware</span> - 2016</p>
                <p><span className="font-semibold">License:</span> NCC UT1498</p>
                <p><span className="font-semibold">Location:</span> Wilmington, DE</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="text-white p-3 rounded-full shadow-lg" style={{backgroundColor: '#01B1AF'}}>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600 font-semibold">VERIFIED</p>
                <p className="text-xs text-gray-500">Active License</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
// COMPONENT_END: LicenseCard

// COMPONENT_START: AboutUsSection
const AboutUsSection = () => (
  <section id="about" className="py-16 bg-white">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl caslon-bold-italic mb-4 text-gray-800">
          Dedicated To Providing Quality Plumbing
        </h2>
        <h3 className="text-xl font-semibold mb-4" style={{color: '#01B1AF'}}>
          Your Local Plumbing Experts in New Castle County
        </h3>
        <p className="mb-4 text-gray-700">
        At The Plumbing Company, we’re more than just plumbers, we’re a family-owned and operated business that’s been proudly serving Wilmington and the surrounding areas since 2000. Built on a foundation of honest work, guaranteed repairs, and unmatched respect for our customers, we believe in doing the job right every time.
        </p>
        <p className="mb-4 text-gray-700">
          Whether you need a leaky faucet repaired, a new water heater installed, or a complex sewer line replaced, our skilled technicians have the knowledge and tools to get the job done right the first time. We pride ourselves on our attention to detail and our ability to handle any plumbing issue, big or small.
        </p>
        <p className="mb-4 text-gray-700">
          We understand that plumbing problems can be stressful, which is why we offer prompt and reliable service, professional expertise, and competitive pricing. When you choose The Plumbing Company, you can rest assured that you&apos;re getting the best plumbing services in New Castle County.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/updated van.png"
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
        <div className="flex items-center justify-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
            alt="John D."
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 shadow-md"
          />
        </div>
        <p className="text-gray-700 italic mb-4">
          &quot;The team at The Plumbing Company was professional, courteous, and efficient. They fixed my leaky pipe quickly and the price was very fair. I highly recommend them!&quot;
        </p>
        <div className="flex justify-center items-center gap-1 text-yellow-400 mb-2">
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
        </div>
        <p className="text-gray-600 font-semibold">John D.</p>
        <p className="text-gray-500 text-sm">Wilmington, DE</p>
      </div>
      {/* Testimonial card 2 */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
            alt="Jane S."
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 shadow-md"
          />
        </div>
        <p className="text-gray-700 italic mb-4">
          &quot;I had a clogged drain and they came out the same day. The technician was knowledgeable and solved the problem in no time. Excellent service!&quot;
        </p>
        <div className="flex justify-center items-center gap-1 text-yellow-400 mb-2">
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} />
        </div>
        <p className="text-gray-600 font-semibold">Jane S.</p>
        <p className="text-gray-500 text-sm">New Castle, DE</p>
      </div>
      {/* Testimonial card 3 */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="Michael R."
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 shadow-md"
          />
        </div>
        <p className="text-gray-700 italic mb-4">
          &quot;Great service overall. They replaced our old pipes and the work was done well. Good value for money and professional team.&quot;
        </p>
        <div className="flex justify-center items-center gap-1 text-yellow-400 mb-2">
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} />
        </div>
        <p className="text-gray-600 font-semibold">Michael R.</p>
        <p className="text-gray-500 text-sm">Bear, DE</p>
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-gray-700">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2" style={{color: '#01B1AF'}}>Plumbing Services in New Castle County, Delaware</h3>
          <ul className="list-disc list-inside space-y-2 inline-block text-left">
            <li>Residential Plumbing Services</li>
            <li>Commercial Plumbing Services</li>
            <li>Sewer and Drain Cleaning</li>
            <li>Water Heater Repair & Installation</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2" style={{color: '#01B1AF'}}>Why Choose The Plumbing Company?</h3>
          <ul className="list-disc list-inside space-y-2 inline-block text-left">
            <li>Affordable Pricing</li>
            <li>Experienced & Certified Plumbers</li>
            <li>Customer Satisfaction Guaranteed</li>
            <li>Father and son owned and operated</li>
            <li>No job too small</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
// COMPONENT_END: ServicesListSection

// COMPONENT_START: CallToActionFooter
const CallToActionFooter = () => (
  <section className="text-white py-16 text-center" style={{backgroundColor: '#01B1AF'}}>
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
  <footer className="bg-gray-800 text-white py-12 relative">
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
          <a href="https://www.yelp.com/biz/the-plumbing-company-wilmington" className="text-gray-400 hover:text-white">
            <img src="/yelp.png" alt="Yelp" className="w-6 h-6 object-contain" />
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
          <li><Link href="/" className="hover:text-white">Home</Link></li>
        </ul>
      </div>
      {/* Column 4 - Contact */}
      <div>
        <h3 className="text-lg caslon-bold-italic mb-4">CONTACT</h3>
        <a href="tel:302-998-0938" className="text-gray-400 hover:text-white flex items-center gap-2">
          <Phone size={16} />
          (302) 998-0938
        </a>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
      &copy; 2024 The Plumbing Company. All Rights Reserved.
    </div>
    
    {/* Bottom Wave Pattern */}
    <div className="bottom-wave-pattern"></div>
  </footer>
);
// COMPONENT_END: Footer

// MAIN_APP_START
const App = () => {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Header />
      <HeroSection />
      <ImageSwiper />
      <Services />
      <LiveTestimonials />
      <AboutUsSection />
      {/* <TestimonialsSection /> */}
      <ServicesListSection />
      <LicenseCard />
      <Footer />
    </div>
  );
};
// MAIN_APP_END

// EXPORT_START
export default App;
// EXPORT_END

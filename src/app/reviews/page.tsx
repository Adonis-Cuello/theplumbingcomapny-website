'use client';

import Link from 'next/link';
import { Phone, Facebook, Star } from 'lucide-react';
import Header from '../../components/Header';

// COMPONENT_START: ReviewsHero
const ReviewsHero = () => (
  <section className="text-white py-8" style={{backgroundColor: '#01B1AF'}}>
    <div className="container mx-auto px-4 text-center">
      <div className="mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
          <img 
            src="/tpc_logo-removebg-preview.png" 
            alt="The Plumbing Company Logo" 
            className="max-w-full h-auto mx-auto"
            style={{maxHeight: '200px'}}
          />
        </div>
      </div>
      <h1 className="text-4xl caslon-bold-italic mb-4">Customer Reviews</h1>
      <p className="text-xl max-w-3xl mx-auto">
        Real testimonials from satisfied customers in New Castle County. 
        See why homeowners and businesses trust The Plumbing Company for all their plumbing needs.
      </p>
    </div>
  </section>
);
// COMPONENT_END: ReviewsHero

// COMPONENT_START: ReviewsSection
const ReviewsSection = () => {
  const testimonials = [
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
    },
    {
      id: 7,
      name: "Helen Vasquez",
      location: "New Castle County, DE",
      rating: 5,
      text: "STOP SCROLLING AND READ THIS!!! You seriously need to know this, you don't have to review any other review here because I can save you time and vision consumption. They are the BEST! Service wise, customer service wise, price wise, just EVERYTHING! They are an amazing company. Yes, they are busy, but guess what, they will do their best to really fit you in for the day. Show them patience and they will show you an outstanding service. Larry the owner is beyond doubt, professional, fast, super knowledgeable, and he knows from one look what needs to be done. Don't hesitate, give em a call, leave em a voicemail or even text em.",
      date: "2024-01-15",
      service: "Outdoor Plumbing System Repair",
      image: "/icon/iconkaren.png"
    },
    {
      id: 8,
      name: "Karen Montana",
      location: "New Castle County, DE",
      rating: 5,
      text: "Larry and his son Michael are the best! I would give 10 stars to The Plumbing Company if it were an option. This is the second time I've had them out. He responds pretty much immediately. He cared about my schedule and although it wasn't an emergency, he made it a priority.",
      date: "2024-01-20",
      service: "Plumbing Services",
      image: "/icon/iconkaren.png"
    },
    {
      id: 9,
      name: "Holly Jones",
      location: "New Castle County, DE",
      rating: 5,
      text: "Very impressed with Larry. I didn't have a reliable plumber and wasn't sure who to trust. Larry showed up the same day, fixed the leak, provided honest work and charged reasonable rates. I am so grateful to have found a local, Master Plumber, who's friendly, on time and trustworthy. If you don't have a good plumber, call Larry.",
      date: "2024-01-25",
      service: "Plumbing Leak Detection",
      image: "/icon/iconkaren.png"
    },
    {
      id: 10,
      name: "Christen Maroulis",
      location: "New Castle County, DE",
      rating: 5,
      text: "Larry was friendly, responsive and a great communicator. I understood his process and all that was happening every step of the way. He helped isolate and then repair a leak in my hot water pipe. He went out of his way to assist with all my panic and work to get me back up and running. He and his son work quickly and effectively. I would recommend him highly!",
      date: "2024-01-30",
      service: "Plumbing Leak Detection & Repair",
      image: "/icon/iconchristen.png"
    },
    {
      id: 11,
      name: "Alex Houston",
      location: "New Castle County, DE",
      rating: 5,
      text: "Attempted to fix a leaking shower cartridge but the metal had fused. Called Larry who gave me an upfront assessment of potential difficulties. Larry and his crew arrived early, performed a full replacement by cutting out the old unit, did the job quickly and professionally, and cleaned up afterward. Charged a fair price. Larry is a gem and a stand up guy. Highly recommend for plumbing needs.",
      date: "2024-02-05",
      service: "Shower Cartridge Replacement",
      image: "/icon/iconalex.png"
    },
    {
      id: 12,
      name: "Andrew D Zimmerman, Ph.D",
      location: "New Castle County, DE",
      rating: 5,
      text: "I was very fortunate to find Larry Wilson's business, The Plumbing Company, when I was in desperate need of someone to replace our hot water heater. They were responsive, fit the job in quickly, procured and installed a new hot water heater by the next day, and the overall experience was positive. I enthusiastically recommend Larry and The Plumbing Company for your household plumbing needs!",
      date: "2024-02-10",
      service: "Water Heater Installation",
      image: "/icon/iconandrew.png"
    },
    {
      id: 13,
      name: "Shanna",
      location: "New Castle County, DE",
      rating: 5,
      text: "THE BEST OF THE BEST!! I would never call another plumber. Larry and his son have fixed 3 big plumbing issues at my home and I am AMAZED at their quality of work, compassion, and knowledge of how to quickly diagnose and fix all plumbing issues! Not to mention the honest value of their prices. I am so grateful for The Plumbing Co because they care about the hardship plumbing problems cause a family and they work hard to eliminate this stress from your life fast. These guys are great! Thank you sooo much!!! HIGHLY RECOMMEND!!",
      date: "2024-02-15",
      service: "Multiple Plumbing Issues",
      image: "/icon/iconshenna.png"
    },
    {
      id: 14,
      name: "Bill Geronimo",
      location: "New Castle County, DE",
      rating: 5,
      text: "Larry & son Michael did a great job repairing our sewer ejector. Fast, and quality work! Very happy and will use them again with plumbing issues. And he noticed a toilet issue when leaving and repaired that also! Happy to leave a five star review!",
      date: "2024-02-20",
      service: "Sewer Ejector & Toilet Repair",
      image: "/icon/iconbill2.png"
    },
    {
      id: 15,
      name: "Drew",
      location: "New Castle County, DE",
      rating: 5,
      text: "Larry and his team are exceptional plumbers. They arrived on time, diagnosed the issue quickly, and completed the work efficiently. Their professionalism and attention to detail is outstanding. I highly recommend The Plumbing Company for any plumbing needs.",
      date: "2024-02-25",
      service: "General Plumbing",
      image: "/icon/icondrew.png"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl caslon-bold-italic text-gray-800 mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-400 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">
                        {new Date(testimonial.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-4">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                      style={{backgroundColor: '#0A605B', color: 'white'}}
                    >
                      {testimonial.service}
                    </span>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// COMPONENT_END: ReviewsSection

// COMPONENT_START: CallToAction
const CallToAction = () => (
  <section className="text-white py-16 text-center" style={{backgroundColor: '#01B1AF'}}>
    <div className="container mx-auto px-4">
      <h2 className="text-4xl caslon-bold-italic mb-4">Ready to Experience Our Service?</h2>
      <p className="text-xl mb-8">
        Join our satisfied customers and see why we&apos;re the trusted plumbing company in New Castle County.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="tel:302-998-0938"
          className="inline-block text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-colors duration-300"
          style={{backgroundColor: '#0A605B'}}
        >
          Call (302) 998-0938
        </a>
        <a 
          href="https://www.google.com/search?sca_esv=a580e5b387f8dd29&sxsrf=AE3TifO4XH2Q3qBV8EO5uLDbrgesGFptaA:1755276664260&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-ExtZBqj2MvVP5S9Du-Skxn7Ys2J-L1sqWE4XSFMMX6JAtwe9ItEg2HgLmkgXqMjXNB4-rWAD2_jP7kQHYYJlgng1aDSv40GYi_2NQwCvaanH0l31eapyXv2_FSn64zxTXrrHpGGS_1IGeyS_uNVkMpdstekQ&q=The+Plumbing+Company+-+Plumbing+repair+and+service+Reviews&sa=X&ved=2ahUKEwib4riQo42PAxXXg4kEHVXdG7IQ0bkNegQIHhAD&biw=1536&bih=695&dpr=1.25"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
        >
          See Every Review
        </a>
      </div>
    </div>
  </section>
);
// COMPONENT_END: CallToAction

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
          <li><Link href="/" className="hover:text-white">Home</Link></li>
          <li><Link href="/services" className="hover:text-white">Services</Link></li>
          <li><Link href="/#about" className="hover:text-white">About Us</Link></li>
          <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
        </ul>
      </div>
      {/* Column 4 - Contact */}
      <div>
        <h3 className="text-lg caslon-bold-italic mb-4">CONTACT</h3>
        <a href="tel:302-998-0938" className="text-gray-400 hover:text-white flex items-center gap-2">
          <Phone size={16} />
          (302) 998-0938
        </a>
        <p className="mb-2 text-gray-400">
          MON-FRI 9:00AM - 4:00PM
        </p>
        <p className="text-gray-400">
          SERVING NEW CASTLE COUNTY
        </p>
      </div>
    </div>
    
    {/* Bottom Wave Pattern */}
    <div className="bottom-wave-pattern"></div>
  </footer>
);
// COMPONENT_END: Footer

// COMPONENT_START: ReviewsPage
const ReviewsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ReviewsHero />
      <ReviewsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};
// COMPONENT_END: ReviewsPage

export default ReviewsPage;

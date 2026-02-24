import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Clock,
  Scissors,
  Sparkles,
  GraduationCap,
  ChevronLeft,
  Check,
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  Bell,
  Search,
  TrendingUp,
  Calendar as CalendarIcon,
  MapPin,
} from 'lucide-react';

// Immersive Scroll Reveal Component
const Reveal = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-y-0 translate-x-0 scale-100';
    switch (direction) {
      case 'up':
        return 'translate-y-12 scale-95';
      case 'down':
        return '-translate-y-12 scale-95';
      case 'left':
        return 'translate-x-12 scale-95';
      case 'right':
        return '-translate-x-12 scale-95';
      default:
        return 'translate-y-12 scale-95';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isVisible ? 'opacity-100' : 'opacity-0'} ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyle = 'px-8 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-500 border';
  const variants = {
    primary: 'bg-[#D4AF37] text-black border-[#D4AF37] hover:bg-transparent hover:text-[#D4AF37]',
    outline: 'bg-transparent text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black',
    ghost: 'bg-transparent text-zinc-300 border-transparent hover:text-[#D4AF37]',
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const HomeView = ({ navigate }) => {
  return (
    <div className="w-full bg-[#0A0A0A] text-zinc-300 font-sans relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#D4AF37] rounded-full blur-[200px] opacity-[0.04] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-0 w-[800px] h-[800px] bg-white rounded-full blur-[200px] opacity-[0.02] pointer-events-none z-0"></div>

      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
            alt="Luxury Salon Model"
            className="w-full h-full object-cover opacity-50 scale-110 transform animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
          <Reveal delay={100} direction="down">
            <span className="text-[#D4AF37] tracking-[0.4em] text-xs md:text-sm uppercase mb-6 block drop-shadow-lg">Gorakhpur's Premier Destination</span>
          </Reveal>

          <Reveal delay={300}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-2xl">
              Crafting Confidence. <br />
              <span className="italic text-zinc-300">Defining Elegance.</span>
            </h1>
          </Reveal>

          <Reveal delay={500}>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-12 font-light drop-shadow-md">
              An exclusive sanctuary where high-end fashion meets unparalleled artistry. Experience the pinnacle of luxury hair, beauty, and aesthetic education.
            </p>
          </Reveal>

          <Reveal delay={700}>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button onClick={() => navigate('booking')} className="shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                Reserve Your Experience
              </Button>
              <Button variant="outline" onClick={() => navigate('dashboard')} className="backdrop-blur-sm bg-black/20">
                Explore Academy
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal direction="right" className="relative">
            <div className="absolute -inset-4 border border-[#D4AF37]/30 translate-x-6 translate-y-6 transition-transform duration-700 hover:translate-x-4 hover:translate-y-4"></div>
            <div className="absolute inset-0 bg-[#D4AF37] opacity-0 hover:opacity-10 mix-blend-overlay transition-opacity duration-700 z-20"></div>
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop"
              alt="Salon Interior"
              className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-in-out"
            />
          </Reveal>
          <div className="space-y-8">
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                The London House <br />
                <span className="text-[#D4AF37] italic">Philosophy</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
            </Reveal>
            <Reveal delay={300}>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                Born from a passion for metropolitan sophistication, London House brings the exacting standards of British luxury to the heart of Gorakhpur.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p className="text-zinc-400 leading-relaxed font-light text-lg">
                We believe that true elegance is bespoke. Our master artisans do not merely style; they sculpt, design, and curate a look that is definitively yours. Every touch, every product, and every moment is calibrated for absolute perfection.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <div className="pt-4 border-l-2 border-[#D4AF37]/30 pl-6">
                <span className="text-white font-serif text-2xl">Elena Rostova</span>
                <p className="text-[#D4AF37] text-sm tracking-widest uppercase mt-2">Founder & Master Director</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080808] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <Reveal>
              <h2 className="text-4xl font-serif text-white mb-4">
                The Art of <span className="italic text-[#D4AF37]">Transformation</span>
              </h2>
              <p className="text-zinc-400 font-light">A curated portfolio of our finest work.</p>
            </Reveal>
            <Reveal delay={200}>
              <button className="hidden md:flex items-center text-[#D4AF37] hover:text-white transition-colors tracking-widest uppercase text-sm group">
                View Lookbook <ChevronRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1973&auto=format&fit=crop',
            ].map((img, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="group relative overflow-hidden h-[500px] cursor-pointer shadow-2xl">
                  <div className="absolute inset-0 bg-[#D4AF37]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-color"></div>
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-2">Editorial</p>
                      <p className="text-white font-serif text-xl">Haute Couture Styling</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Meet Our <span className="italic text-[#D4AF37]">Artisans</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: 'Aria Sharma', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop' },
            { name: 'Marcus Thorne', role: 'Senior Colorist', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
            { name: 'Priya Patel', role: 'Aesthetic Specialist', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop' },
          ].map((artist, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="group border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-700 bg-[#0A0A0A] hover:bg-[#121212] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20"></div>
                <div className="h-[400px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  <img src={artist.img} alt={artist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                </div>
                <div className="p-8 text-center relative z-20">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0A0A0A] border border-[#D4AF37]/30 px-4 py-1 text-xs text-[#D4AF37] uppercase tracking-widest shadow-lg backdrop-blur-sm">
                    Level {3 - i}
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">{artist.name}</h3>
                  <p className="text-zinc-500 font-light text-sm uppercase tracking-widest">{artist.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-b border-zinc-900">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img src="https://images.unsplash.com/photo-1521590832167-7bfc17484d87?q=80&w=2070&auto=format&fit=crop" alt="Academy" className="w-full h-full object-cover mask-image-l mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl">
            <Reveal>
              <GraduationCap className="text-[#D4AF37] w-12 h-12 mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                London House <span className="italic">Academy</span>
              </h2>
              <p className="text-xl text-[#D4AF37] mb-8 font-light">Master the Art of Beauty.</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-zinc-400 leading-relaxed font-light text-lg mb-10">
                Elevate your career with our exclusive masterclasses and certification programs. Designed for the ambitious, taught by the elite. Join the next generation of top-tier beauty professionals in Gorakhpur.
              </p>
              <ul className="space-y-4 mb-12">
                {['Advanced Precision Cutting', 'Master Color Theory', 'High-Fashion Editorial Makeup'].map((item, i) => (
                  <li key={i} className="flex items-center text-zinc-300 group">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-4 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                    <span className="tracking-wide group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="hover:bg-[#D4AF37] hover:text-black">
                Explore Curriculums
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-40 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 flex items-center justify-center pointer-events-none mix-blend-screen">
          <span className="text-[20vw] font-serif font-black text-white whitespace-nowrap overflow-hidden">LONDON HOUSE</span>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>

        <Reveal direction="up" className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <Sparkles className="text-[#D4AF37] w-10 h-10 mb-8 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 drop-shadow-lg">Ready for Perfection?</h2>
          <p className="text-zinc-400 text-lg mb-12 font-light">Step into luxury. Reserve your tailored session with our master stylists today.</p>
          <Button onClick={() => navigate('booking')} className="px-12 py-5 text-lg shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:shadow-[0_0_60px_rgba(212,175,55,0.3)] hover:-translate-y-1">
            Reserve Your Experience
          </Button>
        </Reveal>
      </section>
    </div>
  );
};

const BookingView = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStylist, setSelectedStylist] = useState(null);

  const services = [
    { id: 1, name: 'Signature Balayage', category: 'Hair', price: '₹8,500+', duration: '180 min' },
    { id: 2, name: 'Precision Cut & Styling', category: 'Hair', price: '₹2,500', duration: '60 min' },
    { id: 3, name: 'Illuminating Facial', category: 'Skin', price: '₹4,000', duration: '90 min' },
    { id: 4, name: 'Bridal Couture Makeup', category: 'Makeup', price: '₹25,000', duration: '240 min' },
  ];

  const stylists = [
    { id: 1, name: 'Aria Sharma', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { id: 2, name: 'Marcus Thorne', role: 'Senior Colorist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { id: 3, name: 'Anyone Available', role: 'Standard Stylist', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col md:flex-row pt-24 font-sans text-white">
      <div className="w-full md:w-1/3 bg-[#121212] p-8 md:p-12 border-r border-zinc-900 flex flex-col justify-between hidden md:flex">
        <div>
          <h2 className="text-3xl font-serif mb-2">Reservation</h2>
          <p className="text-[#D4AF37] uppercase tracking-widest text-xs mb-12">London House</p>

          <div className="space-y-8">
            <div className="flex items-start opacity-100 transition-opacity">
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center mr-4 ${step >= 1 ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-zinc-700 text-zinc-500'}`}>1</div>
              <div>
                <h4 className={`uppercase tracking-widest text-sm ${step >= 1 ? 'text-white' : 'text-zinc-500'}`}>Service</h4>
                {selectedService && <p className="text-zinc-400 mt-1 font-serif italic">{selectedService.name}</p>}
              </div>
            </div>
            <div className="flex items-start">
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center mr-4 ${step >= 2 ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-zinc-700 text-zinc-500'}`}>2</div>
              <div>
                <h4 className={`uppercase tracking-widest text-sm ${step >= 2 ? 'text-white' : 'text-zinc-500'}`}>Stylist</h4>
                {selectedStylist && <p className="text-zinc-400 mt-1 font-serif italic">{selectedStylist.name}</p>}
              </div>
            </div>
            <div className="flex items-start">
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center mr-4 ${step >= 3 ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-zinc-700 text-zinc-500'}`}>3</div>
              <div>
                <h4 className={`uppercase tracking-widest text-sm ${step >= 3 ? 'text-white' : 'text-zinc-500'}`}>Date & Time</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-800">
          <p className="text-sm text-zinc-500 flex items-center">
            <MapPin className="w-4 h-4 mr-2" /> Park Road, Gorakhpur
          </p>
        </div>
      </div>

      <div className="w-full md:w-2/3 p-6 md:p-16 overflow-y-auto">
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} className="text-zinc-400 hover:text-white flex items-center text-sm uppercase tracking-widest mb-12 transition-colors">
            <ChevronLeft size={16} className="mr-2" /> Back
          </button>
        )}

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Select a Service</h2>
            <div className="grid gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => {
                    setSelectedService(service);
                    setStep(2);
                  }}
                  className={`p-6 border cursor-pointer transition-all duration-300 flex justify-between items-center group
                    ${selectedService?.id === service.id ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-zinc-800 hover:border-zinc-600 bg-[#121212]'}`}
                >
                  <div>
                    <span className="text-xs text-[#D4AF37] uppercase tracking-widest mb-1 block">{service.category}</span>
                    <h3 className="text-xl font-serif group-hover:text-[#D4AF37] transition-colors">{service.name}</h3>
                    <div className="flex items-center text-sm text-zinc-500 mt-2">
                      <Clock size={14} className="mr-1" /> {service.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg">{service.price}</span>
                    <div
                      className={`w-6 h-6 rounded-full border mt-2 ml-auto flex items-center justify-center
                      ${selectedService?.id === service.id ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-zinc-600'}`}
                    >
                      {selectedService?.id === service.id && <Check size={14} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Choose Your Stylist</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stylists.map((stylist) => (
                <div
                  key={stylist.id}
                  onClick={() => {
                    setSelectedStylist(stylist);
                    setStep(3);
                  }}
                  className={`p-6 border cursor-pointer transition-all duration-300 flex flex-col items-center text-center group
                    ${selectedStylist?.id === stylist.id ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-zinc-800 hover:border-zinc-600 bg-[#121212]'}`}
                >
                  <img src={stylist.image} alt={stylist.name} className="w-24 h-24 rounded-full object-cover mb-4 border border-zinc-700 group-hover:border-[#D4AF37] transition-colors" />
                  <h3 className="text-xl font-serif">{stylist.name}</h3>
                  <p className="text-sm text-[#D4AF37] uppercase tracking-widest mt-1 mb-4">{stylist.role}</p>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${selectedStylist?.id === stylist.id ? 'border-[#D4AF37] bg-[#D4AF37] text-black' : 'border-zinc-600'}`}>
                    {selectedStylist?.id === stylist.id && <Check size={14} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Select Date & Time</h2>

            <div className="bg-[#121212] border border-zinc-800 p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-serif">October 2026</h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-zinc-800 rounded">
                    <ChevronLeft size={18} />
                  </button>
                  <button className="p-2 hover:bg-zinc-800 rounded">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs uppercase tracking-widest text-zinc-500 mb-4">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {[...Array(31)].map((_, i) => (
                  <button
                    key={i}
                    className={`p-3 text-sm hover:border-[#D4AF37] border border-transparent rounded transition-colors
                      ${i === 14 ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'text-zinc-300 hover:bg-zinc-800'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-serif mb-4">Available Times</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-12">
              {['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'].map((time, i) => (
                <button key={i} className={`p-3 border text-sm transition-colors ${i === 2 ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5' : 'border-zinc-800 hover:border-zinc-500'}`}>
                  {time}
                </button>
              ))}
            </div>

            <Button className="w-full text-center flex justify-center py-4" onClick={() => alert('Booking Confirmed!')}>
              Confirm Reservation
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const DashboardView = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex text-zinc-300 font-sans pt-16">
      <div className="w-64 bg-[#0A0A0A] border-r border-zinc-900 hidden lg:flex flex-col">
        <div className="p-8 border-b border-zinc-900">
          <h1 className="text-white font-serif text-xl tracking-wider">LONDON HOUSE</h1>
          <p className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mt-1">Management</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <div className="text-xs font-semibold text-zinc-600 tracking-wider uppercase mb-4 mt-4 px-4">Overview</div>
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: CalendarIcon, label: 'Schedule' },
            { icon: Users, label: 'Clients' },
            { icon: Scissors, label: 'Stylists' },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center px-4 py-3 rounded-lg text-sm transition-colors ${item.active ? 'bg-[#D4AF37]/10 text-[#D4AF37]' : 'hover:bg-zinc-900 text-zinc-400 hover:text-white'}`}>
              <item.icon size={18} className="mr-3" />
              {item.label}
            </button>
          ))}

          <div className="text-xs font-semibold text-zinc-600 tracking-wider uppercase mb-4 mt-8 px-4">Academy & System</div>
          {[
            { icon: BookOpen, label: 'Courses' },
            { icon: TrendingUp, label: 'Analytics' },
            { icon: Settings, label: 'Settings' },
          ].map((item, i) => (
            <button key={i} className="w-full flex items-center px-4 py-3 rounded-lg text-sm transition-colors hover:bg-zinc-900 text-zinc-400 hover:text-white">
              <item.icon size={18} className="mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-900">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-[#D4AF37] flex items-center justify-center text-white font-serif">ER</div>
            <div className="ml-3">
              <p className="text-sm text-white">Elena Rostova</p>
              <p className="text-xs text-zinc-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-[#0A0A0A] border-b border-zinc-900 flex items-center justify-between px-8">
          <div>
            <h2 className="text-xl font-serif text-white">Today's Overview</h2>
            <p className="text-sm text-zinc-500">Tuesday, October 24, 2026</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search clients..."
                className="bg-[#121212] border border-zinc-800 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-[#D4AF37] text-white w-64 transition-colors"
              />
            </div>
            <button className="relative text-zinc-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4AF37] rounded-full"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Daily Revenue', value: '₹45,500', trend: '+12%', isPositive: true },
              { label: 'Appointments', value: '24', trend: 'Full Booked', isPositive: true },
              { label: 'New Clients', value: '5', trend: '+2', isPositive: true },
              { label: 'Academy Inquiries', value: '12', trend: '-1', isPositive: false },
            ].map((stat, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-zinc-900 p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <p className="text-zinc-500 text-xs tracking-widest uppercase mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-serif text-white">{stat.value}</h3>
                  <span className={`text-xs ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#0A0A0A] border border-zinc-900 rounded-xl flex flex-col">
              <div className="p-6 border-b border-zinc-900 flex justify-between items-center">
                <h3 className="text-lg font-serif text-white">Stylist Schedule</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-zinc-900 text-xs uppercase tracking-wider rounded border border-zinc-800 hover:border-[#D4AF37] transition-colors">Today</button>
                  <button className="px-3 py-1 bg-transparent text-xs uppercase tracking-wider rounded text-zinc-500 hover:text-white">Week</button>
                </div>
              </div>
              <div className="flex-1 p-6 overflow-x-auto">
                <div className="min-w-[600px]">
                  <div className="flex mb-4 ml-24 text-xs text-zinc-500 border-b border-zinc-800 pb-2">
                    {['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'].map((t) => (
                      <div key={t} className="flex-1">
                        {t}
                      </div>
                    ))}
                  </div>

                  {[
                    { name: 'Aria S.', role: 'Director', bookings: [{ time: 'col-start-1 col-span-2', label: 'Balayage - Mrs. Kapoor', type: 'hair' }] },
                    { name: 'Marcus T.', role: 'Colorist', bookings: [{ time: 'col-start-3 col-span-1', label: 'Consult', type: 'consult' }, { time: 'col-start-4 col-span-2', label: 'Color Correction', type: 'hair' }] },
                    { name: 'Priya P.', role: 'Aesthetic', bookings: [{ time: 'col-start-2 col-span-3', label: 'Bridal Makeup Trial', type: 'makeup' }] },
                  ].map((staff, i) => (
                    <div key={i} className="flex items-center mb-6 relative">
                      <div className="w-24 pr-4 border-r border-zinc-800">
                        <p className="text-sm text-white font-medium">{staff.name}</p>
                        <p className="text-[10px] text-zinc-500 uppercase">{staff.role}</p>
                      </div>
                      <div className="flex-1 grid grid-cols-6 gap-2 ml-4 relative">
                        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="border-l border-zinc-900/50 h-full"></div>
                          ))}
                        </div>

                        {staff.bookings.map((booking, j) => (
                          <div key={j} className={`relative z-10 p-2 text-xs rounded border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-white shadow-sm flex items-center ${booking.time}`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2"></div>
                            <span className="truncate">{booking.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#0A0A0A] border border-zinc-900 rounded-xl flex flex-col">
              <div className="p-6 border-b border-zinc-900">
                <h3 className="text-lg font-serif text-white">Next Arrivals</h3>
              </div>
              <div className="p-4 flex-1 overflow-y-auto space-y-2">
                {[
                  { time: '10:00 AM', client: 'Ananya Singh', service: 'Signature Balayage', stylist: 'Aria S.', status: 'Checked In' },
                  { time: '11:30 AM', client: 'Rohit Sharma', service: 'Precision Cut', stylist: 'Marcus T.', status: 'Pending' },
                  { time: '01:00 PM', client: 'Meera Rajput', service: 'Illuminating Facial', stylist: 'Priya P.', status: 'Confirmed' },
                  { time: '02:00 PM', client: 'Kiran Desai', service: 'Academy Tour', stylist: 'Elena R.', status: 'Confirmed' },
                ].map((apt, i) => (
                  <div key={i} className="p-4 border border-zinc-800 bg-[#121212] rounded-lg hover:border-[#D4AF37]/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-[#D4AF37] text-xs font-semibold">{apt.time}</p>
                      <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-wider ${apt.status === 'Checked In' ? 'bg-green-900/30 text-green-400 border border-green-900' : 'bg-zinc-800 text-zinc-400'}`}>
                        {apt.status}
                      </span>
                    </div>
                    <h4 className="text-white text-sm font-medium">{apt.client}</h4>
                    <p className="text-zinc-500 text-xs mt-1">
                      {apt.service} • <span className="text-zinc-400">{apt.stylist}</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-zinc-900">
                <button className="w-full py-2 text-sm text-center text-[#D4AF37] hover:bg-[#D4AF37]/5 rounded transition-colors">View All Appointments</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (view) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">
      {currentView !== 'dashboard' && (
        <nav
          className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled || currentView === 'booking' ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-zinc-900 py-4' : 'bg-transparent border-transparent py-6'}`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            <div className="cursor-pointer group flex flex-col" onClick={() => navigate('home')}>
              <span className="font-serif text-2xl md:text-3xl tracking-wide text-white group-hover:text-[#D4AF37] transition-colors">LONDON HOUSE</span>
              <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-zinc-400 uppercase mt-1">Salon & Academy</span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => navigate('home')} className="text-sm text-zinc-300 hover:text-[#D4AF37] tracking-widest uppercase transition-colors">
                Home
              </button>
              <button className="text-sm text-zinc-300 hover:text-[#D4AF37] tracking-widest uppercase transition-colors">Services</button>
              <button className="text-sm text-zinc-300 hover:text-[#D4AF37] tracking-widest uppercase transition-colors">Academy</button>
              <button onClick={() => navigate('dashboard')} className="text-sm text-zinc-500 hover:text-white flex items-center tracking-widest uppercase transition-colors">
                <LayoutDashboard size={14} className="mr-2" /> Staff Login
              </button>
              <Button onClick={() => navigate('booking')} className="px-6 py-2 text-xs">
                Reserve
              </Button>
            </div>

            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-zinc-900 py-8 px-6 flex flex-col space-y-6 animate-in slide-in-from-top-4">
              <button onClick={() => navigate('home')} className="text-xl font-serif text-left">
                Home
              </button>
              <button className="text-xl font-serif text-left">Services</button>
              <button className="text-xl font-serif text-left">Academy</button>
              <button onClick={() => navigate('dashboard')} className="text-xl font-serif text-left text-zinc-500">
                Staff Portal
              </button>
              <Button onClick={() => navigate('booking')} className="w-full text-center mt-4">
                Reserve Experience
              </Button>
            </div>
          )}
        </nav>
      )}

      <main>
        {currentView === 'home' && <HomeView navigate={navigate} />}
        {currentView === 'booking' && <BookingView />}
        {currentView === 'dashboard' && <DashboardView />}
      </main>

      {currentView !== 'dashboard' && (
        <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="font-serif text-3xl tracking-wide text-white mb-2 block">LONDON HOUSE</span>
              <span className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase mb-8 block">Salon & Academy</span>
              <p className="text-zinc-500 font-light max-w-sm mt-6">Redefining luxury beauty and aesthetic education in Gorakhpur. Where every detail matters.</p>
            </div>
            <div>
              <h4 className="text-white font-serif text-xl mb-6">Contact</h4>
              <ul className="space-y-4 text-zinc-500 font-light text-sm">
                <li>
                  12 Park Road, Civil Lines
                  <br />
                  Gorakhpur, UP 273001
                </li>
                <li>+91 98765 43210</li>
                <li>concierge@londonhouse.in</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-serif text-xl mb-6">Hours</h4>
              <ul className="space-y-4 text-zinc-500 font-light text-sm">
                <li className="flex justify-between">
                  <span>Mon - Sat</span> <span>10:00 - 20:00</span>
                </li>
                <li className="flex justify-between text-[#D4AF37]">
                  <span>Sunday</span> <span>Exclusive Prep</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 tracking-widest uppercase">
            <p>© 2026 London House. All Rights Reserved.</p>
            <div className="space-x-6 mt-4 md:mt-0">
              <button className="hover:text-white transition-colors">Instagram</button>
              <button className="hover:text-white transition-colors">Facebook</button>
              <button className="hover:text-white transition-colors">Privacy</button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import {
  Brain, CheckCircle2, Sparkles, Calendar, ShieldCheck, Compass, User, Mail, Phone,
  MapPin, PlayCircle, Quote, ChevronDown, MessageCircle, X, Star, Users, Clock,
  AlertCircle, Video, Building, Clock as ClockIcon
} from "lucide-react";

// Import images (update paths as needed)
import doctorImg from "./assets/imghero.jpeg";
import neuralBg from "./assets/neural-bg.jpg";
import logoImg from "./assets/manovaidya-logo.png";
import parent1 from "./assets/parent-1.jpg";
import parent2 from "./assets/parent-2.jpg";
import parent3 from "./assets/parent-3.jpg";
import parent4 from "./assets/parent-4.jpg";
import pradeepImg from "./assets/pradeep.png";
import jatinImg from "./assets/jatin.png";
import AutismBookingModal from "./components/AutismBookingModal";
import axios from "./api/axiosInstance";



const CTA_HREF = "https://pages.razorpay.com/pl_SlIYdiTps2YoCM/view";

function PrimaryCTA({ className = "", children }) {
  return (
    <a
      href={CTA_HREF}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-deep-green text-primary-foreground px-8 py-4 text-base font-medium tracking-wide transition-all hover:shadow-luxury hover:-translate-y-0.5 border border-gold/30 ${className}`}
    >
      <Sparkles className="h-4 w-4 text-gold" />
      {children ?? "Book Your ₹499 Clarity Session"}
    </a>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold font-medium">
      <span className="h-px w-8 bg-gold" />
      {children}
    </div>
  );
}

function LiveAppointments() {
  const names = ["Priya S.", "Rajesh M.", "Anita K.", "Vikram R.", "Meera J.", "Arjun P.", "Kavita N."];
  const cities = ["Mumbai", "Bengaluru", "Delhi NCR", "Pune", "Hyderabad", "Chennai", "Ahmedabad"];
  const [idx, setIdx] = useState(0);
  const [today, setToday] = useState(17);
  
  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % names.length);
      setToday((t) => (t >= 23 ? 14 : t + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [names.length]);
  
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-deep-green text-primary-foreground border border-gold/30 shadow-soft">
      <div className="h-11 w-11 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
        <Users className="h-5 w-5 text-gold" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
          </span>
          <span className="text-sm font-bold">{today} sessions booked today</span>
        </div>
        <div key={idx} className="text-xs text-primary-foreground/70 mt-0.5 truncate animate-fade-up">
          {names[idx]} from {cities[idx]} just booked
        </div>
      </div>
    </div>
  );
}

function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookingClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/95 border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={logoImg} alt="Manovaidya" className="h-10 w-auto" />
            {/* <div className="leading-tight">
              <div className="font-display text-xl text-deep-green font-bold tracking-tight">Manovaidya</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">Neuro-Ayurveda</div>
            </div> */}
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-deep-green">
            <a href="#system" className="hover:text-gold transition">The System</a>
            <a href="#plan" className="hover:text-gold transition">180-Day Plan</a>
            <a href="#cases" className="hover:text-gold transition">Case Studies</a>
            <a href="#faq" className="hover:text-gold transition">FAQ</a>
          </nav>
          <button 
            onClick={handleBookingClick}
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-primary-foreground bg-deep-green border border-gold/40 px-5 py-2.5 rounded-full hover:shadow-luxury transition-all flex-shrink-0 cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Book Neuro Assessment Development Test
          </button>
        </div>
      </header>

      {/* Booking Modal */}
      <AutismBookingModal open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
}



function Hero() {
  const rating = 4.9;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: `url(${neuralBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <SectionLabel>Neuro-Development Clarity</SectionLabel>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-deep-green">
            Before You Start <em className="not-italic text-gradient-gold">Autism Treatment</em>…
            <br />
            Are You Sure You Know the Exact Problem?
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
            Most parents try multiple therapies — but very few understand their child's actual neuro-development gaps.
          </p>
          <div className="mt-8 p-6 border-l-2 border-gold bg-cream/60 rounded-r-lg max-w-2xl">
            <p className="text-deep-green leading-relaxed">
              We don't start treatment immediately. We first identify the root cause through a structured
              <span className="font-medium"> Neuro-Development Assessment.</span>
            </p>
          </div>
          
          {/* Watch Video Button - Replaces PrimaryCTA */}
       <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
  <a
    href="#watch-video"
    className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold text-deep-green px-10 py-5 text-lg font-semibold transition-all hover:shadow-lg hover:scale-105 active:scale-95 animate-bounce"
    style={{ minWidth: "280px" }}
  >
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
    Watch Video First
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  </a>
</div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
            <a
              href="https://www.google.com/search?q=manovaidya+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-white border hover:border-yellow-400 transition-all"
            >
              <div className="flex-1">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-green-800">
                    {rating.toFixed(1)}
                  </span>

                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFull = star <= fullStars;
                      const isHalf = star === fullStars + 1 && hasHalfStar;

                      return (
                        <span key={star} className="relative inline-flex h-4 w-4">
                          {/* Empty star */}
                          <Star className="h-4 w-4 text-gray-300" />

                          {/* Filled part */}
                          {(isFull || isHalf) && (
                            <span
                              className="absolute inset-0 overflow-hidden"
                              style={{
                                width: isFull ? "100%" : "50%",
                              }}
                            >
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="text-xs text-gray-500 mt-1">
                  <span className="font-semibold text-green-800">Rating</span> · Live
                </div>
              </div>
            </a>

            <LiveAppointments />
          </div>

          <div className="mt-8 flex items-center gap-8 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-deep-green" /> Structured System</div>
            <div className="flex items-center gap-2"><Compass className="h-4 w-4 text-deep-green" /> Root Cause Clarity</div>
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-deep-green" /> 180-Day Plan</div>
          </div>
        </div>
        <div className="lg:col-span-5 relative animate-fade-up">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury">
            <img src={doctorImg} alt="Neuro-Ayurveda System Developer" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              {/* <div className="text-m uppercase tracking-[0.25em] text-gold mb-2">Profession</div> */}
              <div className="font-display text-2xl">Neuro-Ayurveda Specialist</div>
            </div>
          </div>
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-gold rounded-tl-2xl" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-gold rounded-br-2xl" />
        </div>
      </div>
    </section>
  );
}


function VSL() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToAssessment = () => {
    const assessmentSection = document.getElementById('assessment');
    if (assessmentSection) {
      assessmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="watch-video" className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <SectionLabel>Watch First</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green">
            Watch This Before Starting Any Autism Treatment
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A 3-minute briefing on why most therapies fail — and how a structured system creates predictable progress.
          </p>
          
          <div className="mt-12 aspect-video rounded-2xl overflow-hidden shadow-luxury">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ZpXSu4BIRiE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Nice CTA Button */}
{/* PREMIUM CTA BUTTON */}
{/* PREMIUM CTA BUTTON */}
<div className="mt-8 sm:mt-10 flex justify-center px-4">
  <button
    onClick={handleBookingClick}
    className="
      group relative w-full
      max-w-[320px] sm:max-w-[500px] lg:max-w-[540px]
      overflow-hidden rounded-full bg-[#d9a62c]
      px-4 py-3 sm:px-7 sm:py-4 lg:px-8 lg:py-4
      shadow-[0_14px_35px_rgba(217,166,44,0.28)]
      transition-all duration-500
      hover:scale-[1.02]
      hover:shadow-[0_20px_55px_rgba(217,166,44,0.38)]
      active:scale-[0.98]
    "
  >
    {/* SHINE EFFECT */}
    <span className="absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute top-0 left-[-120%] h-full w-[55%] rotate-12 bg-white/20 blur-2xl transition-all duration-1000 group-hover:left-[140%]" />
    </span>

    {/* CONTENT */}
    <div className="relative flex items-center justify-between gap-3">
      
      {/* TEXT */}
      <span
        className="
          text-left font-bold text-[#082b1d]
          text-[11px] xs:text-[12px] sm:text-[17px] lg:text-[18px]
          leading-tight
          whitespace-nowrap
        "
      >
        Book Neuro Assessment Development Test
      </span>

      {/* ARROW */}
      <div
        className="
          flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11
          items-center justify-center rounded-full
          bg-[#082b1d] text-white
          transition-all duration-300
          group-hover:translate-x-1
          group-hover:scale-110
          flex-shrink-0
        "
      >
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </div>
  </button>
</div>
          {/* Additional info */}
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Limited slots this week</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>180-Day structured plan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Autism Booking Modal */}
      <AutismBookingModal open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
}



function PainSection() {
  const tried = ["Speech therapy", "Occupational therapy", "Behaviour therapy"];
  const feel = ["Progress is slow", "Results are inconsistent", "Direction is unclear"];
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel>The Real Problem</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green">
            Most parents we meet have already tried everything…
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="p-10 rounded-2xl bg-card border border-border shadow-soft">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Already tried</div>
            <ul className="mt-6 space-y-4">
              {tried.map((t) => (
                <li key={t} className="flex items-center gap-3 text-deep-green text-lg">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 rounded-2xl bg-deep-green text-primary-foreground shadow-luxury">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Yet they still feel</div>
            <ul className="mt-6 space-y-4">
              {feel.map((t) => (
                <li key={t} className="flex items-center gap-3 text-lg">
                  <X className="h-5 w-5 text-gold flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="font-display text-2xl md:text-3xl text-deep-green italic">
            They are working on symptoms… <span className="text-gradient-gold not-italic font-medium">not the system.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Realization() {
  const facets = [
    { t: "Brain Response", d: "How the brain receives and processes input" },
    { t: "Neural Signaling", d: "How signals travel through developmental pathways" },
    { t: "Sensory Processing", d: "How the body integrates sound, touch, and motion" },
    { t: "Internal Biology", d: "Gut, sleep, and metabolic foundations" },
  ];
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <SectionLabel>The Big Realization</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green">
            Autism is not just a speech issue, or a behaviour problem.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            It is a <span className="text-deep-green font-medium">neuro-developmental system imbalance</span> involving multiple connected layers.
            Until this is understood clearly, results remain unpredictable.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facets.map((f, i) => (
            <div key={f.t} className="p-8 rounded-xl bg-card border border-border hover:border-gold/50 transition-all hover:shadow-soft">
              <div className="text-gold font-display text-3xl">0{i + 1}</div>
              <div className="mt-4 font-medium text-deep-green">{f.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemIntro() {
  return (
    <section id="system" className="py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${neuralBg})`, backgroundSize: "cover" }} />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold font-medium">
          <span className="h-px w-8 bg-gold" /> Our Approach <span className="h-px w-8 bg-gold" />
        </div>
        <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl leading-tight">
          We follow a structured <em className="not-italic text-gradient-gold">Neuro-Ayurveda Development System</em>.
        </h2>
        <p className="mt-8 text-lg text-primary-foreground/80 leading-relaxed font-light">
          We do not begin with treatment.
          We begin with understanding the system.
        </p>
      </div>
    </section>
  );
}

function Phases() {
  const phases = [
    {
      n: "Phase 01",
      d: "0 – 60 Days",
      t: "Stabilization",
      points: ["Child becomes calmer", "Irritability reduces", "Basic engagement begins"],
    },
    {
      n: "Phase 02",
      d: "60 – 120 Days",
      t: "Response Development",
      points: ["Response improves", "Eye contact increases", "Understanding begins"],
    },
    {
      n: "Phase 03",
      d: "120 – 180 Days",
      t: "Learning & Behaviour Integration",
      points: ["Learning improves", "Behaviour stabilizes", "Engagement becomes meaningful"],
    },
  ];
  // return (
    // <section id="plan" className="py-28">
    //   <div className="max-w-7xl mx-auto px-6 lg:px-12">
    //     <div className="text-center max-w-3xl mx-auto">
    //       <SectionLabel>The 180-Day System</SectionLabel>
    //       <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green">
    //         A Structured 180-Day Neuro-Development Plan
    //       </h2>
    //       <p className="mt-6 text-muted-foreground text-lg">
    //         Autism improvement follows a process — not guesswork.
    //       </p>
    //     </div>

    //     <div className="mt-20 relative">
    //       <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    //       <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
    //         {phases.map((p) => (
    //           <div key={p.n} className="relative">
    //             <div className="hidden lg:flex absolute -top-1 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-background items-center justify-center">
    //               <div className="h-3 w-3 rounded-full bg-gold ring-4 ring-gold/20" />
    //             </div>
    //             <div className="mt-12 p-10 rounded-2xl border border-border bg-card hover:shadow-luxury transition-all h-full">
    //               <div className="flex items-baseline justify-between">
    //                 <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">{p.n}</div>
    //                 <div className="text-sm text-muted-foreground">{p.d}</div>
    //               </div>
    //               <h3 className="mt-4 text-2xl text-deep-green">{p.t}</h3>
    //               <div className="gold-divider my-6" />
    //               <ul className="space-y-3">
    //                 {p.points.map((pt) => (
    //                   <li key={pt} className="flex items-start gap-3 text-deep-green/90">
    //                     <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
    //                     {pt}
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="mt-20 text-center max-w-3xl mx-auto">
    //       <p className="font-display text-2xl md:text-3xl text-deep-green italic leading-snug">
    //         This is not trial-based treatment.
    //         <br />
    //         <span className="text-gradient-gold not-italic font-medium">This is structured developmental progression.</span>
    //       </p>
    //     </div>
    //   </div>
    // </section>
  // );
}

function WhatYouGet() {
  const items = [
    "Structured child assessment",
    "Neuro-development gap analysis",
    "Root cause clarity",
    "Personalized 3–6 month roadmap",
    "Clear direction before treatment",
  ];
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel>Inside the ₹499 Clarity Session</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green">
            What you receive in the Clarity Session
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            You don't need more therapies. <span className="text-deep-green font-medium">You need the right direction.</span>
          </p>
          <PrimaryCTA className="mt-10" />
        </div>
        <div className="bg-card rounded-2xl p-10 shadow-soft border border-border">
          <ul className="space-y-5">
            {items.map((it, i) => (
              <li key={it} className="flex items-start gap-4 pb-5 border-b border-border last:border-0 last:pb-0">
                <div className="h-8 w-8 rounded-full bg-deep-green text-gold flex items-center justify-center text-sm font-medium flex-shrink-0">
                  {i + 1}
                </div>
                <div className="text-deep-green text-lg pt-0.5">{it}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Authority() {
  const roles = [
    "Neuro-Ayurveda Doctor",
    "Brain–Gut–Behaviour Specialist",
    "Structured System Creator",
  ];
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-2 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury">
            <img src={doctorImg} alt="System Developer" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-3">
          <SectionLabel>Authority</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green">
            A system created for parents who want clarity, not noise.
          </h2>
          <div className="mt-10 space-y-5">
            {roles.map((r) => (
              <div key={r} className="flex items-center gap-4 p-5 border-l-2 border-gold bg-cream/60 rounded-r-lg">
                <div className="text-deep-green font-medium text-lg">{r}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground italic">
            Calm. Confident. Structured. Built around measurable developmental progression.
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {

  const overallRating = 4.9;
  const fullStars = Math.floor(overallRating);
  const hasHalfStar = overallRating % 1 >= 0.5;

  const items = [
    {
      q: "Apne child ke behaviour ko lekar hum kaafi time se worried the. Isi concern ke liye humne Dr. Ankush Garg se consultation liya. Unhone bahut calmly hamari saari baat suni aur simple tareeke se hume situation samjhayi. Unki guidance mein ab lagbhag 4 months se treatment chal raha hai, aur hume positive changes feel ho rahe hain. Thanks for bringing back balance in our life.",
      name: "Pradeep Singh",
      role: "Parent",
      city: "India",
      date: "Reviewed a month ago",
      rating: 5,
      verified: true,
      tag: "Google Review",
      image: pradeepImg,
    },
    {
      q: "My 17 year old daughter was suffering from anxiety, mood swings and overthinking. As parents, hum samajh hi nahi pa rahe the ki problem kya hai. We tried many things at home and consulted doctors, but kuch khas benefit nahi hua. Manovaidya se treatment start karne ke baad kaafi positive changes dekhe. Ab wo calm feel karti hai, baatein share karti hai aur stress ko better handle kar pa rahi hai. Thanks to Dr. Ankush Garg and his team.",
      name: "Monu Singh",
      role: "Parent",
      city: "India",
      date: "Reviewed 2 months ago",
      rating: 5,
      verified: true,
      tag: "Google Review",
      image: "https://ui-avatars.com/api/?name=Monu+Singh"
    },
    {
      q: "Meri beti bahut hyperactive thi. Humne kaafi jagah consult kiya, jahan hume bataya gaya ki usse ADHD hai. Treatment start karwaya lekin zyada improvement nazar nahi aa rahi thi. Ek din Facebook par Manovaidya ka ad dekha aur wahan se treatment start kiya. Dheere-dheere meri beti mein kaafi achha improvement dikhne laga. Ab wo shant baith kar activities karti hai aur uska behaviour kaafi balanced ho gaya hai. Dr. Ankush Garg aur Manovaidya team ka dil se thank you.",
      name: "Jatin Kumar Sanjowa",
      role: "Parent",
      city: "India",
      date: "Reviewed 3 months ago",
      rating: 5,
      verified: true,
      tag: "Google Review",
      image: jatinImg,
    }
  ];

  return (
    <section className="py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        {/* TOP */}
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>
            Verified Parent Stories
          </SectionLabel>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green leading-tight">
            Real families.{" "}
            <span className="italic text-gold">
              Real words.
            </span>
          </h2>

          {/* GOOGLE RATING */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border shadow-soft">

            {/* Dynamic Stars */}
            <div className="flex items-center gap-0.5">

              {[1, 2, 3, 4, 5].map((star) => {

                const isFull = star <= fullStars;
                const isHalf = star === fullStars + 1 && hasHalfStar;

                return (
                  <span
                    key={star}
                    className="relative inline-flex h-4 w-4"
                  >

                    {/* Empty Star */}
                    <Star
                      className="h-4 w-4"
                      fill="none"
                      stroke="#d1d5db"
                    />

                    {/* Filled Star */}
                    {(isFull || isHalf) && (
                      <span
                        className="absolute left-0 top-0 h-4 overflow-hidden"
                        style={{
                          width: isFull ? "100%" : "50%"
                        }}
                      >
                        <Star
                          className="h-4 w-4"
                          fill="#facc15"
                          stroke="#facc15"
                        />
                      </span>
                    )}

                  </span>
                );
              })}

            </div>

            {/* Rating */}
            <span className="text-sm font-semibold text-deep-green">
              {overallRating}
            </span>

            <span className="text-sm text-muted-foreground">
              · Ratings
            </span>

          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">

          {items.map((t) => (

            <div
              key={t.name}
              className="group relative p-7 rounded-2xl bg-card border border-border shadow-soft hover:shadow-luxury transition-all duration-500 flex flex-col"
            >

              {/* TOP */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover shadow-soft"
                  />

                  <div>
                    <div className="font-semibold text-deep-green text-sm leading-tight">
                      {t.name}
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>

                </div>

                {t.verified && (
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-deep-green/70">
                    <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                    <span>Verified</span>
                  </div>
                )}

              </div>

              {/* REVIEW STARS */}
              <div className="mt-5 flex items-center gap-2">

                <div className="flex items-center gap-0.5">

                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5"
                      fill="#facc15"
                      stroke="#facc15"
                    />
                  ))}

                </div>

                <span className="text-[11px] text-muted-foreground">
                  {t.date}
                </span>

              </div>

              {/* CONTENT */}
              <Quote className="mt-5 h-5 w-5 text-gold/60" />

              <p className="mt-3 text-deep-green/90 leading-relaxed text-[15px] flex-1">
                {t.q}
              </p>

              <div className="gold-divider my-6" />

              {/* FOOTER */}
              <div className="flex items-center justify-between text-xs">

                <span className="text-muted-foreground">
                  📍 {t.city}
                </span>

                <span className="px-2 py-1 rounded-full bg-secondary text-deep-green/70 font-medium tracking-wide">
                  {t.tag}
                </span>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    {
      child: "Aarav M.",
      meta: "Boy · 4 yrs · Mumbai",
      diagnosis: "ASD Level 2 · Non-verbal · Low engagement",
      before: "2 years of speech & OT — minimal eye contact, no functional words, frequent meltdowns 4–5x/day.",
      system: "Phase 1: Sensory–gut stabilization · Phase 2: Structured response training · Phase 3: Communication mapping",
      duration: "180 Days · Sept 2024 – Mar 2025",
      metrics: [
        { label: "Eye Contact", before: 10, after: 78 },
        { label: "Verbal Words", before: 2, after: 64 },
        { label: "Meltdowns / day", before: 90, after: 18, invert: true },
      ],
      milestones: [
        { day: "Day 21", note: "Sleep cycle stabilized" },
        { day: "Day 45", note: "Sustained eye contact returned" },
        { day: "Day 110", note: "First meaningful 2-word phrases" },
        { day: "Day 180", note: "Functional conversation initiated" },
      ],
    },
    {
      child: "Saanvi S.",
      meta: "Girl · 6 yrs · Delhi NCR",
      diagnosis: "ASD + Severe irritability · Sleep disruption",
      before: "Behaviour therapy alone — inconsistent results, broken sleep, daily aggression episodes.",
      system: "Phase 1 stabilization → Phase 2 response training → Phase 3 integrated learning",
      duration: "180 Days · Jul 2024 – Jan 2025",
      metrics: [
        { label: "Sleep Hours", before: 30, after: 85 },
        { label: "Calm Baseline", before: 15, after: 82 },
        { label: "Aggression Episodes", before: 80, after: 12, invert: true },
      ],
      milestones: [
        { day: "Day 30", note: "Sleep through the night" },
        { day: "Day 60", note: "Calm baseline established" },
        { day: "Day 120", note: "Self-regulation in social settings" },
        { day: "Day 150", note: "Behaviour fully stabilized" },
      ],
    },
    {
      child: "Vivaan I.",
      meta: "Boy · 5 yrs · Bengaluru",
      diagnosis: "ASD Level 1 · Poor learning retention",
      before: "5+ therapies running in parallel — no unified direction, regression patterns visible every 6 weeks.",
      system: "Full 180-day Neuro-Ayurveda Development System with weekly checkpoints",
      duration: "180 Days · Aug 2024 – Feb 2025",
      metrics: [
        { label: "Learning Retention", before: 22, after: 81 },
        { label: "Engagement Quality", before: 28, after: 88 },
        { label: "Therapy Overload", before: 95, after: 30, invert: true },
      ],
      milestones: [
        { day: "Day 30", note: "Therapy stack simplified" },
        { day: "Day 70", note: "Retention curve reversed" },
        { day: "Day 130", note: "Reading readiness emerged" },
        { day: "Day 180", note: "Independent task completion" },
      ],
    },
  ];

  return (
    <section id="cases" className="py-28 relative bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel>Documented Case Studies</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green leading-tight">
            Structured progress, <span className="italic text-gold">measured weekly.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Every case below is a real Manovaidya client. Names shortened for privacy. Full reports & weekly assessments shared in your Clarity Session.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="px-3 py-1.5 rounded-full bg-card border border-border text-deep-green/80 inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" /> Parent-consented
            </span>
            <span className="px-3 py-1.5 rounded-full bg-card border border-border text-deep-green/80 inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-gold" /> Therapist-verified
            </span>
            <span className="px-3 py-1.5 rounded-full bg-card border border-border text-deep-green/80 inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-gold" /> Weekly progress reports
            </span>
          </div>
        </div>

        <div className="mt-16 space-y-10">
          {cases.map((c, i) => (
            <div
              key={i}
              className="relative rounded-3xl bg-card border border-border shadow-soft hover:shadow-luxury transition-all duration-500 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-4 p-8 lg:p-10 bg-gradient-hero text-cream relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold/10 blur-3xl" />
                  <div className="relative">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
                      Case {String(i + 1).padStart(2, "0")} of {cases.length}
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center font-display text-2xl text-white">
                        {c.child[0]}
                      </div>
                      <div>
                        <div className="font-display text-3xl text-white">{c.child}</div>
                        <div className="text-xs text-white/70 mt-1">{c.meta}</div>
                      </div>
                    </div>
                    <div className="mt-6 inline-block px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-[11px] text-white/90">
                      {c.diagnosis}
                    </div>
                    <div className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/90">Duration</div>
                    <div className="mt-1 text-sm text-white/85">{c.duration}</div>
                  </div>
                </div>

                <div className="lg:col-span-8 p-8 lg:p-10 space-y-7">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">Before Manovaidya</div>
                    <p className="mt-2 text-deep-green/90 leading-relaxed">{c.before}</p>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">System Applied</div>
                    <p className="mt-2 text-deep-green/90 leading-relaxed">{c.system}</p>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold mb-4">Measured Outcomes</div>
                    <div className="space-y-4">
                      {c.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="flex items-center justify-between text-xs text-deep-green/80 mb-1.5">
                            <span className="font-medium">{m.label}</span>
                            <span className="font-mono">
                              <span className="text-muted-foreground">{m.before}%</span>
                              <span className="mx-2 text-gold">→</span>
                              <span className="text-deep-green font-semibold">{m.after}%</span>
                            </span>
                          </div>
                          <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
                            <div
                              className="absolute inset-y-0 left-0 bg-muted-foreground/30 rounded-full"
                              style={{ width: `${m.before}%` }}
                            />
                            <div
                              className="absolute inset-y-0 left-0 bg-gradient-gold rounded-full transition-all duration-700"
                              style={{ width: `${m.after}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold mb-3">Milestone Timeline</div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {c.milestones.map((ms) => (
                        <div key={ms.day} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/60 border border-border/60">
                          <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-semibold text-deep-green">{ms.day}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{ms.note}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 text-gold" />
                      <span>Parent-consented · Therapist-verified case file</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-deep-green/60">
                      Ref #MV-{2024 + i}-{(i + 1) * 137}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            Results vary by child. Each case is dependent on consistent execution and the specific neuro-developmental profile.
          </p>
        </div>
      </div>
    </section>
  );
}

function GoogleReviews() {
  const rating = 4.9;
const fullStars = Math.floor(rating);
const hasHalfStar = rating % 1 >= 0.5;
  const reviews = [
    {
      name: "Anjali Krishnan",
      handle: "Local Guide · 47 reviews",
      avatar: "AK",
      color: "bg-rose-500",
      time: "2 weeks ago",
      text: "Dr. Manovaidya's team gave us the first honest assessment in 4 years. No false hopes, just a clear 180-day plan. My son's progress is documented week by week. Genuinely the most professional autism clinic in India.",
      photos: 3,
    },
    {
      name: "Suresh Reddy",
      handle: "12 reviews",
      avatar: "SR",
      color: "bg-blue-600",
      time: "1 month ago",
      text: "We flew down from Dubai after trying clinics in 3 countries. The Neuro-Ayurveda system actually addresses root causes — gut, sleep, sensory — before behaviour. My daughter slept through the night for the first time in Day 18.",
      photos: 0,
    },
    {
      name: "Meera Joshi",
      handle: "Local Guide · 89 reviews",
      avatar: "MJ",
      color: "bg-emerald-600",
      time: "3 weeks ago",
      text: "What I appreciate most: they say NO to families they cannot help. That integrity is rare. They took our case after a thorough assessment and we've seen real changes in 60 days. Highly recommend the Clarity Session.",
      photos: 2,
    },
    {
      name: "Vikram Bhatia",
      handle: "23 reviews",
      avatar: "VB",
      color: "bg-amber-600",
      time: "5 days ago",
      text: "Pricing is premium but absolutely justified. Weekly therapist calls, monthly progress reports, and a structured roadmap. I've spent 3x more on random therapies elsewhere with zero clarity. This is different.",
      photos: 0,
    },
    {
      name: "Pallavi Nair",
      handle: "Local Guide · 156 reviews",
      avatar: "PN",
      color: "bg-purple-600",
      time: "1 week ago",
      text: "Dr. and team are calm, deeply knowledgeable, and never rushed. They sat with us for 90 minutes in the first session. My 4-year-old is now making eye contact, eating new foods, and has started babbling. Day 75.",
      photos: 4,
    },
    {
      name: "Rahul Desai",
      handle: "8 reviews",
      avatar: "RD",
      color: "bg-cyan-600",
      time: "2 months ago",
      text: "Finally a clinic that combines real Ayurveda with neuro-developmental science. No mystical claims, no panchakarma packages — just structured protocols and measurable outcomes. Worth every rupee.",
      photos: 1,
    },
  ];

  return (
    <section className="py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>Google Reviews</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green leading-tight">
            What parents write on <span className="italic text-gold">Google.</span>
          </h2>

          <div className="mt-10 inline-block">
            <div className="bg-white rounded-2xl shadow-luxury border border-border p-6 text-left max-w-md">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 48 48" className="h-10 w-10">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <div>
                  <div className="text-xs text-muted-foreground">Manovaidya Clinic · Google</div>
             <div className="flex items-baseline gap-2">
  <span className="text-3xl font-semibold text-deep-green">
    {rating.toFixed(1)}
  </span>

  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => {
      const isFull = star <= fullStars;
      const isHalf = star === fullStars + 1 && hasHalfStar;

      return (
        <span key={star} className="relative inline-flex h-4 w-4">
          
          {/* Empty */}
          <Star
            className="h-4 w-4"
            fill="none"
            stroke="#d1d5db"
          />

          {/* Filled */}
          {(isFull || isHalf) && (
            <span
              className="absolute left-0 top-0 h-4 overflow-hidden"
              style={{ width: isFull ? "100%" : "50%" }}
            >
              <Star
                className="h-4 w-4"
                fill="#facc15"
                stroke="#facc15"
              />
            </span>
          )}
        </span>
      );
    })}
  </div>
</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Based google ratings</div>
                </div>
              </div>
              <div className="mt-5 space-y-1.5">
                {[
                  { stars: 5, pct: 94 },
                  { stars: 4, pct: 4 },
                  { stars: 3, pct: 1 },
                  { stars: 2, pct: 0 },
                  { stars: 1, pct: 1 },
                ].map((r) => (
                  <div key={r.stars} className="flex items-center gap-2 text-xs">
                    <span className="w-3 text-deep-green/70">{r.stars}</span>
                    <Star className="h-3 w-3 fill-gold text-gold" />
                    <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full bg-gold rounded-full" style={{ width: `${r.pct}%` }} />
                    </div>
                    <span className="w-8 text-right text-muted-foreground">{r.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-xl border border-border shadow-soft hover:shadow-luxury transition-all p-5">
              <div className="flex items-start gap-3">
                <div className={`h-10 w-10 rounded-full ${r.color} text-white flex items-center justify-center text-sm font-semibold shrink-0`}>
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-deep-green text-sm leading-tight">{r.name}</div>
                  <div className="text-[11px] text-muted-foreground">{r.handle}</div>
                </div>
                <svg viewBox="0 0 48 48" className="h-4 w-4 shrink-0">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-[11px] text-muted-foreground">{r.time}</span>
              </div>
              <p className="mt-3 text-sm text-deep-green/85 leading-relaxed">{r.text}</p>
              {/* {r.photos > 0 && (
                <div className="mt-3 flex gap-1.5">
                  {[...Array(Math.min(r.photos, 4))].map((_, i) => (
                    <div key={i} className="h-12 w-12 rounded bg-gradient-to-br from-secondary to-muted border border-border" />
                  ))}
                </div>
              )} */}
              <div className="mt-4 pt-3 border-t border-border flex items-center gap-4 text-xs text-muted-foreground">
                <span className="hover:text-deep-green cursor-pointer">👍 Helpful</span>
                <span className="hover:text-deep-green cursor-pointer">Share</span>
              </div>
            </div>
          ))}
        </div>

      <div className="mt-10 text-center">
  <a
    href="https://www.google.com/search?sca_esv=1432227f7e5641c8&sxsrf=ANbL-n5jc9_V8cjxenhv3bIt18hoxCCU4Q:1777896901430&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOY1OS03QdtCHjAhtR5nco9pNVhH6a9PXVuYKL-QrmrIThEoQWEIqSCQHWuBtRpkOWuj3Zka_AkLy4RU_oEwjV0iT8v4T&q=Manovaidya+Reviews&sa=X&ved=2ahUKEwi48oaKzp-UAxXGS3ADHSpuBrsQ0bkNegQIQxAH&biw=1280&bih=585&dpr=1.5"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 text-sm text-deep-green font-medium hover:text-gold transition"
  >
    See all <strong>{rating.toFixed(1)}</strong> ratings on Google →

    {/* ⭐ Stars */}
  <span className="flex items-center ml-2 gap-0.5">
  {[1, 2, 3, 4, 5].map((star) => {
    const isFull = star <= fullStars;
    const isHalf = star === fullStars + 1 && hasHalfStar;

    return (
      <span
        key={star}
        className="relative inline-flex h-3.5 w-3.5"
      >
        {/* Empty Star */}
        <Star
          className="h-3.5 w-3.5"
          fill="none"
          stroke="#d1d5db"
        />

        {/* Filled Star */}
        {(isFull || isHalf) && (
          <span
            className="absolute left-0 top-0 h-3.5 overflow-hidden"
            style={{ width: isFull ? "100%" : "50%" }}
          >
            <Star
              className="h-3.5 w-3.5"
              fill="#facc15"
              stroke="#facc15"
            />
          </span>
        )}
      </span>
    );
  })}
</span>
  </a>
</div>
      </div>
    </section>
  );
}








function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);
  const videos = [
  {
    id: "gYgPy11WNV8",
    name: "Sunita R.",
    role: "Mother of Aarav (5)",
    city: "Mumbai",
    duration: "2:14",
    quote: "He said 'Mumma' for the first time at Day 47.",
  },
  {
    id: "ZRsjg5Onbqo",
    name: "Ritika bansal",
    role: "Mother of riyansh (4)",
    city: "Bengaluru",
    duration: "3:08",
    quote: "Manovaidya gave us back direction.",
  },
  {
    id: "OQg0gMNgIdo",
    name: "Sakshi Gupta",
    role: "Mother of Ritik (3)",
    city: "Gurugram",
    duration: "4:22",
    quote: "The difference is real.",
  },
  {
    id: "b0OzBNn9F_s",
    name: "Rachna Mehra",
    role: "Mother of Vivan (7)",
    city: "Hyderabad",
    duration: "2:51",
    quote: "She's back in school.",
  },
   {
    id: "lqhpefWYP2E",
    name: "Anurag",
    role: "Father of Rishi (3)",
    city: "Gurugram",
    duration: "4:22",
    quote: "The difference is real.",
  },
  {
    id: "DP-crCP4rLo",
    name: "Sonia Sharma",
    role: "Mother of Athrav (5)",
    city: "Hyderabad",
    duration: "2:51",
    quote: "She's back in school.",
  },
  
];

  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>Video Testimonials</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green leading-tight">
            Hear it from the parents <span className="italic text-gold">themselves.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Unscripted. Unedited. Filmed at our clinic and at parents' homes after their 180-day journey.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {videos.map((v) => (
            <div
              key={v.name}
              className="group relative rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-luxury transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">

  {activeVideo === v.id ? (
   <iframe
  className="w-full h-full"
  src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1&controls=1&iv_load_policy=3&playsinline=1&fs=0`}
  allow="autoplay; encrypted-media"
  allowFullScreen
/>
  ) : (
    <>
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
        alt={v.name}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/90 via-deep-green/30 to-transparent" />

      {/* Play button */}
      <div
        onClick={() => setActiveVideo(v.id)}
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
      >
        <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-lg">
          <PlayCircle className="h-12 w-12 text-deep-green" />
        </div>
      </div>

      {/* Duration */}
      <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
        {v.duration}
      </div>
    </>
  )}
</div>

              <div className="p-5 bg-card flex items-center justify-between">
                <div>
                  <div className="font-semibold text-deep-green text-sm">{v.name}</div>
                  <div className="text-xs text-muted-foreground">{v.role} · {v.city}</div>
                </div>
              <div className="flex items-center gap-1">
  {[...Array(5)].map((_, i) => (
    <Star
      key={i}
      className="h-3.5 w-3.5"
      fill="#facc15"
      stroke="#facc15"
    />
  ))}
</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-muted-foreground">
          All videos shared with explicit parental consent. Faces and names approved for public use.
        </div>
      </div>
    </section>
  );
}

function Expectation() {
  return (
    <section className="py-10 ">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <SectionLabel>Honest Expectations</SectionLabel>
        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green leading-tight">
          We do not promise overnight results.
        </h2>
        <p className="mt-6 text-xl text-muted-foreground font-light">
          We provide <span className="text-deep-green font-medium">structured direction</span> and{" "}
          <span className="text-deep-green font-medium">measurable progress.</span>
        </p>
      </div>
    </section>
  );
}



function Pricing() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <section id="book" className="py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <SectionLabel>The Clarity Session</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green">
            Understand before you decide.
          </h2>
        </div>
        <div className="mt-12 rounded-3xl bg-gradient-hero text-primary-foreground p-10 lg:p-14 shadow-luxury relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${neuralBg})`, backgroundSize: "cover" }} />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Neuro-Development Clarity Session</div>
            <div className="mt-6 flex items-baseline gap-4">
              <div className="font-display text-6xl text-gold">₹499</div>
              <div className="text-lg text-primary-foreground/60 line-through">₹2000+</div>
            </div>
            <p className="mt-4 text-primary-foreground/80">
              Assessment typically costs ₹2000+. The Clarity Session is intentionally accessible —
              so you can understand before you decide anything.
            </p>
            <div className="gold-divider my-8" />
            <ul className="space-y-3">
              {["Structured child assessment", "Neuro-development gap analysis", "Root cause clarity", "Personalized 3–6 month roadmap"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
  onClick={() => setOpen(true)}
  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gold text-deep-green px-8 py-4 font-medium hover:shadow-luxury hover:-translate-y-0.5 transition-all"
>
  Book Neuro Assessment Development Test
</a>
              <div className="flex items-center gap-2 text-sm text-gold">
                <Clock className="h-4 w-4" /> Limited slots this week
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    
    <div className="bg-white rounded-2xl w-full max-w-2xl p-6 relative shadow-xl">
      
      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h3 className="text-xl font-semibold mb-4">Book Your Session</h3>

      {/* FORM */}
      <form
        onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      location: form.location?.value || "",
      message: form.message?.value || "",
    };

    try {
      await fetch("https://api.drankushgarg.com/api/appointments/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      
      window.location.href = "https://rzp.io/rzp/ydaKYJsq";

    } catch (err) {
      alert("Submission failed");
    }
  }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
        name="name"
          type="text"
          placeholder="Full Name"
          required
          className="border p-3 rounded-lg"
        />
        <input
        name="email"
          type="email"
          placeholder="Email Address"
          required
          className="border p-3 rounded-lg"
        />
        <input
        name="phone"
          type="tel"
          placeholder="Phone Number"
          required
          className="border p-3 rounded-lg"
        />
        <input
        name="location"
          type="text"
          placeholder="Address"
          className="border p-3 rounded-lg"
        />

        <textarea
        name="message"
          placeholder="Message / Note"
          className="border p-3 rounded-lg col-span-1 md:col-span-2"
        />

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-gold text-white py-3 rounded-lg hover:bg-gold"
        >
          Submit & Proceed to Payment
        </button>
      </form>
    </div>
  </div>
)}
    </>
  );
}

function Decision() {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <>
      <section className="py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <SectionLabel>You Have Two Options</SectionLabel>

            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green">
              A clear decision point.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="p-10 rounded-2xl bg-card border border-border opacity-70">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Option A
              </div>

              <h3 className="mt-4 text-2xl text-deep-green">
                Continue trial-based approaches
              </h3>

              <p className="mt-4 text-muted-foreground">
                Keep trying random therapies, hoping something works. Slow
                progress. Unclear direction.
              </p>
            </div>

            <div className="p-10 rounded-2xl bg-deep-green text-primary-foreground shadow-luxury border border-gold/30">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">
                Option B
              </div>

              <h3 className="mt-4 text-2xl">
                Understand the problem clearly
              </h3>

              <p className="mt-4 text-primary-foreground/80">
                Move forward with a structured system. Predictable phases.
                Measurable progress.
              </p>

              <button
                type="button"
                onClick={() => setOpenBooking(true)}
                className="mt-8 inline-flex items-center justify-center  rounded-full bg-deep-green text-primary-foreground px-3 py-2 text-base font-normal tracking-wide transition-all hover:shadow-luxury hover:-translate-y-0.5 border border-gold/30"
              >
                <Sparkles className="h-4 w-4 text-gold  " />
              Book Neuro Assessment Development Test
              </button>
            </div>
          </div>
        </div>
      </section>

      <AutismBookingModal open={openBooking} setOpen={setOpenBooking} />
    </>
  );
}

function NotForYou() {
  const items = [
    "Parents looking for overnight, miracle results",
    "Anyone unwilling to follow a structured 6-month process",
    "Those seeking yet another disconnected therapy session",
    "Parents not ready to invest in clarity before treatment",
  ];
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <SectionLabel>Honest Filter</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl text-deep-green">Who this is NOT for</h2>
          <p className="mt-4 text-muted-foreground">We work best with parents who value clarity and structure.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div key={it} className="flex items-start gap-3 p-6 rounded-xl border border-border bg-card">
              <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div className="text-deep-green">{it}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Is the ₹499 session a treatment session?", a: "No. It is a structured assessment to identify the actual neuro-development gaps and create your roadmap before any treatment begins." },
    { q: "How is this different from therapy?", a: "Therapies work on symptoms. Our system works on the underlying neuro-developmental imbalance — brain response, neural signaling, sensory processing, and internal biology." },
    { q: "How long is the full system?", a: "180 days, divided into three structured phases: Stabilization, Response Development, and Learning & Behaviour Integration." },
    { q: "Will my child improve?", a: "We do not promise overnight results. We provide structured direction with measurable progress at each phase." },
    { q: "Do I have to commit to treatment after the session?", a: "No. The Clarity Session exists so you can decide with full understanding. There is no obligation." },
    { q: "Is this conducted online or in person?", a: "The Clarity Session can be conducted online for parents across India and abroad." },
  ];
  const [open, setOpen] = useState(null);
  
  return (
    <section id="faq" className="py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <SectionLabel>Frequently Asked</SectionLabel>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl text-deep-green">Questions, answered calmly.</h2>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-6 group"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="text-lg text-deep-green font-medium">{f.q}</div>
                <ChevronDown className={`h-5 w-5 text-gold flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </div>
              <div
                className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <>
      <section className="py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${neuralBg})`,
            backgroundSize: "cover",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Autism improvement begins with{" "}
            <em className="not-italic text-gradient-gold">clarity</em>…
            <br /> not random treatment.
          </h2>

          <div className="gold-divider my-10 max-w-xs mx-auto" />

          {/* BUTTON */}
          <button
            type="button"
            onClick={() => setOpenBooking(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-deep-green px-10 py-5 font-medium text-lg hover:shadow-luxury hover:-translate-y-0.5 transition-all"
          >
            <Sparkles className="h-5 w-5" />
            Book Neuro Assessment Development Test
          </button>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Limited slots available this week
          </p>
        </div>
      </section>

      {/* MODAL */}
      <AutismBookingModal
        open={openBooking}
        setOpen={setOpenBooking}
      />
    </>
  );
}
function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Brain className="h-4 w-4 text-deep-green" />
          <span className="font-display text-deep-green">Neuro-Ayurveda</span>
        </div>
        <div>© {new Date().getFullYear()} Neuro-Ayurveda Development System. All rights reserved.</div>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
   const [open, setOpen] = useState(false);
  return (
      <>
      {/* Sticky Button */}
      <div className="fixed bottom-0 inset-x-0 z-30 md:hidden p-4 bg-background/100 backdrop-blur border-t border-border">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center gap-2 w-full rounded-full bg-deep-green text-primary-foreground py-3.5 font-medium"
        >
         
          Book Neuro Assessment Development Test
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-6 relative shadow-xl">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-4">Book Your Session</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "https://rzp.io/rzp/ydaKYJsq";
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input type="text" placeholder="Full Name" required className="border p-3 rounded-lg" />
              <input type="email" placeholder="Email" required className="border p-3 rounded-lg" />
              <input type="tel" placeholder="Phone" required className="border p-3 rounded-lg" />
              <input type="text" placeholder="Address" className="border p-3 rounded-lg" />

              <textarea
                placeholder="Message / Note"
                className="border p-3 rounded-lg md:col-span-2"
              />

              <button className="bg-gold text-white py-3 rounded-lg md:col-span-2">
                Submit & Proceed to Payment
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}

function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <a
      href="https://wa.me/919990844662"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-24 md:bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-deep-green text-gold flex items-center justify-center shadow-luxury transition-all hover:scale-110 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}


function WelcomePopup({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    mode: "online",
    address: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // Time slots (same as AutismBookingModal)
  const timeSlots = [
    "11:00-11:10 AM",
    "11:10-11:20 AM",
    "11:20-11:30 AM",
    "11:30-11:40 AM",
    "11:40-11:50 AM",
    "11:50-12:00 PM",
  ];

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s+()-]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Valid phone number required";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.time) {
      newErrors.time = "Time slot is required";
    }

    if (!formData.mode) {
      newErrors.mode = "Please select consultation mode";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  const handleModeSelect = (mode) => {
    setFormData((prev) => ({
      ...prev,
      mode,
    }));
    if (errors.mode) {
      setErrors((prev) => ({
        ...prev,
        mode: "",
      }));
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Using the same API endpoint as AutismBookingModal
      const response = await axios.post("/autism-bookings", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        mode: formData.mode,
        address: formData.address,
        message: formData.message
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("popupSubmitted", "true");
        localStorage.setItem("userName", formData.name);
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("autismBookingFormData", JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          mode: formData.mode,
          address: formData.address,
          message: formData.message
        }));

        onClose();

        // Redirect to payment page (same as AutismBookingModal)
        window.location.href = "/";
      } else {
        setSubmitError(response.data.message || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      console.error("Booking error:", err);

      if (err.response) {
        setSubmitError(err.response.data.message || "Server error. Please try again.");
      } else if (err.request) {
        setSubmitError("No response from server. Please check your connection.");
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-white shadow-2xl">
        {/* Close Button */}
        <div className="sticky top-0 z-10 flex justify-end bg-white pt-4 pr-4">
          <button
            type="button"
            onClick={() => onClose()}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f2ea] text-[#0b2f1d] hover:bg-[#e8dfd0] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 pb-7 sm:px-7">
          {/* Icon & Heading */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#d6a22e] to-[#f5d76e]">
              <Sparkles className="h-7 w-7 text-[#0b2f1d]" />
            </div>

            <h3 className="font-serif text-[28px] sm:text-[36px] leading-tight text-[#0b2f1d]">
              Get Your ₹499 Clarity Session
            </h3>

            <p className="mt-1 text-[13px] text-[#6b756c]">
              Limited slots this week
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-4 space-y-2 rounded-2xl bg-[#fbfaf7] p-4 border border-[#e5ddcf]">
            {[
              "Structured child assessment",
              "Neuro-development gap analysis",
              "Personalized roadmap"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-[#d6a22e] flex-shrink-0" />
                <span className="text-[#193b2b]">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-3 text-[13px] text-red-700">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          {/* FORM - Same structure as AutismBookingModal */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#193b2b]">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b756c]" />

                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-2xl border px-10 py-3 text-sm outline-none transition-all focus:border-[#d6a22e] ${
                      errors.name
                        ? "border-red-400 bg-red-50"
                        : "border-[#e5ddcf] bg-[#fbfaf7]"
                    }`}
                  />
                </div>

                {errors.name && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#193b2b]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b756c]" />

                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-2xl border px-10 py-3 text-sm outline-none transition-all focus:border-[#d6a22e] ${
                      errors.email
                        ? "border-red-400 bg-red-50"
                        : "border-[#e5ddcf] bg-[#fbfaf7]"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#193b2b]">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b756c]" />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-2xl border px-10 py-3 text-sm outline-none transition-all focus:border-[#d6a22e] ${
                      errors.phone
                        ? "border-red-400 bg-red-50"
                        : "border-[#e5ddcf] bg-[#fbfaf7]"
                    }`}
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#193b2b]">
                  Select Date
                </label>

                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b756c]" />

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={getMinDate()}
                    className={`w-full rounded-2xl border px-10 py-3 text-sm outline-none transition-all focus:border-[#d6a22e] ${
                      errors.date
                        ? "border-red-400 bg-red-50"
                        : "border-[#e5ddcf] bg-[#fbfaf7]"
                    }`}
                  />
                </div>

                {errors.date && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.date}</p>
                )}
              </div>

              {/* City / Location */}
              {/* <div>
                <label className="mb-2 block text-sm font-semibold text-[#193b2b]">
                  City / Location
                </label>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b756c]" />

                  <input
                    name="address"
                    type="text"
                    placeholder="Enter your city"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#e5ddcf] bg-[#fbfaf7] px-10 py-3 text-sm outline-none transition-all focus:border-[#d6a22e]"
                  />
                </div>
              </div>

              {/* Message */}
              {/* <div>
                <label className="mb-2 block text-sm font-semibold text-[#193b2b]">
                  Message / Note
                </label> */}
{/* 
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 w-4 h-4 text-[#6b756c]" />

                  <textarea
                    name="message"
                    placeholder="Share any specific concerns (child's age, challenges, etc.)"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#e5ddcf] bg-[#fbfaf7] px-10 py-3 text-sm outline-none transition-all focus:border-[#d6a22e] resize-none"
                  />
                </div>

                <p className="mt-1 text-[10px] text-[#6b756c]">
                  💬 Share any specific concerns or questions
                </p>
              </div> */} 

              {/* Mode Selection - Full width */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-[#193b2b]">
                  Consultation Mode
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleModeSelect("online")}
                    className={`rounded-xl border-2 p-4 text-center transition-all ${
                      formData.mode === "online"
                        ? "border-[#d6a22e] bg-[#d6a22e]/10 text-[#06351f]"
                        : "border-[#e5ddcf] bg-[#fbfaf7] text-[#5f665f] hover:border-[#d6a22e]"
                    }`}
                  >
                    <Video className="w-6 h-6 mx-auto mb-2" />
                    <span className="font-semibold">Online</span>
                    <p className="text-xs mt-1">Video Consultation</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleModeSelect("clinic")}
                    className={`rounded-xl border-2 p-4 text-center transition-all ${
                      formData.mode === "clinic"
                        ? "border-[#d6a22e] bg-[#d6a22e]/10 text-[#06351f]"
                        : "border-[#e5ddcf] bg-[#fbfaf7] text-[#5f665f] hover:border-[#d6a22e]"
                    }`}
                  >
                    <Building className="w-6 h-6 mx-auto mb-2" />
                    <span className="font-semibold">Clinic</span>
                    <p className="text-xs mt-1">In-Person Visit</p>
                  </button>
                </div>

                {errors.mode && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.mode}</p>
                )}
              </div>

              {/* Time - Full width */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-[#193b2b]">
                  Select Time
                </label>

                <div className="relative">
                  <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b756c]" />

                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full rounded-2xl border px-10 py-3 text-sm outline-none appearance-none transition-all focus:border-[#d6a22e] ${
                      errors.time
                        ? "border-red-400 bg-red-50"
                        : "border-[#e5ddcf] bg-[#fbfaf7]"
                    }`}
                  >
                    <option value="">Select Time Slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                {errors.time && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.time}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 w-full rounded-full bg-gradient-to-r from-[#d6a22e] to-[#f5d76e] py-4 text-[15px] font-semibold text-[#0b2f1d] transition-all duration-300 hover:shadow-lg disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#0b2f1d] border-t-transparent"></div>
                  Processing...
                </div>
              ) : (
                "Book ₹499 Clarity Session →"
              )}
            </button>

            {/* Trust Badge */}
            <p className="mt-4 text-center text-[10px] text-[#6b756c]">
              🔒 Secure & Confidential • No spam • ₹499 only
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// Updated LandingPage - Check if user has already submitted before showing popup
function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already submitted the form in this browser
    const hasSubmitted = localStorage.getItem("popupSubmitted");
    
    // Only show popup if user has NOT submitted before
    if (!hasSubmitted) {
      // Show popup after 1 second
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []); // Empty dependency array - runs once on mount

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <VSL />
        <PainSection />
        <Realization />
        <SystemIntro />
        <Phases />
        <WhatYouGet />
        <Authority />
        <Testimonials />
        <VideoTestimonials />
        <CaseStudies />
        <Expectation />
        <GoogleReviews />
        <Pricing />
        <Decision />
        <NotForYou />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <WhatsAppFloat />
      
      {/* Welcome Popup - Only shows for users who haven't submitted */}
      <WelcomePopup isOpen={showPopup} onClose={handleClosePopup} />
    </div>
  );
}

export default LandingPage;


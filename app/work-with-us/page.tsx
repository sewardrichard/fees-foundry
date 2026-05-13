'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Handshake,
  Building2,
  Landmark,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function WorkWithUsPage() {
  return (
    <div className="min-h-screen bg-[#07090E] selection:bg-primary/30 selection:text-white overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="text-center max-w-3xl mx-auto">
            <motion.span variants={FADE_UP} className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Partnerships</motion.span>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Work with<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">SchoolFoundry.</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/50 font-medium leading-relaxed">
              We partner with donors, sponsors, NGOs, governments, and development agencies that believe education infrastructure is the foundation of community development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Partnerships ── */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Who we work with</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              Partners who share <span className="text-primary">our mission.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Donors & Sponsors */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Donors & Sponsors</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Fund the digitization of schools that can't afford it themselves. Your sponsorship covers hardware, software, and training — giving disadvantaged schools the same tools as private institutions. Every dollar is tracked and reported.
              </p>
            </div>

            {/* NGOs & Development Agencies */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Handshake className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">NGOs & Development Agencies</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Partner with us to digitize schools within your existing education programs. We provide the technology; you provide the reach. Our system plugs directly into community development initiatives with measurable outcomes.
              </p>
            </div>

            {/* Grant Funding */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Grant Funding</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                We actively seek grants to cover deployment costs for disadvantaged schools — schools that have the infrastructure (a PC, electricity) but not the funds to digitize. If you manage a grant program focused on education or technology, let's talk.
              </p>
            </div>

            {/* Governments (wide) */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Landmark className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Government & Public Sector</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                We work with government agencies and public institutions to bring digital school management into the public education system. Our tools can be deployed at scale across district or national networks, providing ministries with real-time visibility into school operations across the country.
              </p>
            </div>

            {/* Investors */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Investors</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                EdTech in Sub-Saharan Africa is a growing market with real demand. We're building sustainable infrastructure — not chasing hype. If you're looking for impact-driven investment in African education, we'd love to connect.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Ministry of Education ── */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Government partnership</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              A call to <span className="text-primary">Ministries of Education.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Left — why partner */}
            <div className="bg-[#07090E] p-7 sm:p-10 cursor-default">
              <p className="text-[15px] text-white/60 leading-[1.8] mb-6">
                Ministries of Education across Zambia, Zimbabwe, and the wider region face the same challenge: thousands of schools still run on paper-based systems with no visibility into enrolment numbers, fee collection, or academic performance at a district or national level.
              </p>
              <p className="text-[15px] text-white/60 leading-[1.8] mb-6">
                SchoolFoundry can change that. Our platform is designed to be deployed at scale — from a single community school to an entire province. Because it works offline, it reaches schools that cloud-only solutions simply can't.
              </p>
              <p className="text-[15px] text-white/60 leading-[1.8]">
                We're ready to work with your department to pilot, customize, and roll out SchoolFoundry as part of your national education digitization strategy.
              </p>
            </div>

            {/* Right — what we offer */}
            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col justify-center cursor-default">
              <p className="font-bold text-[15px] text-white mb-6">What we bring to the table:</p>
              <div className="space-y-4">
                {[
                  'Offline-first system that works in rural and urban schools alike',
                  'Real-time analytics dashboard for district and national oversight',
                  'Secure, locally-hosted data with full audit trails',
                  'Mobile money payment integration for transparent fee collection',
                  'WhatsApp-based parent communication at zero cost to parents',
                  'Custom deployment packages for government-funded rollouts',
                  'Training and onboarding programs for school administrators',
                  'Scalable architecture — from 10 schools to 10,000',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-[13px] text-white/60 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Partner with us */}
            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center cursor-default">
              <div className="flex items-center gap-3 mb-6">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.svg`} alt="" className="h-10 w-auto" />
                <span className="text-xl font-black text-white tracking-tighter">School<span className="font-light text-primary">Foundry</span></span>
              </div>
              <p className="text-[15px] text-white/50 leading-[1.7] mb-6">
                Whether you're a school looking to digitize, a donor wanting to sponsor a school, an NGO running education programs, or a government ministry planning national rollouts — we want to hear from you.
              </p>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/30">
                Lusaka, Zambia · Built for Southern Africa
              </p>
            </div>

            {/* CTA buttons */}
            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col items-center justify-center text-center">
              <p className="font-bold text-[17px] text-white mb-3">Let's build together.</p>
              <p className="text-[13px] text-white/50 mb-8 max-w-sm leading-relaxed">
                Reach out to discuss partnerships, sponsorships, grants, or a simple product demo. We respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-primary/90 transition-all shadow-[0_20px_40px_-12px_rgba(249,115,22,0.4)] flex-1"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info@jiggabyte.co.zm"
                  className="inline-flex items-center justify-center px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-sm border border-white/10 transition-all flex-1"
                >
                  Email Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

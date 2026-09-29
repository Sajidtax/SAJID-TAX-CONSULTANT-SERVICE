<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sajid Tax Consultant & Web Solutions | Opera House, Mumbai</title>

  <!-- Google Fonts: Cinzel & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- FontAwesome 6 Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            obsidian: '#030712',
            deepOnyx: '#070c18',
            royalMidnight: '#0d1527',
            gold: {
              100: '#fef9c3',
              200: '#fef08a',
              300: '#fde047',
              400: '#facc15',
              500: '#d4af37',
              600: '#b48811',
              700: '#8c6708',
              800: '#634706',
              900: '#3d2b02',
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            serif: ['"Cinzel"', 'serif'],
          }
        }
      }
    }
  </script>

  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #030712;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #d4af37, #8c6708);
      border-radius: 999px;
    }

    /* 1. CONTINUOUS METALLIC LIQUID GOLD WAVE ON 'SAJID' */
    .brand-live-gold-shimmer {
      background: linear-gradient(
        105deg,
        #b48811 0%,
        #f5d061 18%,
        #ffffff 38%,
        #fef08a 50%,
        #ffffff 62%,
        #d4af37 80%,
        #8c6708 100%
      );
      background-size: 300% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: continuousMetallicWave 3.5s linear infinite;
      position: relative;
      display: inline-block;
      text-shadow: 0 0 24px rgba(212, 175, 55, 0.4);
    }

    @keyframes continuousMetallicWave {
      0% { background-position: 0% 50%; }
      100% { background-position: 300% 50%; }
    }

    /* 2. ROTATING DIAMOND SPARKLE FLARE ON 'SAJID' */
    .brand-glint-flare {
      position: absolute;
      top: -8px;
      right: -14px;
      width: 18px;
      height: 18px;
      pointer-events: none;
      animation: diamondStarFlare 3s ease-in-out infinite;
    }

    @keyframes diamondStarFlare {
      0%, 20%, 80%, 100% {
        opacity: 0;
        transform: scale(0.1) rotate(0deg);
      }
      45%, 55% {
        opacity: 1;
        transform: scale(1.4) rotate(90deg);
        filter: drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 16px #facc15);
      }
    }

    /* 3. RUNNING GOLD COMET LIGHT BEAM UNDERLINE */
    .brand-comet-line {
      position: relative;
      height: 1.5px;
      width: 100%;
      background: rgba(212, 175, 55, 0.25);
      border-radius: 999px;
      overflow: hidden;
      margin-top: 3px;
    }
    .brand-comet-line::after {
      content: '';
      position: absolute;
      top: 0;
      left: -60%;
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, transparent, #ffffff, #fef08a, transparent);
      animation: cometSweep 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    @keyframes cometSweep {
      0% { left: -60%; }
      100% { left: 160%; }
    }

    /* 4. LOGO RADIAL ENERGY AURA PULSE */
    .logo-aura-glow {
      position: absolute;
      inset: -6px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(250, 204, 21, 0.45) 0%, rgba(212, 175, 55, 0.15) 50%, transparent 75%);
      filter: blur(10px);
      animation: auraPulse 2.8s ease-in-out infinite alternate;
      pointer-events: none;
    }

    @keyframes auraPulse {
      0% { transform: scale(0.85); opacity: 0.45; }
      100% { transform: scale(1.25); opacity: 0.95; }
    }

    /* 5. GYROSCOPIC CELESTIAL ORBIT ROTATIONS */
    .logo-orbit-ring {
      transform-origin: 60px 60px;
      animation: spinClockwise 16s linear infinite;
    }
    .logo-counter-ring {
      transform-origin: 60px 60px;
      animation: spinCounterClockwise 10s linear infinite;
    }
    .logo-monogram-glow {
      animation: monogramPulse 3s ease-in-out infinite alternate;
    }

    @keyframes spinClockwise {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes spinCounterClockwise {
      0% { transform: rotate(360deg); }
      100% { transform: rotate(0deg); }
    }
    @keyframes monogramPulse {
      0% { filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.5)); }
      100% { filter: drop-shadow(0 0 16px rgba(250, 204, 21, 0.9)); }
    }

    /* 6. LUXURY GLASS CARDS */
    .luxury-card {
      background: linear-gradient(135deg, rgba(13, 21, 39, 0.8) 0%, rgba(7, 12, 24, 0.92) 100%);
      border: 1px solid rgba(212, 175, 55, 0.22);
      backdrop-filter: blur(18px);
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .luxury-card:hover {
      border-color: rgba(212, 175, 55, 0.65);
      transform: translateY(-6px);
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.65), 0 0 25px rgba(212, 175, 55, 0.2);
    }

    /* 7. LUXURY GOLD BUTTONS */
    .luxury-btn-gold {
      background: linear-gradient(135deg, #fef08a 0%, #facc15 30%, #d4af37 70%, #8c6708 100%);
      color: #030712;
      font-weight: 800;
      box-shadow: 0 6px 22px rgba(212, 175, 55, 0.35);
      transition: all 0.3s ease;
    }
    .luxury-btn-gold:hover {
      box-shadow: 0 10px 32px rgba(212, 175, 55, 0.65);
      transform: translateY(-2px);
    }

    /* 8. FLOATING ACTION DOCK */
    .float-dock {
      position: fixed;
      bottom: 24px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      z-index: 9999;
    }
    .float-item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .float-bubble {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.35rem;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.65);
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 1.5px solid rgba(255, 255, 255, 0.2);
      cursor: pointer;
    }
    .float-bubble:hover {
      transform: scale(1.14);
    }
    .float-tag {
      position: absolute;
      right: 66px;
      background: rgba(7, 12, 24, 0.95);
      border: 1px solid rgba(212, 175, 55, 0.4);
      color: #fef08a;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      padding: 5px 12px;
      border-radius: 999px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease, transform 0.25s ease;
      transform: translateX(8px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    }
    .float-item:hover .float-tag {
      opacity: 1;
      transform: translateX(0);
    }

    /* Interactive Accordion Details */
    details summary::-webkit-details-marker {
      display: none;
    }
  </style>
</head>
<body class="bg-obsidian text-slate-100 font-sans selection:bg-gold-500/30 selection:text-gold-200 relative antialiased">

  <!-- Interactive Golden Constellation Starfield Background Canvas -->
  <canvas id="luxCanvas" class="fixed inset-0 pointer-events-none z-0 opacity-40"></canvas>

  <!-- Top Active Notice Bar -->
  <div class="relative z-50 bg-gradient-to-r from-deepOnyx via-royalMidnight to-deepOnyx border-b border-gold-500/25 px-4 py-2 text-xs text-slate-200">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
      <div class="flex items-center gap-2.5 mx-auto sm:mx-0">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
        <span class="font-bold uppercase tracking-wider text-gold-300">Active Notice:</span>
        <span class="text-slate-300">Statutory Tax Filings, GST Registrations & Gumasta Licenses for Mumbai & Maharashtra.</span>
      </div>
      <div class="hidden md:flex items-center gap-4 text-[11px] text-slate-400">
        <span><i class="fa-solid fa-location-dot text-gold-400 mr-1.5"></i> Opera House, Mumbai</span>
        <span><i class="fa-solid fa-phone text-emerald-400 mr-1.5"></i> 7762067143</span>
      </div>
    </div>
  </div>

  <!-- Header with Live Animated Brand & Logo -->
  <header class="sticky top-0 z-40 bg-obsidian/90 backdrop-blur-xl border-b border-gold-500/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
      
      <!-- Live Animated Sajid Logo & Brand Name Cluster -->
      <a href="#home" class="flex items-center gap-3.5 sm:gap-4 group py-1">
        
        <!-- 1. LIVE ANIMATED CELESTIAL GOLD LOGO -->
        <div class="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
          <div class="logo-aura-glow"></div>

          <svg viewBox="0 0 120 120" class="w-full h-full relative z-10 filter drop-shadow-[0_0_12px_rgba(212,175,55,0.45)]">
            <defs>
              <linearGradient id="luxGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fff8b5" />
                <stop offset="30%" stop-color="#f5d061" />
                <stop offset="70%" stop-color="#d4af37" />
                <stop offset="100%" stop-color="#7a5808" />
              </linearGradient>
              <radialGradient id="luxCenterAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#fde047" stop-opacity="0.4" />
                <stop offset="60%" stop-color="#d4af37" stop-opacity="0.12" />
                <stop offset="100%" stop-color="#030712" stop-opacity="0" />
              </radialGradient>
            </defs>
            
            <!-- Central Golden Core Light -->
            <circle cx="60" cy="60" r="54" fill="url(#luxCenterAura)" />
            
            <!-- Gyroscopic Outer Dashed Orbital Ring (Clockwise) -->
            <circle cx="60" cy="60" r="53" stroke="url(#luxGoldGrad)" stroke-width="1.8" fill="none" stroke-dasharray="14 10 4 10" class="logo-orbit-ring" />
            
            <!-- Satellite Orbiting Particles -->
            <g class="logo-orbit-ring">
              <circle cx="60" cy="7" r="2.8" fill="#ffffff" filter="drop-shadow(0 0 6px #fde047)" />
              <circle cx="113" cy="60" r="2" fill="#fde047" />
              <circle cx="7" cy="60" r="2" fill="#d4af37" />
            </g>

            <!-- Counter-Rotating Inner Astral Ring (Anti-Clockwise) -->
            <circle cx="60" cy="60" r="45" stroke="#facc15" stroke-width="1.2" stroke-opacity="0.8" fill="none" stroke-dasharray="5 7 2 7" class="logo-counter-ring" />

            <!-- Rotating Satellite Spark on Inner Orbit -->
            <g class="logo-counter-ring">
              <polygon points="60,15 62,19 66,20 62,21 60,25 58,21 54,20 58,19" fill="#ffffff" />
              <circle cx="60" cy="105" r="2.2" fill="#ffffff" />
            </g>

            <!-- Geometric Octagon Shield Base with Luxury Bevel -->
            <polygon points="60,19 91,34 103,64 83,95 37,95 17,64 29,34" fill="#040813" stroke="url(#luxGoldGrad)" stroke-width="2.2" />
            <polygon points="60,24 86,37 96,63 79,89 41,89 24,63 34,37" fill="#060b18" stroke="#d4af37" stroke-width="0.8" stroke-opacity="0.4" />
            
            <!-- Monogram 'S' with Continuous Live Glow -->
            <path d="M72 38 C67 31 47 30 43 38 C39 46 53 49 65 53 C78 57 82 66 78 76 C73 86 51 88 41 80" 
                  fill="none" 
                  stroke="url(#luxGoldGrad)" 
                  stroke-width="5.5" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  class="logo-monogram-glow" />
            
            <!-- Center Balances Metric -->
            <line x1="36" y1="58" x2="84" y2="58" stroke="#ffffff" stroke-width="1.6" stroke-opacity="0.75" stroke-dasharray="2 3" />
            <circle cx="60" cy="58" r="3.8" fill="#fef08a" filter="drop-shadow(0 0 5px #ffffff)" />
            <circle cx="36" cy="58" r="2.2" fill="#d4af37" />
            <circle cx="84" cy="58" r="2.2" fill="#d4af37" />
          </svg>
        </div>
        
        <!-- 2. LIVE ANIMATED BRAND NAME TYPOGRAPHY -->
        <div class="flex flex-col justify-center">
          <div class="relative inline-flex items-center">
            <span class="font-serif font-black text-2xl sm:text-3xl md:text-4xl tracking-wider brand-live-gold-shimmer select-none">
              SAJID
            </span>

            <!-- Diamond Flare Glint on 'SAJID' -->
            <div class="brand-glint-flare">
              <svg viewBox="0 0 24 24" fill="none" class="w-full h-full">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#ffffff" />
              </svg>
            </div>

            <!-- Premier Verified Insignia -->
            <span class="ml-2.5 text-[9px] uppercase px-2 py-0.5 rounded-full border border-gold-400/50 bg-gold-500/15 text-gold-200 font-extrabold tracking-widest hidden sm:inline-flex items-center gap-1">
              <i class="fa-solid fa-gem text-[8px] text-amber-300"></i> PREMIER
            </span>
          </div>

          <!-- Luminous Subtitle with Continuous Comet Underline -->
          <div class="flex flex-col">
            <span class="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-slate-300 uppercase font-sans mt-0.5 flex items-center gap-1.5 transition-colors group-hover:text-gold-200">
              <span class="text-gold-400 font-extrabold">TAX CONSULTANT</span>
              <span class="text-gold-500/70">•</span>
              <span class="text-slate-300">WEB SOLUTIONS</span>
            </span>
            <div class="brand-comet-line"></div>
          </div>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
        <a href="#services" class="hover:text-gold-400 transition-colors py-1">Tax Services</a>
        <a href="#web-solutions" class="hover:text-gold-400 transition-colors py-1 flex items-center gap-1.5">
          <span>Web Solutions</span>
          <span class="px-1.5 py-0.5 text-[9px] bg-blue-600/30 border border-blue-400/40 text-blue-300 rounded font-bold">TECH</span>
        </a>
        <a href="#working-hours" class="hover:text-gold-400 transition-colors py-1">Timings</a>
        <a href="#faq" class="hover:text-gold-400 transition-colors py-1">FAQs</a>
        <a href="#areas" class="hover:text-gold-400 transition-colors py-1">Areas Served</a>
        <a href="#calculators" class="hover:text-gold-400 transition-colors py-1">GST Tool</a>
        <a href="#office" class="hover:text-gold-400 transition-colors py-1">Contact</a>
      </nav>

      <!-- Desktop Quick Actions -->
      <div class="hidden sm:flex items-center gap-3">
        <a href="tel:+917762067143" class="px-4 py-2.5 rounded-full border border-gold-500/40 bg-gold-500/10 text-gold-300 hover:bg-gold-500/20 text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2">
          <i class="fa-solid fa-phone text-emerald-400"></i>
          <span>7762067143</span>
        </a>
        <button onclick="openAppointmentModal('General Inception')" class="luxury-btn-gold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider">
          Book Consultation
        </button>
      </div>

      <!-- Mobile Hamburger Button -->
      <button onclick="toggleMobileMenu()" class="lg:hidden w-11 h-11 rounded-xl border border-gold-500/30 flex items-center justify-center text-gold-400 focus:outline-none">
        <i class="fa-solid fa-bars text-xl" id="menuIcon"></i>
      </button>

    </div>

    <!-- Mobile Drawer Menu -->
    <div id="mobileMenu" class="hidden lg:hidden bg-deepOnyx/98 border-b border-gold-500/30 px-6 py-6 transition-all">
      <div class="flex flex-col gap-3.5 text-sm font-semibold tracking-wider uppercase text-slate-300">
        <a href="#services" onclick="toggleMobileMenu()" class="hover:text-gold-400 py-1">Tax & Compliance Services</a>
        <a href="#web-solutions" onclick="toggleMobileMenu()" class="hover:text-gold-400 py-1">Sajid Web Solutions</a>
        <a href="#working-hours" onclick="toggleMobileMenu()" class="hover:text-gold-400 py-1">Working Hours</a>
        <a href="#faq" onclick="toggleMobileMenu()" class="hover:text-gold-400 py-1">Frequently Asked Questions</a>
        <a href="#areas" onclick="toggleMobileMenu()" class="hover:text-gold-400 py-1">Areas Served</a>
        <a href="#calculators" onclick="toggleMobileMenu()" class="hover:text-gold-400 py-1">GST Calculator</a>
        <a href="#office" onclick="toggleMobileMenu()" class="hover:text-gold-400 py-1">Opera House Chamber</a>
        <div class="pt-4 flex flex-col gap-3 border-t border-gold-500/20">
          <a href="tel:+917762067143" class="w-full text-center py-3 rounded-xl border border-gold-500/40 text-gold-300 text-xs font-bold uppercase">
            <i class="fa-solid fa-phone mr-2 text-emerald-400"></i> Call: 7762067143
          </a>
          <button onclick="toggleMobileMenu(); openAppointmentModal('Mobile Booking')" class="luxury-btn-gold w-full py-3 rounded-xl text-xs font-extrabold uppercase">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <main class="relative z-10">
    <section id="home" class="relative pt-12 pb-20 md:pt-20 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-4xl mx-auto space-y-6">
        
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold-400/40 bg-gold-500/10 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.15)]">
          <i class="fa-solid fa-shield-halved text-gold-400"></i>
          <span>Premier Corporate Taxation & Bespoke Web Solutions • Opera House, Mumbai</span>
        </div>

        <h1 class="font-serif text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
          Precision Financial Governance & 
          <span class="block mt-2 brand-live-gold-shimmer">Elite Digital Engineering.</span>
        </h1>

        <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
          Spearheading seamless statutory compliance, Income Tax (ITR) filings, Auditing, GST operations, 
          and corporate registrations alongside ultra-fast digital platforms engineered by <strong>Sajid Web Solutions</strong>.
        </p>

        <!-- CTA Buttons -->
        <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a href="https://wa.me/917762067143?text=Hi%20Sajid,%20I%20am%20looking%20for%20tax%20and%20business%20consultancy." target="_blank" class="luxury-btn-gold px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-wider inline-flex items-center gap-3">
            <i class="fa-brands fa-whatsapp text-lg"></i>
            <span>WhatsApp Sajid Directly</span>
          </a>
          <a href="tel:+917762067143" class="px-8 py-4 rounded-full border border-gold-500/50 bg-royalMidnight/80 hover:bg-gold-500/15 text-gold-300 text-sm font-bold uppercase tracking-wider inline-flex items-center gap-3 transiti

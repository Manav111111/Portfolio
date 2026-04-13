export default function SkillsOrbit(): React.JSX.Element {
  return (
    <div className="w-full relative overflow-hidden mx-auto max-w-5xl" style={{ marginTop: "-40px" }}>
      <svg viewBox="0 0 1100 820" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stopColor="#8B3FD9" stopOpacity="1"/>
    <stop offset="55%" stopColor="#5B1FA8" stopOpacity="0.9"/>
    <stop offset="100%" stopColor="#2A0060" stopOpacity="0.7"/>
  </radialGradient>
  <radialGradient id="floorGlow" cx="50%" cy="30%" r="70%">
    <stop offset="0%" stopColor="#6B21E8" stopOpacity="0.55"/>
    <stop offset="100%" stopColor="#000010" stopOpacity="0"/>
  </radialGradient>
  <radialGradient id="bgPurple" cx="50%" cy="60%" r="45%">
    <stop offset="0%" stopColor="#3B0080" stopOpacity="0.45"/>
    <stop offset="100%" stopColor="#000010" stopOpacity="0"/>
  </radialGradient>
  <clipPath id="circleClip">
    <circle cx="0" cy="0" r="28"/>
  </clipPath>
</defs>

{/*  Background glow  */}
<ellipse cx="550" cy="540" rx="420" ry="200" fill="url(#bgPurple)"/>

{/*  ═══════════════════════════════════════════════
     ORBITAL RINGS (ellipses centered on orb)
════════════════════════════════════════════════  */}
<ellipse cx="550" cy="545" rx="490" ry="95" fill="none" stroke="#6B21E8" strokeWidth="0.9" opacity="0.5"/>
<ellipse cx="550" cy="545" rx="390" ry="75" fill="none" stroke="#7C3AED" strokeWidth="0.7" opacity="0.38"/>
<ellipse cx="550" cy="545" rx="290" ry="55" fill="none" stroke="#9D4EDD" strokeWidth="0.6" opacity="0.28"/>

{/*  Floor glow  */}
<ellipse cx="550" cy="590" rx="340" ry="60" fill="url(#floorGlow)"/>

{/*  ═══════════════════════════════════════════════
     ORBITAL FLOATING ICONS (sides)
════════════════════════════════════════════════  */}
{/*  Left side orbiting icons  */}
<g transform="translate(68,490)">
  <circle r="19" fill="#110828" stroke="#6B21E8" strokeWidth="1" opacity="0.9"/>
  {/*  LinkedIn  */}
  <rect x="-10" y="-10" width="20" height="20" rx="3" fill="#0077B5"/>
  <text x="0" y="5" textAnchor="middle" fontSize="9" fontWeight="900" fill="white" fontFamily="system-ui">in</text>
</g>
<g transform="translate(100,555)">
  <circle r="17" fill="#110828" stroke="#6B21E8" strokeWidth="1" opacity="0.8"/>
  {/*  G  */}
  <text x="0" y="5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#EA4335" fontFamily="system-ui">G</text>
</g>
<g transform="translate(130,625)">
  <circle r="15" fill="#110828" stroke="#6B21E8" strokeWidth="0.8" opacity="0.7"/>
  <text x="0" y="5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#9D7AFA" fontFamily="system-ui">✦</text>
</g>
<g transform="translate(178,490)">
  <circle r="14" fill="#110828" stroke="#6B21E8" strokeWidth="0.8" opacity="0.6"/>
  <text x="0" y="4" textAnchor="middle" fontSize="8" fontWeight="700" fill="#aaa" fontFamily="system-ui">Ai</text>
</g>

{/*  Right side orbiting icons  */}
<g transform="translate(1032,490)">
  <circle r="19" fill="#110828" stroke="#6B21E8" strokeWidth="1" opacity="0.9"/>
  {/*  JS  */}
  <rect x="-10" y="-10" width="20" height="20" rx="2" fill="#F7DF1E"/>
  <text x="0" y="5" textAnchor="middle" fontSize="8" fontWeight="900" fill="#000" fontFamily="system-ui">JS</text>
</g>
<g transform="translate(1000,555)">
  <circle r="17" fill="#110828" stroke="#6B21E8" strokeWidth="1" opacity="0.8"/>
  {/*  XD  */}
  <rect x="-10" y="-10" width="20" height="20" rx="3" fill="#FF26BE"/>
  <text x="0" y="5" textAnchor="middle" fontSize="7" fontWeight="900" fill="white" fontFamily="system-ui">Xd</text>
</g>
<g transform="translate(970,625)">
  <circle r="15" fill="#110828" stroke="#6B21E8" strokeWidth="0.8" opacity="0.7"/>
  {/*  React atom small  */}
  <ellipse cx="0" cy="0" rx="11" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1"/>
  <ellipse cx="0" cy="0" rx="11" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60)"/>
  <ellipse cx="0" cy="0" rx="11" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120)"/>
  <circle cx="0" cy="0" r="2" fill="#61DAFB"/>
</g>
<g transform="translate(922,490)">
  <circle r="14" fill="#110828" stroke="#6B21E8" strokeWidth="0.8" opacity="0.6"/>
  <text x="0" y="5" textAnchor="middle" fontSize="8" fontWeight="700" fill="#aaa" fontFamily="system-ui">&lt;/&gt;</text>
</g>

{/*  ═══════════════════════════════════════════════
     CENTER ORB
════════════════════════════════════════════════  */}
<circle cx="550" cy="490" r="130" fill="#2A0060" opacity="0.5"/>
<circle cx="550" cy="490" r="95" fill="url(#orbGlow)"/>
<circle cx="550" cy="490" r="85" fill="#1E0050" opacity="0.6"/>
{/*  Hourglass symbol  */}
<line x1="522" y1="465" x2="578" y2="465" stroke="white" strokeWidth="4" strokeLinecap="round"/>
<line x1="522" y1="515" x2="578" y2="515" stroke="white" strokeWidth="4" strokeLinecap="round"/>
<path d="M522 465 L578 515" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
<path d="M578 465 L522 515" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>

{/*  ═══════════════════════════════════════════════
     CONVERGENCE LINES — ROW 1 (Web Dev)
════════════════════════════════════════════════  */}
<line x1="100" y1="95" x2="550" y2="460" stroke="#7C3AED" strokeWidth="0.9" opacity="0.5"/>
<line x1="210" y1="95" x2="550" y2="460" stroke="#7C3AED" strokeWidth="0.9" opacity="0.5"/>
<line x1="320" y1="95" x2="550" y2="460" stroke="#7C3AED" strokeWidth="0.9" opacity="0.5"/>
<line x1="430" y1="95" x2="550" y2="460" stroke="#7C3AED" strokeWidth="0.9" opacity="0.5"/>
<line x1="550" y1="95" x2="550" y2="460" stroke="#7C3AED" strokeWidth="0.9" opacity="0.5"/>
<line x1="660" y1="95" x2="550" y2="460" stroke="#7C3AED" strokeWidth="0.9" opacity="0.5"/>
<line x1="770" y1="95" x2="550" y2="460" stroke="#7C3AED" strokeWidth="0.9" opacity="0.5"/>
<line x1="880" y1="95" x2="550" y2="460" stroke="#7C3AED" strokeWidth="0.9" opacity="0.5"/>
<line x1="990" y1="95" x2="550" y2="460" stroke="#7C3AED" strokeWidth="0.9" opacity="0.5"/>

{/*  ═══════════════════════════════════════════════
     CONVERGENCE LINES — ROW 2 (Mobile)
════════════════════════════════════════════════  */}
<line x1="165" y1="205" x2="550" y2="460" stroke="#9D4EDD" strokeWidth="0.7" opacity="0.4"/>
<line x1="295" y1="205" x2="550" y2="460" stroke="#9D4EDD" strokeWidth="0.7" opacity="0.4"/>
<line x1="425" y1="205" x2="550" y2="460" stroke="#9D4EDD" strokeWidth="0.7" opacity="0.4"/>
<line x1="550" y1="205" x2="550" y2="460" stroke="#9D4EDD" strokeWidth="0.7" opacity="0.4"/>
<line x1="675" y1="205" x2="550" y2="460" stroke="#9D4EDD" strokeWidth="0.7" opacity="0.4"/>
<line x1="805" y1="205" x2="550" y2="460" stroke="#9D4EDD" strokeWidth="0.7" opacity="0.4"/>
<line x1="935" y1="205" x2="550" y2="460" stroke="#9D4EDD" strokeWidth="0.7" opacity="0.4"/>

{/*  ═══════════════════════════════════════════════
     CONVERGENCE LINES — ROW 3 (AI/ML)
════════════════════════════════════════════════  */}
<line x1="215" y1="315" x2="550" y2="460" stroke="#B87BE8" strokeWidth="0.6" opacity="0.35"/>
<line x1="325" y1="315" x2="550" y2="460" stroke="#B87BE8" strokeWidth="0.6" opacity="0.35"/>
<line x1="435" y1="315" x2="550" y2="460" stroke="#B87BE8" strokeWidth="0.6" opacity="0.35"/>
<line x1="550" y1="315" x2="550" y2="460" stroke="#B87BE8" strokeWidth="0.6" opacity="0.35"/>
<line x1="665" y1="315" x2="550" y2="460" stroke="#B87BE8" strokeWidth="0.6" opacity="0.35"/>
<line x1="775" y1="315" x2="550" y2="460" stroke="#B87BE8" strokeWidth="0.6" opacity="0.35"/>
<line x1="885" y1="315" x2="550" y2="460" stroke="#B87BE8" strokeWidth="0.6" opacity="0.35"/>

{/*  ══════════════════════════════════════════════════
     ROW 1 — WEB DEV (y=95, 9 icons spaced 110px)
     x: 100 210 320 430 550 660 770 880 990
═══════════════════════════════════════════════════  */}

{/*  Next.js @ 100  */}
<g transform="translate(100,95)">
  <circle r="32" fill="#000" stroke="#444" strokeWidth="1.5"/>
  <text x="0" y="-4" textAnchor="middle" fontSize="12" fontWeight="900" fill="white" fontFamily="system-ui">next</text>
  <text x="0" y="11" textAnchor="middle" fontSize="10" fontWeight="400" fill="#888" fontFamily="system-ui">.js</text>
  <text x="0" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#aaa" fontFamily="system-ui">Next.js</text>
</g>

{/*  React @ 210  */}
<g transform="translate(210,95)">
  <circle r="32" fill="#0A1929" stroke="#61DAFB" strokeWidth="1.5"/>
  <ellipse cx="0" cy="0" rx="27" ry="10" fill="none" stroke="#61DAFB" strokeWidth="2"/>
  <ellipse cx="0" cy="0" rx="27" ry="10" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60)"/>
  <ellipse cx="0" cy="0" rx="27" ry="10" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120)"/>
  <circle cx="0" cy="0" r="4.5" fill="#61DAFB"/>
  <text x="0" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#61DAFB" fontFamily="system-ui">React</text>
</g>

{/*  Node.js @ 320  */}
<g transform="translate(320,95)">
  <circle r="32" fill="#0B1F0B" stroke="#3C873A" strokeWidth="1.5"/>
  <path d="M0 -18 L16 -9 L16 9 L0 18 L-16 9 L-16 -9 Z" fill="#3C873A" stroke="#539E43" strokeWidth="1"/>
  <text x="0" y="5" textAnchor="middle" fontSize="10" fontWeight="800" fill="white" fontFamily="system-ui">Node</text>
  <text x="0" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#3C873A" fontFamily="system-ui">Node.js</text>
</g>

{/*  Express @ 430  */}
<g transform="translate(430,95)">
  <circle r="32" fill="#1a1a1a" stroke="#666" strokeWidth="1.5"/>
  <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="system-ui">expr</text>
  <text x="0" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#aaa" fontFamily="system-ui">Express</text>
</g>

{/*  TypeScript @ 550  */}
<g transform="translate(550,95)">
  <circle r="32" fill="#07345F" stroke="#3178C6" strokeWidth="1.5"/>
  <rect x="-22" y="-22" width="44" height="44" rx="5" fill="#3178C6"/>
  <text x="0" y="8" textAnchor="middle" fontSize="20" fontWeight="900" fill="white" fontFamily="system-ui">TS</text>
  <text x="0" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#3178C6" fontFamily="system-ui">TypeScript</text>
</g>

{/*  MongoDB @ 660  */}
<g transform="translate(660,95)">
  <circle r="32" fill="#001512" stroke="#00ED64" strokeWidth="1.5"/>
  <path d="M0 -22 C0 -22 14 -8 14 4 C14 16 8 24 0 26 C-8 24 -14 16 -14 4 C-14 -8 0 -22 0 -22Z" fill="#00ED64"/>
  <path d="M0 -22 C0 -22 5 -8 5 4 C5 16 3 22 0 26" fill="#1DB954" opacity="0.5"/>
  <line x1="0" y1="20" x2="0" y2="27" stroke="#00ED64" strokeWidth="2.5" strokeLinecap="round"/>
  <text x="0" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#00ED64" fontFamily="system-ui">MongoDB</text>
</g>

{/*  AWS @ 770  */}
<g transform="translate(770,95)">
  <circle r="32" fill="#1A0C00" stroke="#FF9900" strokeWidth="1.5"/>
  <text x="0" y="3" textAnchor="middle" fontSize="16" fontWeight="900" fill="#FF9900" fontFamily="system-ui">AWS</text>
  <path d="M-16 14 Q0 22 16 14" fill="none" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round"/>
  <path d="M14 11 L16 14 L13 15" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <text x="0" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#FF9900" fontFamily="system-ui">AWS</text>
</g>

{/*  Vercel @ 880  */}
<g transform="translate(880,95)">
  <circle r="32" fill="#111" stroke="#ffffff33" strokeWidth="1.5"/>
  <polygon points="0,-20 22,16 -22,16" fill="white"/>
  <text x="0" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff" fontFamily="system-ui">Vercel</text>
</g>

{/*  GitHub @ 990  */}
<g transform="translate(990,95)">
  <circle r="32" fill="#0D1117" stroke="#555" strokeWidth="1.5"/>
  <path d="M0 -20 C-12 -20 -22 -10 -22 3 C-22 13 -16 22 -7 25 C-6 25.3 -5.5 24.5 -5.5 23.8 C-5.5 23.2 -5.5 21.2 -5.5 19 C-13 20.5 -14.5 15 -14.5 15 C-15.7 11.8 -17.5 11 -17.5 11 C-20 9.4 -17.3 9.4 -17.3 9.4 C-14.5 9.6 -13 12.2 -13 12.2 C-10.4 16.7 -6 15.4 -4.8 14.6 C-4.5 12.8 -3.8 11.6 -3 11 C-8.7 10.3 -14.5 8.1 -14.5 -1.2 C-14.5 -4.2 -13.4 -6.6 -11.6 -8.5 C-11.9 -9.3 -12.9 -12 -11.3 -16 C-11.3 -16 -9 -16.8 -5.5 -14.5 C-3.4 -15.1 -1.2 -15.4 1 -15.4 C3.2 -15.4 5.4 -15.1 7.5 -14.5 C11 -16.8 13.3 -16 13.3 -16 C14.9 -12 13.9 -9.3 13.6 -8.5 C15.4 -6.6 16.5 -4.2 16.5 -1.2 C16.5 8.2 10.7 10.3 5 11 C6 12 6.9 13.9 6.9 16.8 C6.9 21 6.9 24.4 6.9 23.8 C6.9 24.5 7.4 25.3 8.4 25 C17.4 22 23.5 13 23.5 3 C23.5 -10 13.5 -20 0 -20Z" fill="white"/>
  <text x="0" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#ccc" fontFamily="system-ui">GitHub</text>
</g>

{/*  ══════════════════════════════════════════════════
     ROW 2 — MOBILE (y=205, 7 icons)
     x: 165 295 425 550 675 805 935
═══════════════════════════════════════════════════  */}

{/*  React Native @ 165  */}
<g transform="translate(165,205)">
  <circle r="29" fill="#0A1929" stroke="#61DAFB" strokeWidth="1.5"/>
  <ellipse cx="0" cy="0" rx="24" ry="9" fill="none" stroke="#61DAFB" strokeWidth="2"/>
  <ellipse cx="0" cy="0" rx="24" ry="9" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60)"/>
  <ellipse cx="0" cy="0" rx="24" ry="9" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120)"/>
  <circle cx="0" cy="0" r="4" fill="#61DAFB"/>
  <text x="0" y="46" textAnchor="middle" fontSize="9" fontWeight="600" fill="#61DAFB" fontFamily="system-ui">React Native</text>
</g>

{/*  Expo @ 295  */}
<g transform="translate(295,205)">
  <circle r="29" fill="#111" stroke="#fff" strokeWidth="1.5"/>
  <path d="M-18 14 Q0 -20 18 14" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"/>
  <path d="M-9 14 Q0 -4 9 14" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"/>
  <text x="0" y="46" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff" fontFamily="system-ui">Expo</text>
</g>

{/*  Firebase @ 425  */}
<g transform="translate(425,205)">
  <circle r="29" fill="#1A0D00" stroke="#FFCA28" strokeWidth="1.5"/>
  <path d="M-14 18 L-2 -14 L5 0 Z" fill="#FFA000"/>
  <path d="M5 0 L10 -22 L20 18 Z" fill="#F57C00"/>
  <path d="M-14 18 L20 18 L10 -22 L5 0 L-2 -14 Z" fill="#FFCA28" opacity="0.9"/>
  <path d="M-14 18 L20 18 L5 0 L-2 -14 Z" fill="#FFA000" opacity="0.45"/>
  <text x="0" y="46" textAnchor="middle" fontSize="10" fontWeight="600" fill="#FFCA28" fontFamily="system-ui">Firebase</text>
</g>

{/*  Supabase @ 550  */}
<g transform="translate(550,205)">
  <circle r="29" fill="#001811" stroke="#3ECF8E" strokeWidth="1.5"/>
  <path d="M4 -22 L4 8 L20 -12 Z" fill="#3ECF8E"/>
  <path d="M-4 22 L-4 -8 L-20 12 Z" fill="#3ECF8E" opacity="0.6"/>
  <text x="0" y="46" textAnchor="middle" fontSize="10" fontWeight="600" fill="#3ECF8E" fontFamily="system-ui">Supabase</text>
</g>

{/*  Android @ 675  */}
<g transform="translate(675,205)">
  <circle r="29" fill="#001A12" stroke="#3DDC84" strokeWidth="1.5"/>
  <circle cx="0" cy="-2" r="12" fill="none" stroke="#3DDC84" strokeWidth="2.5"/>
  <line x1="-14" y1="-10" x2="-20" y2="-18" stroke="#3DDC84" strokeWidth="2.5" strokeLinecap="round"/>
  <line x1="14" y1="-10" x2="20" y2="-18" stroke="#3DDC84" strokeWidth="2.5" strokeLinecap="round"/>
  <rect x="-8" y="10" width="5" height="11" rx="2.5" fill="#3DDC84"/>
  <rect x="3" y="10" width="5" height="11" rx="2.5" fill="#3DDC84"/>
  <circle cx="-5" cy="-2" r="2" fill="#001A12"/>
  <circle cx="5" cy="-2" r="2" fill="#001A12"/>
  <text x="0" y="46" textAnchor="middle" fontSize="10" fontWeight="600" fill="#3DDC84" fontFamily="system-ui">Android</text>
</g>

{/*  App Store @ 805  */}
<g transform="translate(805,205)">
  <circle r="29" fill="#001030" stroke="#0A84FF" strokeWidth="1.5"/>
  <rect x="-20" y="-20" width="40" height="40" rx="9" fill="#0A84FF"/>
  <path d="M0 -12 C0 -12 -10 4 -14 12 L-6 12 L0 2 L6 12 L14 12 C10 4 0 -12 0 -12Z" fill="white"/>
  <line x1="-16" y1="12" x2="16" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  <text x="0" y="46" textAnchor="middle" fontSize="10" fontWeight="600" fill="#0A84FF" fontFamily="system-ui">App Store</text>
</g>

{/*  Git @ 935  */}
<g transform="translate(935,205)">
  <circle r="29" fill="#1A0800" stroke="#F05120" strokeWidth="1.5"/>
  <path d="M18 -1.4 L2.4 -17 C1.5 -17.9 0 -17.9 -0.9 -17 L-4.7 -13.2 L0.3 -8.2 C1.5 -8.6 2.9 -8.3 3.9 -7.3 C4.9 -6.3 5.2 -4.9 4.8 -3.7 L9.6 1.1 C10.8 0.7 12.2 1 13.2 2 C14.6 3.4 14.6 5.7 13.2 7.1 C11.8 8.5 9.5 8.5 8.1 7.1 C7 6 6.8 4.4 7.3 3.1 L2.8 -1.4 L2.8 9.3 C3.1 9.4 3.4 9.6 3.7 9.9 C5.1 11.3 5.1 13.6 3.7 15 C2.3 16.4 0 16.4 -1.4 15 C-2.8 13.6 -2.8 11.3 -1.4 9.9 C-1 9.5 -0.6 9.3 -0.1 9.1 L-0.1 -1.5 C-0.6 -1.7 -1 -2 -1.4 -2.4 C-2.5 -3.5 -2.8 -5.1 -2.2 -6.4 L-7 -11.2 L-18 -0.1 C-18.9 0.8 -18.9 2.3 -18 3.2 L-2.4 18.8 C-1.5 19.7 0 19.7 0.9 18.8 L18 1.7 C18.9 0.8 18.9 -0.5 18 -1.4Z" fill="#F05120"/>
  <text x="0" y="46" textAnchor="middle" fontSize="10" fontWeight="600" fill="#F05120" fontFamily="system-ui">Git</text>
</g>

{/*  ══════════════════════════════════════════════════
     ROW 3 — AI/ML (y=315, 7 icons)
     x: 215 325 435 550 665 775 885
═══════════════════════════════════════════════════  */}

{/*  Python @ 215  */}
<g transform="translate(215,315)">
  <circle r="27" fill="#0A1929" stroke="#3776AB" strokeWidth="1.5"/>
  <path d="M0 -18 C-8 -18 -13 -14 -13 -8 L-13 -2 L1 -2 L1 2 L-15 2 C-20 2 -22 6 -22 10 C-22 18 -18 22 -13 22 L-8 22 L-8 18 C-8 14 -5 12 0 12 L12 12 C17 12 18 9 18 4 L18 -6 C18 -13 14 -18 0 -18Z" fill="#3776AB"/>
  <path d="M0 18 C8 18 13 14 13 8 L13 2 L-1 2 L-1 -2 L15 -2 C20 -2 22 -6 22 -10 C22 -18 18 -22 13 -22 L8 -22 L8 -18 C8 -14 5 -12 0 -12 L-12 -12 C-17 -12 -18 -9 -18 -4 L-18 6 C-18 13 -14 18 0 18Z" fill="#FFD43B"/>
  <circle cx="-6" cy="-8" r="2.5" fill="#FFD43B"/>
  <circle cx="6" cy="8" r="2.5" fill="#3776AB"/>
  <text x="0" y="44" textAnchor="middle" fontSize="10" fontWeight="600" fill="#FFD43B" fontFamily="system-ui">Python</text>
</g>

{/*  Scikit-learn @ 325  */}
<g transform="translate(325,315)">
  <circle r="27" fill="#001020" stroke="#F89939" strokeWidth="1.5"/>
  <path d="M0 -18 C-10 -18 -18 -10 -18 0 C-18 10 -10 18 0 18 C10 18 18 10 18 0 C18 -10 10 -18 0 -18Z" fill="none" stroke="#F89939" strokeWidth="2"/>
  <path d="M-18 0 C-18 -8 -10 -18 0 -18" stroke="#3399CC" strokeWidth="5" strokeLinecap="round"/>
  <path d="M0 -18 C10 -18 18 -10 18 0" stroke="#F89939" strokeWidth="5" strokeLinecap="round"/>
  <path d="M18 0 C18 10 10 18 0 18" stroke="#3399CC" strokeWidth="5" strokeLinecap="round"/>
  <path d="M0 18 C-10 18 -18 10 -18 0" stroke="#F89939" strokeWidth="5" strokeLinecap="round"/>
  <circle cx="0" cy="0" r="6" fill="#3399CC"/>
  <text x="0" y="5" textAnchor="middle" fontSize="6" fontWeight="900" fill="white" fontFamily="system-ui">sk</text>
  <text x="0" y="44" textAnchor="middle" fontSize="9" fontWeight="600" fill="#F89939" fontFamily="system-ui">Scikit-learn</text>
</g>

{/*  LangChain @ 435  */}
<g transform="translate(435,315)">
  <circle r="27" fill="#0A1A00" stroke="#1DB954" strokeWidth="1.5"/>
  <circle cx="-9" cy="0" r="8" fill="none" stroke="#1DB954" strokeWidth="2.5"/>
  <circle cx="9" cy="0" r="8" fill="none" stroke="#1DB954" strokeWidth="2.5"/>
  <line x1="-1" y1="0" x2="1" y2="0" stroke="#1DB954" strokeWidth="2.5"/>
  <circle cx="-9" cy="0" r="3" fill="#1DB954"/>
  <circle cx="9" cy="0" r="3" fill="#1DB954"/>
  <text x="0" y="44" textAnchor="middle" fontSize="9" fontWeight="600" fill="#1DB954" fontFamily="system-ui">LangChain</text>
</g>

{/*  Hugging Face @ 550  */}
<g transform="translate(550,315)">
  <circle r="27" fill="#1A1200" stroke="#FFD700" strokeWidth="1.5"/>
  <circle cx="0" cy="-2" r="19" fill="#FFD700"/>
  <circle cx="-7" cy="-7" r="3.5" fill="#1a1200"/>
  <circle cx="7" cy="-7" r="3.5" fill="#1a1200"/>
  <circle cx="-6" cy="-8" r="1.2" fill="white"/>
  <circle cx="8" cy="-8" r="1.2" fill="white"/>
  <path d="M-8 4 Q0 12 8 4" fill="none" stroke="#1a1200" strokeWidth="2.2" strokeLinecap="round"/>
  <ellipse cx="-19" cy="-4" rx="4" ry="6" fill="#FFD700" stroke="#E6C200" strokeWidth="1"/>
  <ellipse cx="19" cy="-4" rx="4" ry="6" fill="#FFD700" stroke="#E6C200" strokeWidth="1"/>
  <text x="0" y="44" textAnchor="middle" fontSize="9" fontWeight="600" fill="#FFD700" fontFamily="system-ui">Hugging Face</text>
</g>

{/*  OpenAI @ 665  */}
<g transform="translate(665,315)">
  <circle r="27" fill="#111" stroke="#19C37D" strokeWidth="1.5"/>
  <path d="M0 -20 C-8 -20 -15 -14 -15 -6 C-18 -4 -20 0 -20 4 C-20 12 -14 18 -6 18 C-6 20 -3 22 0 22 C3 22 6 20 6 18 C14 18 20 12 20 4 C20 0 18 -4 15 -6 C15 -14 8 -20 0 -20Z" fill="none" stroke="#19C37D" strokeWidth="2"/>
  <line x1="0" y1="-12" x2="0" y2="12" stroke="#19C37D" strokeWidth="1.5" opacity="0.5"/>
  <line x1="-10" y1="-6" x2="10" y2="6" stroke="#19C37D" strokeWidth="1.5" opacity="0.5"/>
  <line x1="10" y1="-6" x2="-10" y2="6" stroke="#19C37D" strokeWidth="1.5" opacity="0.5"/>
  <circle cx="0" cy="0" r="5" fill="#19C37D"/>
  <text x="0" y="44" textAnchor="middle" fontSize="10" fontWeight="600" fill="#19C37D" fontFamily="system-ui">OpenAI</text>
</g>

{/*  Jupyter @ 775  */}
<g transform="translate(775,315)">
  <circle r="27" fill="#1A0E00" stroke="#F37626" strokeWidth="1.5"/>
  <circle cx="0" cy="6" r="16" fill="none" stroke="#F37626" strokeWidth="2.5"/>
  <ellipse cx="0" cy="6" rx="16" ry="7" fill="none" stroke="#F37626" strokeWidth="1.2" opacity="0.5"/>
  <circle cx="-11" cy="-14" r="3.5" fill="#F37626"/>
  <circle cx="0" cy="-18" r="4" fill="#888"/>
  <circle cx="11" cy="-14" r="3.5" fill="#F37626"/>
  <text x="0" y="44" textAnchor="middle" fontSize="10" fontWeight="600" fill="#F37626" fontFamily="system-ui">Jupyter</text>
</g>

{/*  RAG Systems @ 885  */}
<g transform="translate(885,315)">
  <circle r="27" fill="#0A001A" stroke="#9B59B6" strokeWidth="1.5"/>
  <rect x="-18" y="-18" width="14" height="10" rx="2" fill="#9B59B6"/>
  <rect x="4" y="-18" width="14" height="10" rx="2" fill="#9B59B6"/>
  <rect x="-18" y="8" width="14" height="10" rx="2" fill="#6C3483"/>
  <rect x="4" y="8" width="14" height="10" rx="2" fill="#6C3483"/>
  <circle cx="0" cy="-1" r="6" fill="#D8A8F0" stroke="#9B59B6" strokeWidth="1"/>
  <text x="0" y="3" textAnchor="middle" fontSize="5" fontWeight="900" fill="white" fontFamily="system-ui">RAG</text>
  <text x="0" y="44" textAnchor="middle" fontSize="9" fontWeight="600" fill="#D8A8F0" fontFamily="system-ui">RAG Systems</text>
</g>

{/*  Row section labels  */}
<text x="550" y="18" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7C3AED" fontFamily="system-ui" letterSpacing="3">WEB DEVELOPMENT</text>
<text x="550" y="140" textAnchor="middle" fontSize="9" fontWeight="700" fill="#9D4EDD" fontFamily="system-ui" letterSpacing="3">MOBILE APP DEVELOPMENT</text>
<text x="550" y="248" textAnchor="middle" fontSize="9" fontWeight="700" fill="#B87BE8" fontFamily="system-ui" letterSpacing="3">AI / ML</text>

</svg>
    </div>
  );
}
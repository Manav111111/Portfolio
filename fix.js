const fs = require('fs');
let code = fs.readFileSync('d:\\c drive\\OneDrive\\Desktop\\portfolio3\\Figma_Portfolio\\app\\components\\SkillsOrbit.tsx', 'utf8');

// Replace HTML comments with JSX comments
code = code.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Replace hourglass with MG
const hourglassPattern = /{?\/\* Hourglass symbol \*\/}?\n?\s*<line x1="522" y1="465"[\s\S]*?<path d="M578 465 L522 515" stroke="white" strokeWidth="3.5" strokeLinecap="round"\/>/g;
const replacement = '{/* Center "MG" Logo */}\n      <text x="550" y="493" textAnchor="middle" dominantBaseline="middle" fontSize="56" fontWeight="800" fill="white" fontFamily="var(--font-poppins), sans-serif" letterSpacing="0.05em">\n        MG\n      </text>';
code = code.replace(hourglassPattern, replacement);

fs.writeFileSync('d:\\c drive\\OneDrive\\Desktop\\portfolio3\\Figma_Portfolio\\app\\components\\SkillsOrbit.tsx', code);
console.log('Fixed JSX comments and MG icon');

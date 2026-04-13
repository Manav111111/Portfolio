const fs = require('fs');

try {
  let html = fs.readFileSync('d:\\Download\\tech_stack_orbital_v3.html', 'utf8');

  // extract svg content
  const svgMatch = html.match(/<svg[\s\S]*?<\/svg>/i);
  if (!svgMatch) {
    console.log('No SVG found');
    process.exit(1);
  }
  let svg = svgMatch[0];

  // Handle JSX conversions
  svg = svg.replace(/class=/g, 'className=');
  svg = svg.replace(/stop-color=/g, 'stopColor=');
  svg = svg.replace(/stop-opacity=/g, 'stopOpacity=');
  svg = svg.replace(/clip-path=/g, 'clipPath=');
  svg = svg.replace(/stroke-width=/g, 'strokeWidth=');
  svg = svg.replace(/stroke-linecap=/g, 'strokeLinecap=');
  svg = svg.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  svg = svg.replace(/font-size=/g, 'fontSize=');
  svg = svg.replace(/font-weight=/g, 'fontWeight=');
  svg = svg.replace(/font-family=/g, 'fontFamily=');
  svg = svg.replace(/text-anchor=/g, 'textAnchor=');
  svg = svg.replace(/letter-spacing=/g, 'letterSpacing=');

  const output = `export default function SkillsOrbit(): React.JSX.Element {
  return (
    <div className="w-full relative overflow-hidden mx-auto max-w-5xl" style={{ marginTop: "-40px" }}>
      ${svg}
    </div>
  );
}`;

  fs.writeFileSync('d:\\c drive\\OneDrive\\Desktop\\portfolio3\\Figma_Portfolio\\app\\components\\SkillsOrbit.tsx', output);
  console.log('Done converting and writing to SkillsOrbit.tsx');
} catch (e) {
  console.error(e);
}

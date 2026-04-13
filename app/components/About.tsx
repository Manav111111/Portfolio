import SkillsOrbit from "./SkillsOrbit";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <h2 className="section-heading text-white">About Me</h2>
          </div>
        </div>
        <div className="text-center mb-16">
          <p className="about-text">
            I&apos;m a passionate <span className="about-highlight">Full Stack Developer</span> who loves
            building intelligent, scalable applications. From crafting beautiful web interfaces to
            developing mobile apps and integrating <span className="about-highlight">AI models</span>,
            I bring ideas to life with clean code and modern design.
          </p>
          <p className="about-text mt-6">
            Currently freelancing and building <span className="about-highlight">AI-powered applications</span> that
            solve real-world problems. Always exploring the intersection of technology and creativity.
          </p>
        </div>
        
        {/* Skills Section */}
        <div className="mt-24 flex justify-center mb-10">
          <h2 className="section-heading text-white">Skills &amp; Technologies</h2>
        </div>
        <p className="section-subheading mb-10">
          Technologies I work with across web, mobile, and AI development.
        </p>
        <div className="flex justify-center w-full">
          <SkillsOrbit />
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Children } from "react";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "WebGL",
  "Three.js",
  "Tailwind CSS",
  "Bootstrap",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Vercel",
  "Canva",
  "Figma",
  "Git",
  "GitHub",
  "GitHub Actions",
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Background Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5  h-1.5 rounded-full opacity-50"
            style={{
              backgroundColor: "#b0a6dd",
              left: `${Math.random() * 100}%`, //eslint-disable-line
              top: `${Math.random() * 100}%`, //eslint-disable-line
              animation: `slow-drift ${15 + Math.random() * 20} ease-in-out infinite`, //eslint-disable-line
              animationDelay: `${Math.random() * 5}s`, //eslint-disable-line
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Tags */}
            <div className="animate-fade-in animation-delay-100">
              <span className="inline-flex items-center gap-2 px-2 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Frontend Developer • React | Next.js
              </span>
            </div>

            {/* Headline */}
            <div>
              {/* Slogan */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with <br />
                <span className="font-serif italic font-normal text-white">
                  innovation.
                </span>
              </h1>
              {/* Sub-headline Text */}
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Crafting seamless digital experience that turn concepts into
                cutting-edge interfaces. Every click, scroll, and interaction is
                designed with precision and innovation in mind.
              </p>
            </div>

            {/* CTA & Download */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              {/* CTA */}
              <Button size="lg">
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              {/* Download Button */}
              <a
                href="/cv/Isu_Chukwunnoso_Solomon_Frontend_Developer_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>Download CV</AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/solodevx" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/chukwunnoso-isu/",
                },
                { icon: Twitter, href: "https://twitter.com/solodevx" },
              ].map((social, idx) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Solomon Isu"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

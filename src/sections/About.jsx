import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Crafting maintainable, scalable code designed to last.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing every detail for speed, delivering lightning-fast experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Partnering with teams to turn ideas into polished, functional products.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Leveraging the latest technologies to create forward-thinking solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Design, Code, Transform
              <span className="font-serif italic font-normal text-white">
                {" "}
                - one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate software engineer with over 4 years of
                experience crafting digital products that make a real
                difference. My journey began with a curiosity for how things
                work on the web, and it has grown into deep expertise in modern
                frontend technologies. Over the years, I’ve delivered 10+
                projects for clients worldwide, turning ideas into intuitive and
                high-performing web experiences.
              </p>
              <p>
                I specialize in React, Next.js, and TypeScript, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience, ensuring that every
                interface I create is not only functional but also engaging. You
                can explore some of my work on{" "}
                <a
                  href="https://github.com/solodevx?tab=repositories"
                  className="text-primary underline italic hover:text-primary/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  GitHub
                </a>
                .
              </p>
              <p>
                Beyond coding, I’m constantly exploring new technologies,
                contributing to open-source projects, and sharing knowledge with
                the developer community. Learning and growing in public keeps me
                sharp, inspired, and connected to the latest trends in frontend
                development.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to craft web experiences that are seamless, powerful, and genuinely delightful — tools people love to use and engineers take pride in maintaining."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

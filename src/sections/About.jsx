import SectionTitle from "@/components/SectionTitle";
import { User } from "lucide-react";

const skills = [
  "JavaScript",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "HTML",
  "CSS",
  "Git",
  "C#",
  "Unity",
  "MongoDB"
];

const learning = [
  "Testing (Jest / React Testing Library)",
  " PostgreSQL",
  "React Native"
];

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen border-t bg-neutral-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          icon={<User size={28} />}
          title="About"
          subtitle="A little about me, my experience, and the technologies I work with."
        />

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-neutral-400">
            <p>
              I'm a Full Stack Developer with 4+ years of JavaScript experience,
              focused on building clean, well-structured web applications with
              great user experience. My journey into tech started with a
              transition from an accounting background, which gave me a strong
              analytical mindset that I carry into every project I work on. I
              spent several years at TOTVS developing automation and integration
              solutions for enterprise platforms, where I learned how to build
              reliable systems that solve real business problems.
            </p>

            <p>
              Today I focus on modern full stack development using React and
              Node.js, working on personal projects that reflect my current
              skills. I care about writing maintainable code, thinking through
              architecture before jumping into implementation, and continuously
              improving through real projects. I'm currently expanding my
              knowledge into databases, testing, and React Native, with a
              long-term goal of working remotely with small, product-focused
              companies where I can contribute meaningfully and keep growing.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Technologies</h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-neutral-800 px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Currently Learning</h3>

              <div className="flex flex-wrap gap-3">
                {learning.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-neutral-400 border border-neutral-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

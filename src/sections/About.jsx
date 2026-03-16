import SectionTitle from "@/components/SectionTitle";
import { User } from "lucide-react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind",
  "HTML",
  "CSS",
  "Git",
  "C#",
  "Unity",
];

const learning = [
  "TypeScript",
  "Testing (Jest / React Testing Library)",
  "React Native",
  "Software Architecture",
  "Cloud (AWS / Vercel)"
];

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen border-t bg-neutral-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
      
        <SectionTitle
          icon= {<User size={28} />}
          title="About"
          subtitle="A little about me, my experience, and the technologies I work with."
        />

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          
          <div className="space-y-4 text-neutral-400">
            <p>
              I'm a JavaScript developer with professional experience building
              solutions for enterprise platforms and modern web applications.
            </p>

            <p>
              I previously worked developing automation and custom solutions
              for corporate systems, focusing on workflow automation and
              improving internal business processes.
            </p>

            <p>
              Today I focus on building modern web applications using React and
              Node.js, with an emphasis on performance, clean code, and scalable
              architecture.
            </p>

            <p>
              I'm constantly improving my skills and expanding my knowledge in
              modern technologies and best development practices.
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
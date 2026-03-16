import profile from "@/assets/profile.jpg";
import { Download, Github } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center border-t bg-neutral-900 px-6 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold md:text-5xl">Filipe Santos</h1>

          <h2 className=" text-xl text-neutral-400">
            Full Stack JavaScript Developer
          </h2>

          <p className="mt-6 text-neutral-400">
            Full stack developer specializing in React and Node.js, building
            modern, scalable web applications with clean architecture and great
            user experience.
          </p>

          <p className="mt-2 text-neutral-500 text-sm">
            São Paulo, Brazil • Available for remote work
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/FilipeSantos_CV.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-3 text-white cursor-pointer transition transform hover:scale-105 hover:bg-neutral-800 hover:shadow-lg select-none"
            >
              <Download size={20} />
              Download CV
            </a>

            <a
              href="https://github.com/dulipe"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-3 text-white cursor-pointer transition transform hover:scale-105 hover:bg-neutral-800 hover:shadow-lg select-none"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>

        <div className="pointer-events-none select-none flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="h-96 w-96 rounded-full object-cover border border-neutral-850 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

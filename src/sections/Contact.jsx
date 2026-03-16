import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-[60vh] border-t items-center justify-center bg-neutral-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold">Get In Touch</h2>

        <p className="mt-4 text-neutral-400">
          I'm always open to discussing new opportunities, collaborations, or
          interesting projects.
        </p>

        <div className="mt-8 flex justify-center gap-8 flex-wrap">
          {[
            {
              href: "mailto:filipeopc2@gmail.com?subject=Portfolio Contact&body=Hello Filipe,",
              icon: <Mail size={20} />,
              label: "Email",
            },
            {
              href: "https://github.com/dulipe",
              icon: <Github size={20} />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/filipesantosfullstack",
              icon: <Linkedin size={20} />,
              label: "LinkedIn",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-white transition transform hover:scale-105 hover:bg-neutral-800 hover:shadow-lg"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

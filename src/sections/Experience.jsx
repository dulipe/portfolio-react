import SectionTitle from "@/components/SectionTitle";
import ExperienceItem from "@/components/ExperienceItem";
import experience from "@/data/experience";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className=" border-t bg-neutral-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <SectionTitle
          icon= {<Briefcase size={28} />}
          title="Experience"
          subtitle="My professional background and work experience."
        />

        <div className="mt-12 space-y-10">
          {experience.map((job, index) => (
            <ExperienceItem key={index} job={job} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
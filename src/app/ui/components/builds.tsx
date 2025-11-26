import Image from "next/image";
import { content } from "../../../../public/content";
import { Blur } from "./blur";
import ProjectCard from "./projectcard";

export function Builds() {
  return (
    <section
      className="flex flex-col w-full items-center justify-center gap-16 container lg:py-10"
      id="builds"
    >
      <div className="relative z-10 flex flex-col  gap-5">
        <p className="text-lg capitalize lg:text-2xl  lg:font-extralight md:w-10/12 ">
          I&apos;ve crafted websites, developed services, worked with awesome
          people, built useful tools, and messed with tiny little side projects.
          <br />
          <span className="text-primary">Take a look down below.</span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Blur className="block lg:hidden" top={0} left={-300} />
    </section>
  );
}

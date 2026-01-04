import Image from "next/image";

import { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: StaticImageData;
  status?: string;
  skills?: string[];
  link?: string;
  deployLink?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className=" relative bg-neutral-900/80  rounded-xl shadow-white/10  hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Project image */}
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Project title and optional WIP badge */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          {project.status === "WIP" && (
            <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full">
              WIP
            </span>
          )}
        </div>

        {/* Project description */}
        <p className="text-sm text-neutral-400 flex-1">{project.description}</p>

        {/* Tech tags */}
        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 my-5">
            {project.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-neutral-800 text-neutral-200 text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Footer: date + link */}
        <div className=" absolute bottom-3 right-5   flex gap-5 items-center">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="text-blue-400 hover:underline text-xs"
            >
              View
            </a>
          )}
          {project.deployLink && (
            <a
              href={project.deployLink}
              target="_blank"
              className="text-blue-400 hover:underline text-xs"
            >
              Give it a go!
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

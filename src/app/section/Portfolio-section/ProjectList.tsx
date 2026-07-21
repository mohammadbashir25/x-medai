"use client";

import { Project } from "./type";

interface ProjectListProps {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function ProjectList({
  projects,
  activeIndex,
  onSelect,
}: ProjectListProps) {
  return (
    <div className="flex flex-col divide-y divide-white/[0.06] border-t border-white/[0.06]">
      {projects.map((project, i) => {
        const isActive = i === activeIndex;

        return (
          <button
            key={project.id}
            onMouseEnter={() => onSelect(i)}
            onFocus={() => onSelect(i)}
            onClick={() => onSelect(i)}
            className={`
              group relative flex items-center gap-6 py-6 px-4 text-left
              transition-colors duration-300
              ${isActive ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"}
            `}
          >
            {/* Active indicator bar */}
            <span
              className={`
                absolute left-0 top-0 h-full w-[2px] transition-all duration-300
                ${isActive ? "bg-[#48b500]" : "bg-transparent"}
              `}
            />

            {/* Index */}
            <span
              className={`
                font-mono text-sm tracking-tight transition-colors duration-300
                ${isActive ? "text-[#48b500]" : "text-[#9ca3af]"}
              `}
            >
              {project.index}
            </span>

            {/* Title + category */}
            <div className="flex-1">
              <h3
                className={`
                  text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300
                  ${isActive ? "text-white" : "text-[#9ca3af] group-hover:text-white"}
                `}
              >
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-[#9ca3af]">{project.category}</p>
            </div>

            {/* Arrow */}
            <span
              className={`
                text-lg transition-all duration-300
                ${isActive ? "translate-x-0 text-[#48b500] opacity-100" : "-translate-x-2 opacity-0"}
              `}
            >
              →
            </span>
          </button>
        );
      })}
    </div>
  );
}
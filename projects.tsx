"use client";

import React from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { motion } from "motion/react";

function Projects() {
  const projects = [
    {
      title: "Macbook Mockup",
      src: "https://images.unsplash.com/photo-1769292169574-b5c7e5ff518f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "#",
      description: "kjnsfkssnfljngrnergnjregnsklj",
    },
    {
      title: "Macbook Mockuwp",
      src: "https://images.unsplash.com/photo-1769292169574-b5c7e5ff518f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "#",
      description: "kjnsfkssnfljngrnergnjregnsklj",
    },
    {
      title: "Macbook Mockuwsp",
      src: "https://images.unsplash.com/photo-1769292169574-b5c7e5ff518f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "#",
      description: "kjnsfkssnfljngrnergnjregnsklj",
    },
    {
      title: "Macbook Mockuawsp",
      src: "https://images.unsplash.com/photo-1769292169574-b5c7e5ff518f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "#",
      description: "kjnsfkssnfljngrnergnjregnsklj",
    },
  ];
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building system and understand them.
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, id) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: id * 0.1,
              ease: "easeInOut",
            }}
            className="group relative mb-4"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                width={300}
                height={300}
                unoptimized
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <p className="mt-2 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

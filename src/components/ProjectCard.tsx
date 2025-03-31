"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  index: number;
}

const ProjectCard = ({  title, description, imageUrl, technologies, link, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered)  
  return (
    <motion.div
      className={cn(
        "group w-full opacity-0",
        `animate-[fade-in_0.5s_ease-out_${index * 0.1 + 0.2}s_forwards]`,
        ` rounded-2xl border-2 border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300`,
        
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link rel="noopener norefferer" href={link ? link : `https://www.github.com/satyyyajit`} target={'_blank'} className="block relative">
        <div className="relative overflow-hidden rounded-sm">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={256}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="p-6 text-center">
              <span className="inline-flex items-center text-sm font-mono text-white/80 border border-white/20 px-3 py-1 rounded-full mb-3">
                View Project <ArrowUpRight className="w-3 h-3 ml-1" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2 px-4 pb-4">
          <h3 className="text-xl font-medium text-white group-hover:opacity-80 transition-opacity duration-300">
            {title}
          </h3>
          <p className="text-sm text-white/70 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs font-mono px-2 py-1 bg-white/10 text-white/70 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

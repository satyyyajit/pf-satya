'use client';
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const Work = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Sample projects data
  const projects = [
    {
      id: "2",
      title: "V-Manage",
      description: "It was a simple project that I made during my 1st semester. It is a simple database management system for managing student details and assigning them colleges according to their ranks. It is a simple CRUD application.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format",
      technologies: ["Java", "MySQL",],
    },
    {
      id: "1",
      title: "Hostel Management System",    
      description: "A hostel management system that allows students to manage their hostel details and payments.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format",
      technologies: ["Next.js", "MongoDB", "Javascript"],
    },
    {
      id: "3",
      title: "Electricity Bill Management System",
      description: "This is first project I made during my 12th grade. It is a simple python-pandas based project that manages electricity bills.",
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format",
      technologies: ["Python", "Pandas", "MySQL"],
    },
  ];
  
  return (
    <div className="page-container pt-32 pb-16 mt-16" id="work">
        <div className="border-b border-gray-900 mb-20"></div>
      {/* Background gradient effects */}
      <div className="blur-gradient w-[500px] h-[500px] bg-blue-500/20 right-[-250px] top-[30%]" />
      <div className="blur-gradient w-[500px] h-[500px] bg-purple-500/20 left-[-250px] bottom-[10%]" />
      
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-16">
          <h1 
            className={cn(
              "text-7xl md:text-9xl font-medium text-white mb-8 tracking-tighter",
              isLoaded ? "opacity-100" : "opacity-0",
              "transition-opacity duration-700"
            )}
          >
            WORK<sup className="text-2xl align-super">3</sup>
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed",
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              "transition-all duration-700 ease-out delay-200"
            )}
          >
            Explore few of my projects I have worked on.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </div>
        
        <div 
          className={cn(
            "border-t  border-white/10 pt-12 mt-16 text-center",
            isLoaded ? "opacity-100" : "opacity-0",
            "transition-opacity duration-700 delay-700"
          )}
        >
          <p className="text-white/70 mb-6">Have a project in mind? Let's create something amazing together.</p>
          <Link 
            href="#contact" 
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black hover:bg-white/90 transition-colors duration-300 rounded-sm"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
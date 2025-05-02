'use client'
import { useState, useEffect } from "react";
import { ArrowDownToDot, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Developing and maintaining full-stack web applications using Next.js, React, and Node.js. Implementing responsive designs and optimizing application performance."
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions",
      period: "2020 - 2022",
      description: "Built responsive and interactive user interfaces using React. Collaborated with designers to implement visually appealing and user-friendly interfaces."
    },
    {
      title: "Software Engineering Intern",
      company: "CodeCraft",
      period: "2019 - 2020",
      description: "Assisted in developing web applications using JavaScript and Python. Participated in code reviews and testing processes."
    }
  ];
  
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Vellore Institute of Technology University - Andhra Pradesh",
      period: "2023 - 2027",
      description: "Pursuing a Bachelor's degree in Computer Science with a focus on software development. I have actively participated in various hackathons and coding competitions, achieving Runner-up position with my team in GFG VITAP HacktoberFest 2024. Through these experiences, I have gained extensive hands-on experience in software development and problem-solving. Additionally, I served as a lead of creative team in Team Next Nexus Creative Team, where I enhanced my design skills and team leadership abilities."
    },
    {
        degree: "Higher Secondary Schooling (12th Grade)",
        institution: "Range School - Balasore, Odisha",
        period: "2021 - 2023",
        description: "Completed higher secondary education with a focus on PCM. Achieved a score of 89% in the CBSE board exams. Learned Python and explored things outside the curriculum."
        },
        {
        degree: "Secondary Schooling (10th Grade)",
        institution: "Gurukul Vidyaniketan - Howrah, West Bengal",
        period: "2007 - 2021",
        description: "Completed secondary education with a focus on Science in the ICSE Board. Learned the fundamentals of programming and Java. Managed and Coordinated a Photography Contest during my 8th Grade"
    }

  ];
  
  console.log(workExperience);
  console.log(education);

  return (
    <div className="page-container pt-32 pb-16 mt-20">
      {/* Background gradient effects */}
      <div className="blur-gradient w-[500px] h-[500px] bg-pink-500/20 right-[-250px] top-[20%]" />
      <div className="blur-gradient w-[500px] h-[500px] bg-indigo-500/20 left-[-250px] bottom-[10%]" />
      
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex justify-between items-start mb-16">
          <h1 
            className={cn(
              "sm:text-3xl md:text-5xl font-medium text-white mb-8",
              isLoaded ? "opacity-100" : "opacity-0",
              "transition-opacity duration-700"
            )}
          >
            RESUME
          </h1>
          
          <button 
            className={cn(
              "flex items-center space-x-2 px-4 py-2 border border-white/20 rounded-sm text-white hover:bg-white/5 transition-all duration-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              "transition-all duration-500 delay-300"
            )}
          >
            <span>Download CV</span>
            <Download className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-16">
          
          
          <section 
            className={cn(
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              "transition-all -mt-16 duration-700 ease-out delay-300"
            )}
          >
            <h2 className="text-xl font-mono text-white mb-6 pb-2 border-b border-white/10">EDUCATION</h2>
            <div className="space-y-10">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-white before:rounded-full"
                >
                  <h3 className="text-lg text-white font-medium">{edu.degree}</h3>
                  <div className="flex justify-between mt-1">
                    <p className="text-white/70">{edu.institution}</p>
                    <p className="text-white/50 text-sm font-mono">{edu.period}</p>
                  </div>
                  <p className="mt-3 text-white/80 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section 
            className={cn(
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              "transition-all duration-700 ease-out delay-400"
            )}
          >
            <h2 className="text-xl font-mono text-white mb-6 pb-2 border-b border-white/10">SKILLS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Next.js", "React", "Python", "Node.js", "JavaScript", 
                "TypeScript", "HTML/CSS", "Tailwind CSS", "MongoDB", "MySQL","Dart","Photoshop","Photography",
                "Java", "Git", "Responsive Design"
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 bg-white/5 rounded text-white/90 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <div 
          className={cn(
            "mt-20 border-t border-white/10 pt-8 text-center",
            isLoaded ? "opacity-100" : "opacity-0",
            "transition-opacity duration-700 delay-500"
          )}
        >
          <p className="text-white/70 mb-4">Want to know more about my experience?</p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-sm text-white hover:bg-white/5 transition-all duration-300"
          >
            <span>Get in Touch</span>
            <ArrowDownToDot className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;

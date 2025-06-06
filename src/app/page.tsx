'use client';

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Loading from "@/components/Loading";
import About from "./(pages)/about/About";
import Work from "./(pages)/work/Work";
import Contact from "./(pages)/contact/Contact";



const Index = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLDivElement>(null);
    const nameParts = ["SATYAJIT"];
    
    useEffect(() => {
        const loadTimeout = setTimeout(() => {
            setIsLoaded(true);
                return (
                    <Loading />
                )
            }, 1000);
        return () => clearTimeout(loadTimeout);
    }, []);
    
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          if (!containerRef.current || !nameRef.current) return;
          
          const { clientX, clientY } = e;
          const { width, height, left, top } = containerRef.current.getBoundingClientRect();
          
          const x = (clientX - left) / width - 0.5;
          const y = (clientY - top) / height - 0.5;
          
          // Subtle text movement
          nameRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        };
        
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);   
    
    return (
      <div 
        ref={containerRef}
        className="page-container relative flex flex-col mt-16 justify-between pt-24 md:pt-32 overflow-hidden"
      >
        
        <div className="blur-gradient w-[500px] h-[500px] bg-blue-500/20 right-[-250px] top-[20%]" />
        <div className="blur-gradient w-[500px] h-[500px] bg-purple-500/20 left-[-250px] bottom-[10%]" />
        <div className="blur-gradient w-[500px] h-[500px] bg-green-500/10 bottom-[-250px] top-[40%]" />
        <div className="max-w-5xl mx-auto w-full">
          <div className={cn("space-y-4 opacity-0 animate-fade-in", { "opacity-100": isLoaded })}>
            <div className="inline-block border border-white/20 px-2 py-1 text-xs font-mono text-white/70">
              FULL STACK DEV & STUDENT @ VIT
            </div>
            
            <h1 
              ref={nameRef}
              className="text-5xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white mt-4 transition-transform duration-500 ease-out"
              style={{ willChange: "transform" }}
            >
              {nameParts.map((part, index) => (
                <span 
                  key={index} 
                  className={cn("inline-block", {
                    "translate-y-0 opacity-100": isLoaded,
                    "translate-y-8 opacity-0": !isLoaded,
                  }, "transition-all duration-700 ease-out")}
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                  {part}
                </span>
              ))}
            </h1>
            
            <div 
              className={cn(
                "mt-8 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed",
                { "translate-y-0 opacity-100": isLoaded, "translate-y-8 opacity-0": !isLoaded },
                "transition-all duration-700 ease-out delay-300"
              )}
            >
              A 2nd Year CS Student at VIT, <br />
              An introvert who loves to try a lot of things and learn new skills in a room. <br />
              Currently learning about development, languages, and frameworks. <br />
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
          <Link href="#work" className={cn(
              "group p-8 border border-white/10 rounded-sm hover:bg-white/5 transition-all duration-500 ease-out",
              { "translate-y-0 opacity-100": isLoaded, "translate-y-8 opacity-0": !isLoaded },
              "transition-all duration-700 ease-out delay-400"
          )}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-mono text-white">MY WORK</h3>
              <ArrowRight className="w-4 h-4 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
            <p className="text-white/70">
              Explore my portfolio of projects and see how I bring ideas to life with clean, elegant code.
            </p>
          </Link>
          
          <Link href="#about" className={cn(
              "group p-8 border border-white/10 rounded-sm hover:bg-white/5 transition-all duration-500 ease-out",
              { "translate-y-0 opacity-100": isLoaded, "translate-y-8 opacity-0": !isLoaded },
              "transition-all duration-700 ease-out delay-500"
          )}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-mono text-white">ABOUT ME</h3>
              <ArrowRight className="w-4 h-4 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
            <p className="text-white/70">
              Learn more about my journey, skills, and what drives me to create exceptional experiences.
            </p>
          </Link>
        </div>
        
        <div className="mt-24 mb-8 text-center text-white/50 text-sm font-mono opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          © {new Date().getFullYear()} • Designed & Built with precision
        </div>
      </div>
    );
};

const Page = () => {

    return (
        <>
            <Index />
            <About/>
            <Work/>
            <Contact/>
        </>
    );

};
  
  export default Page;

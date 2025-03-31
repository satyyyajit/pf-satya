'use client'
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Counter from "@/components/Counter";
import { cn } from "@/lib/utils";

const About = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const skills = [
        { name: "Next.js", level: 50 },
        { name: "React", level: 50 },
        { name: "Python", level: 75 },
        { name: "Node.js", level: 65 },
        { name: "JavaScript", level: 70 },
        { name: "Java", level: 75 },
    ];

    const interests = ["Coding", "Gaming", "Working Out", "Cinematography", "Music", "Photography"];

    return (
        <div className="page-container pt-32 pb-16 " id="about">
            <div className="border-b border-gray-900 mb-20"></div>
            {/* Background gradient effects */}
            <div className="blur-gradient w-[500px] h-[500px] bg-indigo-500/20 right-[-250px] top-[10%]" />
            <div className="blur-gradient w-[500px] h-[500px] bg-purple-500/20 left-[-250px] bottom-[20%]" />

            <div className="max-w-5xl mx-auto w-full">
                <div className="mb-16">
                    <h1
                        className={cn(
                            "text-3xl md:text-6xl font-medium text-white mb-8",
                            isLoaded ? "opacity-100" : "opacity-0",
                            "transition-opacity duration-700"
                        )}
                    >
                        ABOUT <span className="hover:text-blue-500 transform duration-300 transition-all">ME.</span>
                    </h1>

                    <p
                        className={cn(
                            "text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed",
                            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                            "transition-all duration-700 ease-out delay-200"
                        )}
                    >
                        A learner and a builder, I am passionate about creating impactful digital experiences.
                        I like to explore new technologies and push the boundaries of what is possible in the digital realm.
                        <br /><br />
                        I am a full stack developer with a intermediate foundation in both front-end and back-end technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                    <div
                        className={cn(
                            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                            "transition-all duration-700 ease-out delay-300"
                        )}
                    >
                        <div className="mb-8">
                            <h3 className="text-lg font-mono text-white mb-4">MY BACKGROUND</h3>
                            <p className="text-white/70 leading-relaxed">
                                I am a second-year B.Tech CSE student at VIT, super curious about tech and always up for learning new things! I know Java and Python pretty well, and I mess around with android and web dev too HTML, CSS, and JavaScript.
                                <br /><br />
                                Outside of coding, I love photography because it helps me capture cool moments. Gaming? Yeah, it is my way to chill and challenge myself at the same time. Also, I try to stay fit because, you know, balance is important.
                                <br /><br />
                                I am really into languages, and right now, I am learning Japanese! I already communicate Hindi, English, Odia, and Bengali, and know very-few words in telugu as well, so why not add another one, right? When I am not coding or studying, you will probably find me vibing to music or watching movies, You could call me a cinephile. 😎
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-mono text-white mb-4">INTERESTS</h3>
                            <div className="flex flex-wrap gap-2">
                                {interests.map((interest, index) => (
                                    <span
                                        key={index}
                                        className="text-white/90 text-sm px-3 py-1.5 border border-white/20 rounded-full"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className={cn(
                            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                            "transition-all duration-700 ease-out delay-400"
                        )}
                    >
                        <h3 className="text-lg font-mono text-white mb-6">SKILLS</h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-white/90">{skill.name}</span>
                                        <span className="text-white/60 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-white/80 rounded-full"
                                            style={{
                                                width: `${skill.level}%`,
                                                transition: "width 1s ease-out",
                                                transitionDelay: `${0.5 + index * 0.1}s`
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className={cn(
                        "grid grid-cols-1 md:grid-cols-2 gap-12 mb-16",
                        isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                        "transition-all duration-700 ease-out delay-500"
                    )}
                >
                    <div className="text-center relative flex flex-col items-center">
                        <Counter end={2} prefix="+" />
                        <p className="text-white/70 text-sm uppercase tracking-widest font-mono">Years of Coding</p>
                    </div>

                    <div className="text-center relative flex flex-col items-center">
                        <Counter end={3} prefix="+" delay={300} />
                        <p className="text-white/70 text-sm uppercase tracking-widest font-mono">Projects Completed</p>
                    </div>
                </div>

                <div
                    className={cn(
                        "text-center",
                        isLoaded ? "opacity-100" : "opacity-0",
                        "transition-opacity duration-700 delay-600"
                    )}
                >
                    <Link
                        href="#work"
                        className="inline-flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-sm text-white hover:bg-white/5 transition-all duration-300"
                    >
                        <span>Check My Work</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
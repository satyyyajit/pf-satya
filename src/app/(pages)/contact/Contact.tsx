'use client'
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Send, Mail, MapPin } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import { toast } from "sonner";

const Contact = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", message: "" });

            // Reset success message after 5 seconds
            toast.success("Message sent successfully! I'll get back to you soon.", {
                duration: 5000,
                action: {
                    label: "Close",
                    onClick: () => toast.dismiss(),
                },
            });
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="page-container pt-32 pb-16 " id="contact">
            <div className="border-b border-gray-900 mb-20"></div>
            {/* Background gradient effects */}
            <div className="blur-gradient w-[500px] h-[500px] bg-blue-500/20 right-[-250px] top-[10%]" />
            <div className="blur-gradient w-[500px] h-[500px] bg-purple-500/20 left-[-250px] bottom-[20%]" />

            <div className="max-w-5xl mx-auto w-full">
                <div className="mb-16">
                    <h1
                        className={cn(
                            "text-3xl md:text-5xl font-medium text-white mb-8",
                            isLoaded ? "opacity-100" : "opacity-0",
                            "transition-opacity duration-700"
                        )}
                    >LET &apos;S TALK</h1>

                    <p
                        className={cn(
                            "text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed",
                            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                            "transition-all duration-700 ease-out delay-200"
                        )}
                    >
                        Have a project in mind or just want to say hello? Feel free to reach out in my socials and I will get back to you as soon as possible.
                    </p>
                </div>

                <SocialLinks />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div
                        className={cn(
                            "lg:col-span-3",
                            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                            "transition-all duration-700 ease-out delay-300"
                        )}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="">
                                <div>
                                    <label htmlFor="name" className="block text-white/70 text-sm mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors duration-300"
                                        placeholder="Enter Any Anonymous Name (Something like Asteroid Destroyer)"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white/70 text-sm mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <div>
                                {isSubmitted ? (
                                    <div className="flex items-center justify-center px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white">
                                        Message sent successfully! I will get back to you soon.
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={cn(
                                            "w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white text-black hover:bg-white/90 transition-colors duration-300 rounded-sm disabled:opacity-70",
                                            isSubmitting && "cursor-not-allowed"
                                        )}
                                    >
                                        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                                        <Send className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div
                        className={cn(
                            "lg:col-span-2",
                            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                            "transition-all duration-700 ease-out delay-400"
                        )}
                    >
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-mono text-white mb-4">CONTACT INFO</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Mail className="w-5 h-5 text-white/60 mt-1 mr-3" />
                                        <div>
                                            <p className="text-white/90">Email</p>
                                            <a href="mailto:satyajeetsjp299@gmail.com" className="text-white/70 hover:text-white transition-colors duration-300">
                                                satyajeetsjp299@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <MapPin className="w-5 h-5 text-white/60 mt-1 mr-3" />
                                        <div>
                                            <p className="text-white/90">Location</p>
                                            <p className="text-white/70">
                                                Amaravati, Andhra Pradesh, India
                                            </p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

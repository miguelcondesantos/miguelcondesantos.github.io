
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6 opacity-0 animate-fade-in">
            <div className="inline-block bg-portfolio-light-purple dark:bg-portfolio-dark-purple/20 text-portfolio-purple px-4 py-1 rounded-full font-medium text-sm">
              Full-Stack Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hello, I'm <span className="text-portfolio-purple">Miguel Conde Santos</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Full-Stack Developer with experience in Java, JavaScript, TypeScript, C#, Python, HTML, CSS,
              Spring, React, Flask, Node.js, SQL and NoSQL databases, Docker, Google Cloud, Git and GitHub.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-md" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-md" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="pt-6 flex items-center space-x-4">
              <a 
                href="https://github.com/miguelcondesantos" 
                target="_blank" 
                className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/miguel-conde-santos-a67313271/" 
                target="_blank" 
                className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:miguelconde121004@gmail.com" 
                target="_blank" 
                className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-center lg:justify-end opacity-0 animate-fade-in animate-delay-300">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-portfolio-purple shadow-xl">
                <img 
                  src="/images/eu.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-secondary rounded-full p-4 shadow-lg opacity-0 animate-fade-in animate-delay-500">
                <div className="bg-portfolio-purple text-white rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 opacity-0 animate-fade-in">
            <div className="sticky top-28">
              <h2 className="section-title pb-3 mb-6">About Me</h2>
              <p className="text-muted-foreground mb-6">
                I'm a proactive Full-Stack developer looking for an internship opportunity to
                expand my experience as a developer and add value to the company.
              </p>
              <p className="text-muted-foreground mb-6">
                I'm familiar with agile methodologies and I'm always looking to learn new technologies
                to improve my development skills.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild className="rounded-md">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 opacity-0 animate-fade-in animate-delay-200">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="languages">Languages</TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience" className="mt-6">
                <div className="space-y-8">
                  <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                      <span className="bg-portfolio-light-purple text-portfolio-purple text-sm px-3 py-1 rounded-full">
                        January 2023 - Present
                      </span>
                    </div>
                    <h4 className="text-portfolio-purple mb-3">Freelancer, Remote</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium">Project – Asset Manager</h5>
                        <p className="text-muted-foreground">
                          System to optimize business management.
                          Intuitive interface and robust functionalities that
                          simplify asset administration. Ensures
                          agile management and maximizes the value of company resources.
                        </p>
                        <p className="text-muted-foreground mt-2">
                          <span className="font-medium">Technologies:</span> HTML, CSS, Java, TypeScript,
                          NodeJS, React, Spring and MySQL
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium">Project – Weather Data Collector</h5>
                        <p className="text-muted-foreground">
                          Environmental monitoring system with low-cost IoT weather stations.
                          Collects climate data, processes and displays it in a portal with dashboards, reports and alerts for
                          disaster prevention. Integrates high school students with mathematical concepts and
                          problem-based learning.
                        </p>
                        <p className="text-muted-foreground mt-2">
                          <span className="font-medium">Technologies:</span> HTML, CSS, TypeScript, MySQL,
                          NodeJS, React, Docker, Google Cloud and Supabase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="education" className="mt-6">
                <div className="space-y-8">
                  <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">Associate Degree in Multi-platform Software Development</h3>
                      <span className="bg-portfolio-light-purple text-portfolio-purple text-sm px-3 py-1 rounded-full">
                        2023 - 2025
                      </span>
                    </div>
                    <h4 className="text-portfolio-purple mb-3">FATEC São José dos Campos - Prof. Jessen Vida</h4>
                  </div>
                  
                  <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">Technical Degree in Systems Development</h3>
                      <span className="bg-portfolio-light-purple text-portfolio-purple text-sm px-3 py-1 rounded-full">
                        2020 - 2022
                      </span>
                    </div>
                    <h4 className="text-portfolio-purple mb-3">Etec Prof. José Sant'Ana de Castro</h4>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="languages" className="mt-6">
                <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Languages</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Portuguese</span>
                      <span className="text-portfolio-purple">Native</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">English (C1)</span>
                      <span className="text-portfolio-purple">
                        <a href="https://cert.efset.org/G17eFi" target="_blank" className="text-portfolio-purple hover:text-portfolio-dark-purple underline">
                          Advanced (Certified)
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

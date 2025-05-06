
import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  FileCode,  // Replacement for Html
  Palette,   // Replacement for Css
  SquareCode,
  FileJson,
  FileBadge,
  Boxes, 
  Cloud,
  FlaskConical,
  Binary 
} from 'lucide-react';

// Tech stack icons organized by category
const techCategories = [
  {
    name: "Frontend",
    tech: [
      { name: "HTML", color: "#E34F26", icon: <FileCode size={32} /> },
      { name: "CSS", color: "#1572B6", icon: <Palette size={32} /> },
      { name: "JavaScript", color: "#F7DF1E", icon: <FileJson size={32} /> },
      { name: "TypeScript", color: "#3178C6", icon: <FileBadge size={32} /> },
      { name: "React", color: "#61DAFB", icon: <Boxes size={32} /> },
    ]
  },
  {
    name: "Backend",
    tech: [
      { name: "Java", color: "#007396", icon: <Binary size={32} /> },
      { name: "C#", color: "#68217A", icon: <Code size={32} /> },
      { name: "Python", color: "#3776AB", icon: <SquareCode size={32} /> },
      { name: "Node.js", color: "#339933", icon: <Server size={32} /> },
      { name: "Spring", color: "#6DB33F", icon: <FlaskConical size={32} /> },
      { name: "Flask", color: "#000000", icon: <FlaskConical size={32} /> },
    ]
  },
  {
    name: "Database & DevOps",
    tech: [
      { name: "MySQL", color: "#4479A1", icon: <Database size={32} /> },
      { name: "MongoDB", color: "#47A248", icon: <Database size={32} /> },
      { name: "Redis", color: "#DC382D", icon: <Database size={32} /> },
      { name: "Docker", color: "#2496ED", icon: <Boxes size={32} /> },
      { name: "Google Cloud", color: "#4285F4", icon: <Cloud size={32} /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title pb-3 mb-8 text-center after:left-1/2 after:-translate-x-1/2">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-center">
            These are the technologies I work with daily to build robust 
            and scalable applications with great user experiences.
          </p>
          
          <div className="space-y-12">
            {techCategories.map((category, categoryIndex) => (
              <div key={category.name} className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {category.tech.map((tech, index) => (
                    <div 
                      key={tech.name}
                      className="flex flex-col items-center p-5 rounded-lg bg-white dark:bg-secondary shadow-md hover:shadow-lg transition-all opacity-0 animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 5 + index) * 100}ms`, borderTop: `3px solid ${tech.color}` }}
                    >
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground dark:text-gray-200" style={{ color: tech.color }}>
                          {tech.icon}
                        </div>
                      </div>
                      <h3 className="font-medium text-center">{tech.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

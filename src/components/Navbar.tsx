
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Resume download handler
  const handleResumeClick = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1KH4ovLxlmMlmr3lD6MEu452VVH6uscum'; // Update with actual resume path when available
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-secondary/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold font-heading hover:opacity-90 transition-opacity duration-300"
            >
              <span className="text-[#9b87f5]">M</span>
              <span className="text-[#8B5CF6]">i</span>
              <span className="text-[#7E69AB]">g</span>
              <span className="text-[#6E59A5]">u</span>
              <span className="text-[#D6BCFA]">e</span>
              <span className="text-[#8B5CF6]">l</span>
              <span className="text-foreground"> </span>
              <span className="text-[#9b87f5]">C</span>
              <span className="text-[#7E69AB]">o</span>
              <span className="text-[#D6BCFA]">n</span>
              <span className="text-[#6E59A5]">d</span>
              <span className="text-[#8B5CF6]">e</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link"
                onClick={() => {
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="hidden md:flex items-center gap-3 ml-4">
              <ThemeSwitcher />
              <Button variant="default" size="sm" onClick={handleResumeClick}>
                Resume
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation Toggle and Theme Switcher */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeSwitcher />
            <button 
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-secondary shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium hover:text-portfolio-purple hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                onClick={() => {
                  closeMenu();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button variant="default" size="sm" className="w-full" onClick={handleResumeClick}>
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

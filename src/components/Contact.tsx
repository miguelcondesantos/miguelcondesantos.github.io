import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_nzfo6ub';
    const myTemplateID = 'template_axu75m9';
    const userTemplateID = 'template_cyqlz0p';
    const publicKey = 'GSduuUYPRIFWVBw87';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
  
    const userTemplateParams = {
      from_name: formData.name,
      subject: formData.subject,
      message: formData.message,
      email: formData.email,
    };
  
    try {
      await emailjs.send(serviceID, myTemplateID, templateParams, publicKey);
  
      await emailjs.send(serviceID, userTemplateID, userTemplateParams, publicKey);
  
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. A confirmation email has been sent to your inbox.",
      });
  
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center mb-12 pb-3 after:left-1/2 after:-translate-x-1/2">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Do you have a project in mind or would like more information? Don't hesitate to contact me!
          I'm always open to discussing new opportunities and ideas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="opacity-0 animate-fade-in">
            <Card className="bg-white dark:bg-secondary shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-portfolio-purple text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                  <p className="opacity-90">
                    Fill out the form and I'll get back to you as soon as possible.
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-portfolio-light-purple dark:bg-portfolio-dark-purple/20 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-portfolio-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+55 (12) 98257-3856</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-portfolio-light-purple dark:bg-portfolio-dark-purple/20 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-portfolio-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">miguelconde121004@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-portfolio-light-purple dark:bg-portfolio-dark-purple/20 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-portfolio-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">São José dos Campos, SP, Brazil</p>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-center space-x-6">
                    <a
                      href="https://github.com/miguelcondesantos"
                      target="_blank"
                      className="text-portfolio-purple hover:text-portfolio-dark-purple transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/miguel-conde-santos-a67313271/"
                      target="_blank"
                      className="text-portfolio-purple hover:text-portfolio-dark-purple transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="mailto:miguelconde121004@gmail.com"
                      className="text-portfolio-purple hover:text-portfolio-dark-purple transition-colors duration-200"
                      aria-label="Email"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="opacity-0 animate-fade-in animate-delay-200">
            <Card className="bg-white dark:bg-secondary shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Message subject"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

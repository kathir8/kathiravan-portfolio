import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 relative overflow-hidden">
        {/* Decorative background element */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <a 
          href="mailto:sukn99@gmail.com" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-bold text-lg transition-all duration-300"
        >
          <Mail size={24} />
          Say Hello
        </a>

        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <MapPin size={16} />
            <span>Chennai, India (Remote available)</span>
          </div>
          <p>© {new Date().getFullYear()} Kathiravan. Built with React.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
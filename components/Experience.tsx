import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../constants';
import { SectionId } from '../types';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="text-primary" size={32} />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Work Experience</h2>
          <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow ml-4"></div>
        </div>

        <div className="relative border-l border-slate-300 dark:border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-slate-100 dark:ring-slate-900" />
              
              <div className="group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-indigo-600 dark:text-accent bg-indigo-50 dark:bg-accent/10 px-2 py-1 rounded inline-block w-fit mt-1 sm:mt-0 font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">{exp.company}</h4>
                
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-primary mt-2 text-xs">▹</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
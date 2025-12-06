import React from 'react';
import { Folder } from 'lucide-react';
import { PROJECTS } from '../constants';
import { SectionId } from '../types';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Folder className="text-primary" size={32} />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 group shadow-lg shadow-slate-200/50 dark:shadow-none"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/10 dark:bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono text-indigo-600 dark:text-accent bg-indigo-50 dark:bg-slate-900 px-2 py-1 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
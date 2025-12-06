import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { SectionId } from '../types';
import { TOTAL_EXPERIENCE } from '../constants';

const LeetCodeIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <path d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path>
    <path d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path>
    <path d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path>
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-indigo-600 dark:text-accent font-mono font-medium tracking-wide">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              Kathiravan.
              <span className="block text-slate-500 dark:text-slate-400">I build things for the web.</span>
            </h1>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            I'm a specialized Frontend Engineer with <span className="text-slate-900 dark:text-white font-semibold">{TOTAL_EXPERIENCE}</span> of experience building exceptional digital experiences. Currently, I'm focused on building reliable, user-centered healthcare solutions at <a href="https://www.dedalus.com/asia/" target="_blank" rel="noreferrer" className="text-primary hover:text-indigo-600 dark:hover:text-accent transition-colors duration-300">Dedalus</a>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={`#${SectionId.PROJECTS}`} className="group px-8 py-3 bg-primary text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-600 transition-all hover:scale-105 shadow-lg shadow-indigo-500/30">
              Check out my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={`#${SectionId.CONTACT}`} className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-all bg-white/50 dark:bg-transparent">
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 pt-4">
            <a href="https://leetcode.com/u/kathiravan8/" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:-translate-y-1 transition-all" title="LeetCode"><LeetCodeIcon size={24} /></a>
            <a href="https://www.linkedin.com/in/kathiravans0808/" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:-translate-y-1 transition-all" title="LinkedIn"><Linkedin size={24} /></a>
            <a href="https://github.com/kathir8" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:-translate-y-1 transition-all" title="GitHub"><Github size={24} /></a>
          </div>
        </div>

        {/* Abstract code visual */}
        <div className="hidden md:block relative">
          <div className="relative z-10 bg-slate-100 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <code className="font-mono text-sm text-slate-700 dark:text-slate-300">
              <span className="text-purple-600 dark:text-purple-400">const</span> developer = <span className="text-amber-600 dark:text-yellow-300">{`{`}</span><br/>
              &nbsp;&nbsp;name: <span className="text-green-600 dark:text-green-400">'Kathiravan'</span>,<br/>
              &nbsp;&nbsp;skills: [<span className="text-green-600 dark:text-green-400">'Angular'</span>, <span className="text-green-600 dark:text-green-400">'TypeScript'</span>, <span className="text-green-600 dark:text-green-400">'C#'</span>],<br/>
              &nbsp;&nbsp;hardWorker: <span className="text-blue-600 dark:text-blue-400">true</span>,<br/>
              &nbsp;&nbsp;persistence: <span className="text-green-600 dark:text-green-400">'unlimited'</span><br/>
              <span className="text-amber-600 dark:text-yellow-300">{`}`}</span>;<br/>
              <br/>
              <span className="text-purple-600 dark:text-purple-400">while</span> (developer.alive) <span className="text-amber-600 dark:text-yellow-300">{`{`}</span><br/>
              &nbsp;&nbsp;developer.code();<br/>
              &nbsp;&nbsp;developer.learn();<br/>
              <span className="text-amber-600 dark:text-yellow-300">{`}`}</span>
            </code>
          </div>
          <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-xl blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
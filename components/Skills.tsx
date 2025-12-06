import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Cpu } from 'lucide-react';
import { SKILLS, TOTAL_EXPERIENCE } from '../constants';
import { SectionId } from '../types';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sort skills by proficiency for better visual
  const data = [...SKILLS].sort((a, b) => b.proficiency - a.proficiency);

  return (
    <section id={SectionId.SKILLS} className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Cpu className="text-primary" size={32} />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
              Proficiency Breakdown
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              With <strong>{TOTAL_EXPERIENCE}</strong> of hands-on experience, I have developed a strong command over modern frontend technologies. 
              My core expertise lies in the Angular ecosystem, but I am also comfortable with backend logic.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['Frontend Architecture', 'Performance Optimization', 'Responsive Design', 'API Integration'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="h-[400px] w-full bg-white dark:bg-slate-800/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-none">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                margin={{ 
                  top: 5, 
                  right: isMobile ? 10 : 30, 
                  left: isMobile ? -10 : 20, 
                  bottom: 5 
                }}
              >
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={isMobile ? 130 : 200} 
                  tick={{ 
                    fill: isDark ? '#e2e8f0' : '#334155', 
                    fontSize: isMobile ? 11 : 13, 
                    fontWeight: 500 
                  }} 
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                />
                <Tooltip 
                  cursor={{ fill: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' }}
                  contentStyle={{ 
                    backgroundColor: isDark ? '#0f172a' : '#ffffff', 
                    borderColor: isDark ? '#334155' : '#e2e8f0', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    color: isDark ? '#f8fafc' : '#0f172a'
                  }}
                  itemStyle={{ color: isDark ? '#f8fafc' : '#0f172a', fontWeight: 600 }}
                  formatter={(value: number) => [`${value}%`, 'Proficiency']}
                />
                <Bar dataKey="proficiency" radius={[0, 4, 4, 0]} barSize={20}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={
                        entry.proficiency >= 85 ? '#818cf8' : // Indigo 400 (Vibrant)
                        entry.proficiency >= 70 ? '#38bdf8' : // Sky 400 (Bright Blue)
                        '#2dd4bf' // Teal 400 (Bright Teal)
                      } 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
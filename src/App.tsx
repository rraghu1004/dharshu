import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Database, 
  LineChart, 
  PieChart, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  Sparkles,
  BrainCircuit,
  Terminal,
  Download
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell 
} from 'recharts';
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS, EXPERIENCES } from './constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function App() {
  const [activeTab, setActiveTab] = useState<'projects' | 'skills' | 'experience'>('projects');
  const [aiInsight, setAiInsight] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateInsight = async () => {
    setIsGenerating(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Give a short, inspiring data analysis tip or a fun fact about data for a portfolio website. Keep it under 20 words.",
      });
      setAiInsight(response.text || "Data is the new oil, but only if you know how to refine it.");
    } catch (error) {
      console.error("AI Error:", error);
      setAiInsight("Data tells stories. My job is to listen.");
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    generateInsight();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="font-bold tracking-tight text-lg">Dharshni R.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all flex items-center gap-2">
              <Download size={16} />
              Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Crafting seamless <span className="text-blue-600">mobile experiences.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Hi, I'm Dharshni R. A Flutter Developer and UI/UX Designer focused on building beautiful, high-performance mobile applications and intuitive user interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Get in touch
              </a>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com/in/dharshni-b-b60a162a5" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:dharshubalaram@gmail.com" className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="https://picsum.photos/seed/dharshni/800/800" 
                alt="Dharshni R" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8 w-full">
                  {[Terminal, BrainCircuit, LineChart, PieChart].map((Icon, i) => (
                    <motion.div 
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                      className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl flex items-center justify-center"
                    >
                      <Icon size={32} className="text-blue-600" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            {/* AI Insight Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-xs"
            >
              <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                <BrainCircuit size={16} />
                AI Design Insight
              </div>
              <p className="text-sm text-slate-700 italic">
                "{aiInsight || "Loading insight..."}"
              </p>
              <button 
                onClick={generateInsight}
                disabled={isGenerating}
                className="mt-3 text-[10px] text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1 uppercase font-bold tracking-tighter"
              >
                {isGenerating ? "Analyzing..." : "Refresh Insight"}
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Work Section */}
        <section id="work" className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Portfolio Showcase</h2>
              <div className="flex p-1 bg-slate-100 rounded-xl w-fit">
                {(['projects', 'skills', 'experience'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-6 py-2 rounded-lg text-sm font-bold transition-all capitalize",
                      activeTab === tab ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-slate-500 text-sm font-mono">
              <Terminal size={16} className="inline mr-2" />
              dharshni@portfolio:~$ ls {activeTab}/
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'projects' && (
              <motion.div 
                key="projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {PROJECTS.map((project) => (
                  <div key={project.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all">
                    <div className="aspect-video bg-slate-100 relative overflow-hidden">
                      <img 
                        src={
                          project.id === '1' ? 'https://picsum.photos/seed/mobile-app/600/400' :
                          project.id === '2' ? 'https://picsum.photos/seed/logo-design/600/400' :
                          'https://picsum.photos/seed/social-media/600/400'
                        } 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                      <p className="text-sm text-slate-600 mb-6 line-clamp-2">
                        {project.description}
                      </p>
                      {project.metrics && (
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                          {project.metrics.map(m => (
                            <div key={m.label}>
                              <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">{m.label}</div>
                              <div className="text-lg font-bold text-blue-600">{m.value}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div 
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid md:grid-cols-2 gap-12"
              >
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <BarChart3 size={20} className="text-blue-600" />
                    Proficiency Distribution
                  </h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={SKILLS.filter(s => s.category === 'Technical')}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip 
                          cursor={{ fill: '#f1f5f9' }}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="level" radius={[4, 4, 0, 0]}>
                          {SKILLS.filter(s => s.category === 'Technical').map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#6366f1'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-xs text-center text-slate-400 mt-4 italic">
                    Technical skill levels based on project complexity and years of usage.
                  </p>
                </div>

                <div className="space-y-8">
                  {['Technical', 'Tools'].map((cat) => (
                    <div key={cat}>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{cat}</h4>
                      <div className="flex flex-wrap gap-3">
                        {SKILLS.filter(s => s.category === cat).map(skill => (
                          <div key={skill.name} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium shadow-sm hover:border-blue-300 hover:text-blue-600 transition-all">
                            {skill.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div 
                key="experience"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-3xl mx-auto space-y-12"
              >
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-blue-600 font-bold mb-4">{exp.company}</div>
                    <ul className="space-y-3">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-slate-600 text-sm flex gap-3">
                          <ChevronRight size={16} className="text-blue-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-slate-900 rounded-[2rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500 blur-[120px] rounded-full" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <span className="text-blue-400">extraordinary.</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
              Ready to bring your mobile app ideas to life or design a stunning user interface? Let's connect.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="mailto:dharshubalaram@gmail.com" className="w-full md:w-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                <Mail size={20} />
                dharshubalaram@gmail.com
              </a>
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/in/dharshni-b-b60a162a5" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200 text-center">
        <div className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Dharshni R. Built with React.
        </div>
      </footer>
    </div>
  );
}

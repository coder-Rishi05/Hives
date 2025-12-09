import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
import { Bot, Code2, LayoutTemplate } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section id="services" className="px-6 py-32 bg-surface dark:bg-black">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Our Expertise
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Integrated Digital Services
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[300px]">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/50 hover:shadow-xl dark:hover:border-zinc-700 transition-all duration-300 ${
                service.colSpan === 2 ? 'md:col-span-2' : service.colSpan === 3 ? 'md:col-span-3' : 'md:col-span-1'
              }`}
            >
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                   <div className="mb-4 inline-flex items-center justify-center rounded-full bg-zinc-100 p-3 dark:bg-zinc-800">
                      {service.type === 'ui' && <LayoutTemplate className="h-6 w-6 text-blue-500" />}
                      {service.type === 'ai' && <Bot className="h-6 w-6 text-purple-500" />}
                      {service.type === 'dev' && <Code2 className="h-6 w-6 text-green-500" />}
                   </div>
                  <h4 className="text-2xl font-bold text-foreground">{service.title}</h4>
                  <p className="mt-2 max-w-sm text-zinc-500 dark:text-zinc-400">
                    {service.description}
                  </p>
                </div>
                
                {/* Decorative Elements based on type */}
                <div className="mt-4 flex-grow relative overflow-hidden rounded-xl border border-dashed border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-black/20">
                  
                  {service.type === 'ui' && (
                     <div className="absolute inset-4 bg-white dark:bg-zinc-800 shadow-sm rounded-lg p-4">
                        <div className="flex gap-2 mb-4">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="space-y-2">
                           <div className="h-2 w-1/2 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                           <div className="h-2 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                           <div className="h-8 w-full bg-blue-500/10 rounded mt-4"></div>
                        </div>
                     </div>
                  )}

                  {service.type === 'ai' && (
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                           <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 blur-xl rounded-full animate-pulse-slow"></div>
                           <Bot className="relative z-10 w-16 h-16 text-zinc-300 dark:text-zinc-600 opacity-50" />
                           {/* Connecting nodes visualization */}
                           <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-zinc-300 dark:text-zinc-700" />
                              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-purple-500 animate-[ping_3s_linear_infinite]" />
                           </svg>
                        </div>
                     </div>
                  )}

                  {service.type === 'dev' && (
                     <div className="absolute inset-4 font-mono text-xs text-zinc-400 p-2 overflow-hidden">
                        <p><span className="text-purple-400">const</span> <span className="text-blue-400">innovate</span> = <span className="text-yellow-400">async</span> () ={">"} {"{"}</p>
                        <p className="pl-4"><span className="text-purple-400">await</span> ai.integrate();</p>
                        <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">"Future Built"</span>;</p>
                        <p>{"}"}</p>
                     </div>
                  )}

                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -inset-1 z-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:from-blue-500/10 group-hover:to-purple-500/10 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

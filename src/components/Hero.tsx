import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, 400], [0, 15]);
  const y = useTransform(scrollY, [0, 400], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[20%] left-[50%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/10"></div>
        <div className="absolute top-[40%] right-[10%] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/10"></div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="flex max-w-5xl flex-col items-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl text-foreground"
        >
          Design. Dev.
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Intelligence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl"
        >
          We build digital ecosystems for the future. True Hives merges aesthetic excellence with autonomous AI agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="group relative overflow-hidden rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition-all hover:scale-105">
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
          </button>
          <button className="group rounded-full border border-zinc-200 bg-transparent px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800">
            View Our Work
          </button>
        </motion.div>
      </motion.div>

      {/* Abstract 3D Visual */}
      <motion.div
        style={{ rotateX }}
        className="mt-20 perspective-1000 w-full max-w-4xl"
      >
        <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-100 to-white shadow-2xl dark:from-zinc-900 dark:to-zinc-950 dark:border-white/5 dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]">
           {/* Abstract content mimicking a dashboard */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative h-64 w-64 rounded-full border border-blue-500/20">
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-t border-blue-500 opacity-50"></div>
                <div className="absolute inset-4 animate-[spin_8s_linear_infinite_reverse] rounded-full border-t border-purple-500 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-xl"></div>
                </div>
             </div>
           </div>
           
           {/* Floating elements */}
           <motion.div 
             animate={{ y: [0, -20, 0] }} 
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-10 left-10 h-24 w-40 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4"
           >
              <div className="h-2 w-12 rounded bg-zinc-400/20"></div>
              <div className="mt-2 space-y-2">
                 <div className="h-1 w-full rounded bg-zinc-400/10"></div>
                 <div className="h-1 w-2/3 rounded bg-zinc-400/10"></div>
              </div>
           </motion.div>

           <motion.div 
             animate={{ y: [0, 15, 0] }} 
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-10 right-10 h-32 w-32 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center"
           >
              <div className="text-4xl">✨</div>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

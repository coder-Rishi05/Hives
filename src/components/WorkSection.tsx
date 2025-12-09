import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CLIENT_LOGOS, CASE_STUDIES } from '../../constants';

const WorkSection: React.FC = () => {
  return (
    <section id="work" className="relative py-24 overflow-hidden">
      {/* Marquee */}
      <div className="mb-24 flex w-full overflow-hidden border-y border-zinc-100 bg-zinc-50/50 py-10 dark:border-zinc-800 dark:bg-zinc-900/20">
        <div className="flex animate-marquee space-x-24 whitespace-nowrap">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
            <span
              key={i}
              className="text-4xl font-bold uppercase tracking-tighter text-zinc-300 dark:text-zinc-700"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Selected Work
          </h2>
        </div>

        <div className="space-y-32">
          {CASE_STUDIES.map((study) => (
            <ParallaxCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ParallaxCard: React.FC<{ study: any }> = ({ study }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity: scrollYProgress }}
      className="group relative h-[60vh] w-full overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0 z-0">
        <motion.img
            style={{ y }}
            src={study.image}
            alt={study.title}
            className="h-[120%] w-full object-cover brightness-75 transition-all duration-700 group-hover:brightness-100 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <div className="flex gap-2 mb-4">
            {study.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-white border border-white/20 rounded-full backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-2">{study.client}</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white">{study.title}</h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WorkSection;

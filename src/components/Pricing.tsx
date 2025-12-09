import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../../constants';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32 px-6 bg-surface dark:bg-black relative overflow-hidden">
        {/* Ambient background glow for section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-8">
            Choose the pace that suits your team. Pause or cancel anytime.
          </p>
          
          <div className="inline-flex items-center p-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? 'bg-foreground text-background shadow-md' : 'text-zinc-500 hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual ? 'bg-foreground text-background shadow-md' : 'text-zinc-500 hover:text-foreground'
              }`}
            >
              Quarterly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 flex flex-col h-full border transition-all duration-300 ${
                tier.highlight
                  ? 'bg-zinc-900 text-white border-zinc-800 ring-1 ring-white/20 shadow-2xl scale-105 z-10'
                  : 'bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 text-foreground'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {isAnnual ? tier.price.quarterly : tier.price.monthly}
                  </span>
                  {tier.price.monthly !== 'Custom' && (
                    <span className={`ml-2 text-sm ${tier.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      /{isAnnual ? 'quarter' : 'mo'}
                    </span>
                  )}
                </div>
                <p className={`mt-4 text-sm ${tier.highlight ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className={`h-5 w-5 mr-3 shrink-0 ${tier.highlight ? 'text-blue-400' : 'text-zinc-900 dark:text-zinc-100'}`} />
                    <span className="text-sm font-medium opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 ${
                  tier.highlight
                    ? 'bg-white text-black'
                    : 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-100'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

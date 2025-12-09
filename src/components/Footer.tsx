import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-24 pb-12 px-6 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-6">
              Let's Build.
            </h2>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-md">
              Ready to transform your digital presence? We are currently accepting new partners for Q4.
            </p>
            <button className="mt-8 flex items-center gap-2 text-lg font-semibold underline underline-offset-4 decoration-2 hover:text-blue-500 transition-colors">
              Schedule a Discovery Call <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:pl-24">
            <div>
              <h4 className="font-bold mb-4">Sitemap</h4>
              <ul className="space-y-3 text-zinc-500 dark:text-zinc-400">
                <li><a href="#" className="hover:text-foreground transition-colors">Home</a></li>
                <li><a href="#work" className="hover:text-foreground transition-colors">Work</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Socials</h4>
              <ul className="space-y-3 text-zinc-500 dark:text-zinc-400">
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 dark:border-zinc-900 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} True Hives Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-foreground">Privacy Policy</a>
             <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

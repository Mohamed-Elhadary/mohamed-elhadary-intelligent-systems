import { Mail, Phone, Linkedin, Github } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="section-padding border-t border-border/50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-heading font-bold gradient-text mb-4">Let's Connect</h2>
      <p className="text-muted-foreground mb-8">
        Open to opportunities in AI, Data Science, and Product Management.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <a
          href="mailto:mohamedelhadary001@gmail.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <Mail size={16} /> mohamedelhadary001@gmail.com
        </a>
        <a
          href="tel:+201067073433"
          className="inline-flex items-center gap-2 border border-border rounded-lg px-5 py-2.5 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
        >
          <Phone size={16} /> +20 106 707 3433
        </a>
      </div>
      <div className="flex justify-center gap-4 mb-10">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        © 2026 Mohamed Elhadary. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import mohamedPhoto from "@/assets/mohamed-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-heading font-medium text-sm tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4">
            Mohamed{" "}
            <span className="gradient-text">Elhadary</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-heading font-light mb-6">
            Data Scientist · AI Engineer · Product Manager
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Building intelligent systems at the intersection of AI, data, and product
            — currently at the Central Bank of Egypt.
          </p>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
            <MapPin size={16} className="text-primary" />
            <span>Cairo, Egypt</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:mohamedelhadary001@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={16} /> Get in Touch
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl scale-110" />
            <img
              src={mohamedPhoto}
              alt="Mohamed Elhadary"
              className="relative w-72 h-72 md:w-80 md:h-80 object-cover object-top rounded-2xl border-2 border-primary/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

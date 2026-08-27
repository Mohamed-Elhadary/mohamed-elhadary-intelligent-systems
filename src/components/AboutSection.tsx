import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Brain, Briefcase } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "BS CS & Engineering", desc: "German University in Cairo — 2020-2025, Very Good (A+ Thesis)" },
  { icon: Brain, label: "AI & Machine Learning", desc: "RAG, NLP, Deep Learning, LangChain" },
  { icon: Briefcase, label: "Product Thinking", desc: "Agile, Stakeholder Management, Strategy" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="About Me" />
      <AnimatedSection>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10 text-lg">
          CS & Engineering graduate from the German University in Cairo. Currently a Data Scientist
          in the CBE Evolve Graduate Program, designing enterprise AI systems for regulatory
          compliance. Passionate about machine learning, product thinking, and business strategy.
        </p>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <AnimatedSection key={h.label} delay={i * 0.1}>
            <div className="glass-card glow-border p-6 h-full">
              <h.icon className="text-primary mb-4" size={28} />
              <h3 className="font-heading font-semibold text-foreground mb-2">{h.label}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

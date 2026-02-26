import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "Central Bank of Egypt",
    role: "Data Scientist — Evolve Graduate Program",
    period: "Feb 2026 – Present",
    bullets: [
      "AI-powered regulatory intelligence assistant using RAG architecture",
      "Compliance across Basel, IFRS, AML, and KYC frameworks",
      "NLP techniques for institutional regulatory alignment",
    ],
  },
  {
    company: "Awe Research",
    role: "Digital Analyst",
    period: "Feb 2026 – Present",
    bullets: [
      "Digital analytics & market research across key MENA markets",
      "Built Power BI dashboards tracking consumer engagement",
    ],
  },
  {
    company: "Konecta",
    role: "Data Analyst Trainee & Team Leader",
    period: "May 2025",
    bullets: [
      "Led team to 3rd place — Northwind dataset analysis",
      "Comprehensive Power BI dashboard for sales optimization",
    ],
  },
  {
    company: "AIESEC",
    role: "Product Manager & Team Leader",
    period: "2024 – 2025",
    bullets: [
      "Managed product roadmap for global talent program",
      "Awarded Best AIESECer at IGNITE Conference",
    ],
  },
  {
    company: "STEM Entrepreneurship Center",
    role: "Data Analyst & Product Manager",
    period: "April 2025",
    bullets: ["Data-driven product solutions for Saudi advertising company"],
  },
  {
    company: "German University in Cairo",
    role: "Junior Teaching Assistant",
    period: "2024 – 2025",
    bullets: ["Mentored students in CS projects and technical sessions"],
  },
  {
    company: "El Sewedy Industries",
    role: "Engineering Intern",
    period: "Aug 2024",
    bullets: ["Industrial engineering processes & project management"],
  },
  {
    company: "ACT",
    role: "Full Stack Dev Intern",
    period: "July 2024",
    bullets: ["Full-stack development with international teams"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Experience" subtitle="My professional journey so far." />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="relative pl-8 md:pl-10">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/20 border-2 border-primary glow-dot" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="font-heading font-semibold text-foreground">{exp.company}</h3>
                  <span className="text-xs text-primary font-medium">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{exp.role}</p>
                <ul className="space-y-1">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;

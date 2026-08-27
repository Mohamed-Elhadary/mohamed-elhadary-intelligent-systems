import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "Central Bank of Egypt",
    role: "Data Scientist — Evolve Graduate Program",
    period: "Feb 2026 – Aug 2026",
    bullets: [
      "Built Saeed/Maat, the Central Bank's first internal AI-powered regulatory chatbot — front end, back end, APIs, and retrieval pipeline — using Streamlit, FastAPI, RAG, and Python",
      "Deployed across Audit, Customer Protection, and Competition Protection departments",
      "Architected isolated per-department mini-RAG pipelines for real-time regulatory lookup across Basel, AML/KYC, and CBE circulars",
      "Designed a legal translation pipeline evaluating seven approaches, landing on a pipeline with 8x runtime improvement at $0.06/document",
      "Built a dual evaluation framework: reference-based (BLEU, chrF++, BERTScore up to 0.93) and reference-free GPT-4o-as-judge scoring",
      "Scaled translation coverage from German-only to seven languages after strong initial results",
    ],
  },
  {
    company: "Awe Research",
    role: "Digital Analyst",
    period: "Feb 2026 – May 2026",
    bullets: [
      "Delivered digital analytics and market research insights for regional expansion across key MENA markets",
      "Built data visualization dashboards tracking consumer engagement and digital performance metrics across multiple markets",
      "Synthesized multi-market data to identify growth opportunities and optimize digital strategies for diverse regional audiences",
    ],
  },
  {
    company: "Konecta",
    role: "Data Analyst Trainee — Team Leader",
    period: "May 2025",
    bullets: [
      "Led team to 3rd place in graduation project analyzing the Northwind dataset",
      "Built a comprehensive Power BI dashboard for sales optimization and revenue trends",
    ],
  },
  {
    company: "AIESEC — Incoming Global Talent",
    role: "Product Manager & Team Leader",
    period: "2024 – 2025",
    bullets: [
      "Managed product roadmap and led cross-functional team operations for a global talent acquisition program",
      "Conducted stakeholder interviews with early-stage startups to open internship and full-time opportunities",
      "Awarded Best AIESECer at IGNITE conference and Best Member of the IGT function",
    ],
  },
  {
    company: "STEM Entrepreneurship Center",
    role: "Data Analyst Intern & Product Manager",
    period: "April 2025",
    bullets: [
      "Developed data-driven product solutions for a Saudi Arabian advertising company",
    ],
  },
  {
    company: "German University in Cairo",
    role: "Junior Teaching Assistant",
    period: "2024 – 2025",
    bullets: [
      "Mentored students in computer science projects and facilitated technical learning sessions",
    ],
  },
  {
    company: "El Sewedy Industries",
    role: "Engineering Intern",
    period: "Aug 2024",
    bullets: [
      "Gained hands-on experience in industrial engineering processes and project management workflows",
    ],
  },
  {
    company: "ACT (Advanced Computer Technology)",
    role: "Full Stack Development Intern",
    period: "July 2024",
    bullets: [
      "Developed full-stack applications and collaborated with international development teams",
    ],
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

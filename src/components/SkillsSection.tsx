import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    category: "Technical Skills",
    skills: [
      "Python",
      "Java",
      "SQL",
      "NoSQL",
      "Git/GitHub",
      "Power BI",
      "Excel",
      "Microsoft Project",
      "VS Code",
      "Eclipse",
      "RAG Architecture",
      "LangChain",
      "Vector Databases",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Retrieval-Augmented Generation",
      "Reinforcement Learning",
      "Business Intelligence",
      "Statistical Analysis",
      "Data Visualization",
      "Feature Engineering",
      "Regulatory Analytics",
      "Market Research",
    ],
  },
  {
    category: "Product & Leadership",
    skills: [
      "Agile Methodologies",
      "Product Roadmapping",
      "Stakeholder Management",
      "Team Leadership",
      "Strategic Planning",
      "KPI Tracking",
      "Data-Driven Decision Making",
      "Cross-Functional Collaboration",
    ],
  },
  {
    category: "Soft Skills & Languages",
    skills: [
      "Leadership",
      "Problem-Solving",
      "Communication",
      "Teamwork",
      "Critical Thinking",
      "Adaptability",
      "Time Management",
      "Negotiation",
      "Arabic (Native)",
      "English (Professional)",
      "German (A2)",
    ],
  },
];

const certifications = [
  {
    category: "Machine Learning & AI",
    items: [
      "Machine Learning Specialization — DeepLearning.AI & Stanford Online",
      "Deep Learning Specialization (5 courses) — DeepLearning.AI",
      "AWS Educate Machine Learning Foundations",
      "Introducing Generative AI with AWS — Udacity & AWS",
      "AI Career Essentials (AICE Program) — ALX Africa",
      "Elements of AI in Business — Helsinki University",
    ],
  },
  {
    category: "Product & Business",
    items: [
      "Product Management — Microsoft & Sprints",
      "Product Manager — STEM Entrepreneurship Center",
      "How to Grow Your Business the Right Way — Virtual Courses Now",
      "National Entrepreneurship Program InnovEgypt — ITIDA & TIEC",
      "3 Ushering Certificates — GUC",
    ],
  },
  {
    category: "Data Analytics",
    items: [
      "Data Analysis Course — Microsoft & Sprints",
      "Data Analytics Training — ITIDA & Microsoft",
      "EYouth AI Data Analytics Bootcamp — EYouth",
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Skills & Certifications" />

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {skillGroups.map((group, i) => (
          <AnimatedSection key={group.category} delay={i * 0.08}>
            <div className="glass-card p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-accent-foreground border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <h3 className="font-heading font-semibold text-foreground mb-6 text-lg">Certifications</h3>
      </AnimatedSection>
      <div className="space-y-8">
        {certifications.map((certGroup, i) => (
          <AnimatedSection key={certGroup.category} delay={i * 0.08}>
            <h4 className="font-heading font-medium text-sm uppercase tracking-wider text-primary mb-3">
              {certGroup.category}
            </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {certGroup.items.map((cert) => (
                <div
                  key={cert}
                  className="text-sm text-muted-foreground border border-border/50 rounded-lg px-4 py-3 hover:border-primary/30 transition-colors"
                >
                  {cert}
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

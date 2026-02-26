import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    category: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Deep Learning", "RAG", "LangChain"],
  },
  {
    category: "Data & Analytics",
    skills: ["Power BI", "SQL", "Pandas", "NumPy", "Feature Engineering", "Statistical Analysis", "Data Visualization"],
  },
  {
    category: "Product & Leadership",
    skills: ["Product Management", "Agile", "Stakeholder Management", "Strategic Planning", "Team Leadership"],
  },
  {
    category: "Development",
    skills: ["Java", "Git/GitHub", "Full Stack Dev", "NoSQL", "Vector Databases"],
  },
];

const certifications = [
  "ML Specialization — DeepLearning.AI & Stanford",
  "Deep Learning Specialization (5 courses)",
  "AWS ML Foundations",
  "Generative AI with AWS — Udacity",
  "Product Management — Microsoft & Sprints",
  "Data Analytics — Microsoft & ITIDA",
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="text-sm text-muted-foreground border border-border/50 rounded-lg px-4 py-3 hover:border-primary/30 transition-colors"
            >
              {cert}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SkillsSection;

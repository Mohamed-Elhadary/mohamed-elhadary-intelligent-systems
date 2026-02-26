import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "AI Regulatory Intelligence Assistant",
    tech: "Python, RAG, NLP, LangChain",
    desc: "Enterprise AI for conversational access to compliance frameworks at CBE.",
  },
  {
    title: "Sentiment Analysis in Tourism",
    tech: "Python, NLP, Deep Learning",
    desc: "Bachelor Thesis — 7 ML/DL models for customer sentiment analysis. Grade: A+",
  },
  {
    title: "Gold Price Prediction",
    tech: "Python, XGBoost, NLP",
    desc: "Beltone AI Hackathon — ML model predicting daily gold prices using multi-source data.",
  },
  {
    title: "E-Commerce Performance Dashboard",
    tech: "Power BI",
    desc: "Stride Group — Integrated sales, marketing & finance dashboard (ROI, CAC, CLV).",
  },
  {
    title: "Telecom Competitive Intelligence",
    tech: "Excel",
    desc: "Analyzed 4 operators across 5-7 platforms, 180+ record dataset with executive dashboard.",
  },
  {
    title: "Spotify Music Classification",
    tech: "Python, Scikit-learn, PCA, SVM",
    desc: "Audio feature classification with Logistic Regression, Random Forest, and SVM.",
  },
  {
    title: "Salary Prediction Model",
    tech: "Python, Pandas, Scikit-learn",
    desc: "Regression model predicting salaries for data professionals.",
  },
  {
    title: "Database Management System",
    tech: "Java",
    desc: "CRUD system with iterators and Octree indexing for efficient data operations.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Projects" subtitle="A selection of things I've built." />
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <div className="glass-card p-6 h-full hover:border-primary/30 transition-colors duration-300 group">
              <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-primary/80 font-medium mb-3">{p.tech}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

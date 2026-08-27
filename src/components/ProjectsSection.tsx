import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Regulatory RAG Architecture — Central Bank of Egypt",
    tech: "Python, LangChain, Vector Databases, FastAPI",
    desc: "Designed the retrieval-layer architecture for CBE's regulatory assistant: department-isolated vector stores, legal-document chunking, and embedding-model benchmarking. Built the evaluation harness used to validate translation quality across seven languages.",
  },
  {
    title: "Sentiment Analysis in Tourism Industry",
    tech: "Python, NLP, Deep Learning",
    desc: "Bachelor Thesis — developed and evaluated seven ML/DL models for customer sentiment analysis. Grade: A+",
  },
  {
    title: "Project Portfolio Management Dashboard",
    tech: "Power BI",
    desc: "Interactive dashboard tracking project KPIs (PV, EV, AC, variances) enabling data-driven portfolio management and resource allocation.",
  },
  {
    title: "Business Performance E-Commerce Dashboard",
    tech: "Power BI",
    desc: "Stride Group — integrated sales, marketing & finance dashboard using KPIs (ROI, CAC, CLV) to optimize business performance.",
  },
  {
    title: "Competitive Intelligence — Telecom Sector",
    tech: "Excel",
    desc: "Analyzed Egyptian telecom market across 4 operators and 5-7 platforms, building a 180+ record dataset with executive dashboard.",
  },
  {
    title: "Gold Price Prediction",
    tech: "Python, XGBoost, NLP",
    desc: "Beltone AI Hackathon at AUC — ML model predicting daily gold prices using multi-source economic data and time-series analysis.",
  },
  {
    title: "Spotify Music Classification",
    tech: "Python, Scikit-learn, PCA, SVM",
    desc: "Audio feature classification with Logistic Regression, Random Forest, SVM, and PCA-based dimensionality reduction.",
  },
  {
    title: "Salary Prediction Model",
    tech: "Python, Pandas, Scikit-learn",
    desc: "Regression model predicting salaries for data professionals through data analysis and feature engineering.",
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

import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const achievements = [
  { emoji: "🥉", text: "3rd Place — Konecta Data Analysis 2025" },
  { emoji: "🥈", text: "2nd Place — EYouth AI Data Analysis 2025" },
  { emoji: "❤️", text: "Crowd Favourite — ITIDA & Stakpak AI Agent Hackathon 2025" },
  { emoji: "🏆", text: "Best AIESECer — IGNITE Conference" },
  { emoji: "⭐", text: "IEEE Member of the Month" },
  { emoji: "🌍", text: "National Entrepreneurship Program — InnovEgypt Team Leader" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Achievements" />
      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <AnimatedSection key={i} delay={i * 0.06}>
            <div className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors">
              <span className="text-2xl">{a.emoji}</span>
              <span className="text-sm text-foreground">{a.text}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;

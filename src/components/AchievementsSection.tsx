import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const competitions = [
  { emoji: "🥉", text: "3rd Place — Data Analysis Graduation Project, Konecta (Team Leader)" },
  { emoji: "🥈", text: "2nd Place — AI Data Analysis Competition, EYouth" },
  { emoji: "❤️", text: "Crowd Favourite — AI Agent Hackathon, ITIDA & Stakpak (Team Leader)" },
  { emoji: "🏅", text: "Participant — Beltone AI Hackathon at AUC (Team Leader)" },
  { emoji: "🏅", text: "Participant — Infomineo Competition at GUC (Team Leader)" },
  { emoji: "🏅", text: "Participant — GUC Athlete Competition" },
];

const leadership = [
  { emoji: "🚀", text: "National Entrepreneurship Program — InnovEgypt Team Leader, ITIDA & TIEC" },
  { emoji: "⭐", text: "Best AIESECer — IGNITE Conference" },
  { emoji: "⭐", text: "Best Member — AIESEC Incoming Global Talent function" },
  { emoji: "⭐", text: "IEEE GUC Branch — Member of the Month" },
  { emoji: "🤝", text: "AYB — Best Volunteer across Atfeh, Sogharna, Kobarna, and Combo events" },
  { emoji: "❤️", text: "Misr El Kheir — Volunteered in Ramadan packings and community support" },
  { emoji: "👥", text: "Shaghaf — Head of Coaches and Organisers (2021-2022)" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Achievements & Leadership" />

      <AnimatedSection>
        <h3 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
          Competition Awards
        </h3>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {competitions.map((a, i) => (
          <AnimatedSection key={i} delay={i * 0.06}>
            <div className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors">
              <span className="text-2xl">{a.emoji}</span>
              <span className="text-sm text-foreground">{a.text}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <h3 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
          Leadership & Volunteering
        </h3>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 gap-4">
        {leadership.map((a, i) => (
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

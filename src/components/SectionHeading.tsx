import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <AnimatedSection className="mb-12 md:mb-16">
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
      <span className="gradient-text">{title}</span>
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-xl">{subtitle}</p>
    )}
  </AnimatedSection>
);

export default SectionHeading;

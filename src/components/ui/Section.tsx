interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900 ${className}`}
    >
      {children}
    </section>
  );
}
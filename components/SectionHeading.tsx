import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="border-b border-border pb-6">
        {index && (
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {index}
          </p>
        )}
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {children}
        </h2>
      </div>
    </Reveal>
  );
}

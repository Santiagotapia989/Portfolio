import { Reveal } from "@/components/Reveal";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {children}
        <span
          aria-hidden="true"
          className="mt-3 block h-1 w-16 rounded-full bg-accent"
        />
      </h2>
    </Reveal>
  );
}

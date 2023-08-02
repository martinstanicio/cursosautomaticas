import type { CarbonIconType } from "@carbon/icons-react";

export default function Benefit({
  icon: Icon,
  title,
  children,
}: {
  icon: CarbonIconType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="max-w-[30ch]">
      <div className="mb-2 flex items-center gap-2">
        <Icon size={"glyph"} className="aspect-square w-8 fill-accent-500" />
        <h3>{title}</h3>
      </div>
      <p>{children}</p>
    </article>
  );
}

import { CarbonIconType } from "@carbon/icons-react/lib/CarbonIcon";

import Heading from "./Heading";

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
    <article className="max-w-[30ch] space-y-2">
      <div className="flex items-center gap-2">
        <Icon size={32} className="fill-accent-500" />
        <Heading as="h3" size={3}>
          {title}
        </Heading>
      </div>
      <p>{children}</p>
    </article>
  );
}

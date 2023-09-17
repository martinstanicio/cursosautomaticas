import { Calendar, Time } from "@carbon/icons-react";
import { twMerge } from "tailwind-merge";

export default function Datetime({
  datetime,
  className,
}: {
  datetime: Date;
  className?: string;
}) {
  return (
    <time
      className={twMerge(
        "grid w-full grid-cols-2 gap-4 fill-accent-500 text-sm text-neutral-50",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Calendar size={32} className="fill-inherit" />
        {datetime.toLocaleDateString("es", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </div>
      <div className="flex items-center gap-2">
        <Time size={32} className="fill-inherit" />
        {datetime.toLocaleTimeString("es", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </time>
  );
}

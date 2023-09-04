import { Calendar, Time } from "@carbon/icons-react";

export default function Datetime({ datetime }: { datetime: Date }) {
  return (
    <time className="grid w-full grid-cols-2 gap-4 text-sm text-neutral-50">
      <div className="flex items-center gap-2">
        <Calendar size={32} className="fill-accent-500" />
        {datetime.toLocaleDateString("es", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </div>
      <div className="flex items-center gap-2">
        <Time size={32} className="fill-accent-500" />
        {datetime.toLocaleTimeString("es", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </time>
  );
}

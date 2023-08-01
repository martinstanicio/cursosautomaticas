export default function Stat({
  value,
  children,
}: {
  value: number | string;
  children: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-4xl font-bold text-neutral-50">{value}</span>
      <p className="max-w-[20ch]">{children}</p>
    </div>
  );
}

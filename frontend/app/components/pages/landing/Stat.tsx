interface StatProps {
  stat: string;
  title: string;
  desc: string;
}

export default function Stat({stat, title, desc}: StatProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold max-w-sm text-center sm:text-2xl">
        <span className="text-[#0080DB] font-bold">{stat}</span> {title}
      </h3>
      <p className="max-w-xs text-center mt-2">
        {desc}
      </p>
    </div>
  );
}
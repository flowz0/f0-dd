interface HeaderProps {
  children: React.ReactNode;
  subtitle?: string;
  gradientBg?: boolean;
}

export default function Header({ children, subtitle, gradientBg }: HeaderProps) {
  return (
    <header className={`text-[#333333] ${gradientBg ? "bg-gradient-to-b from-[#E6E6E6] to-[#ffffff]" : ""} pt-20`}>
      <div className="px-6 pt-12 pb-8 max-w-7xl mx-auto md:py-20">
        <h1 className="text-4xl font-semibold text-center sm:text-5xl">
          {children}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-lg mx-auto text-center">{subtitle}</p>
        ) : ""}
      </div>
    </header>
  );
}
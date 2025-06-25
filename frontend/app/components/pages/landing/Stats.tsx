import Stat from "./Stat";

export default function Stats() {
  return (
    <section className="bg-[#ffffff] py-16 px-6 max-w-7xl mx-auto rounded-3xl flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center flex-col gap-16 md:flex-row">
        <Stat
          stat="3,000+"
          title="Vents Cleaned"
          desc="We&apos;ve worked in everything from apartments to big custom homes."
        />
        <Stat
          stat="100%"
          title="Flat-Rate Pricing"
          desc="What we quote is what you pay. No surprises, no pressure."
        />
        <Stat
          stat="5-Star"
          title="Rated Across KC"
          desc="Trusted in over 25 cities across Missouri and Kansas."
        />
      </div>
    </section>
  );
}
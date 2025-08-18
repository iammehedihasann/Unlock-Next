import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col
     items-center justify-center relative overflow-hidden 
     mx-auto py-10 md:py-0  "
    >
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className="mt-10 md:mt-10 text-4xl md:text-7xl font-bold
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Master the art of Music{" "}
        </h1>
        <p className="text-neutral-300 text-base md:text-lg mt-4 font-normal mx-auto max-w-lg">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you a beginner oe looking to refine your
          skills, join us to unlock your true potential
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <Button>Explore Courses</Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

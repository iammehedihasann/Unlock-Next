import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[50rem] w-full rounded-md flex flex-col
     items-center justify-center relative overflow-hidden 
     mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className="mt-20 md:mt-10 text-4xl md:text-8xl font-bold
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Master the Art of Music
        </h1>
        
        <p className="text-neutral-300 text-base md:text-lg mt-4 font-normal mx-auto max-w-lg">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">10+</div>
            <div className="text-sm text-neutral-400">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-400">1000+</div>
            <div className="text-sm text-neutral-400">Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-400">50+</div>
            <div className="text-sm text-neutral-400">Instructors</div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
          
          <Link href="/contact">
            <Button
              borderRadius="1.75rem"
              className="bg-transparent border-2 border-neutral-600 text-white hover:bg-neutral-800 transition-colors"
              borderClassName="bg-[radial-gradient(#06b6d4_40%,transparent_60%)]"
            >
              Get Started Free
            </Button>
          </Link>
        </div>

        {/* Featured Achievement */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-neutral-700">
            <p className="text-neutral-300 text-sm mb-2">🏆 Award Winning Platform</p>
            <p className="text-white font-semibold">&quot;Best Online Music Education Platform 2024&quot;</p>
            <p className="text-neutral-400 text-xs mt-1">- Music Education Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

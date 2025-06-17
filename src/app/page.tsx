'use client';
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main>
      <div>
        <div className="block">
          <Hero />
        </div>
        {/* Quote Section */}
        <div className="flex flex-col mt-8  justify-center items-center">
          <div className="">
            <div className="relative flex">
              <p className="font-medium text-xl border border-gray py-2.5 px-5">
                With great power comes great electricity bill
                <span className="absolute text-4xl text-gray -top-3 left-2 bg-background h-4">&quot;</span>
              </p>
            </div>
            <div className="relative flex self-end">
              <span className="font-medium text-xl border border-gray border-t-0 py-2.5 px-5 self-end">
                - Dr. Who
                <span className="absolute text-4xl text-gray -top-3 right-2 bg-background h-4">&quot;</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import AboutMe from "./components/About-me/AboutMe";
import Projects from "./components/cards/Projects";
import Skills from "./components/cards/Skills";
import Contacts from "./components/contacts/Contacts";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <section className="flex flex-col pl-5 pr-5">
        <Hero />
      </section>
      <section className="flex-1 pl-5 pr-5">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <div className="relative flex">
              <p className="font-medium text-medium border border-gray py-5 px-5">
                With great power comes great electricity bill
                <span className="absolute text-4xl text-gray -top-3 left-2 bg-background h-4">&quot;</span>
              </p>
            </div>
            <div className="relative flex self-end">
              <p className="font-medium text-medium border border-gray border-t-0 py-5 px-5">
                - Dr. Who
                <span className="absolute text-4xl text-gray -top-3 right-2 bg-background h-4">&quot;</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <Projects />
      </section>
      <section className="pl-5 pr-5">
        <Skills />
      </section>
      <section className="pl-5 pr-5">
        <AboutMe />
      </section>
      <section className="pl-5 pr-5">
        <Contacts />
      </section>
    </main>
  );
}

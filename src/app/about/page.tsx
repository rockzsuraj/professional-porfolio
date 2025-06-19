import { aboutMe } from "@/lib/constants";
import Heading from "../components/heading/Heading";
import PageHeading from "../components/heading/PageHeading";
import About from "../components/shared/About";
import SkillCard from "../components/ui/SkillCard";
import AboutMeGraphics from "../graphics/AboutMeGraphics";
import SkillGraphics from "../graphics/SkillGraphics";

const about = () => {
    return (
        <div className="pl-5 pr-5">
            <div>
                <PageHeading title="about-me" />
            </div>
            <div>
                <p className="text-sm font-light pt-2">Who am i?</p>
            </div>
            <div className='flex flex-col md:flex-row'>
                <About />
                <div className='md:transform md:-translate-y-20  max-w-70 md:max-w-full'>
                    <AboutMeGraphics />
                </div>
            </div>
            <div className="pt-30">
                <div>
                    <Heading title="skills" />
                </div>
                <div className='flex mt-10 flex-col lg:flex-row justify-between'>
                    <div className=''>
                        <SkillCard />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Heading title="my-fun-facts" />
                </div>
                <div className="flex gap-6 flex-wrap pt-5">
                    {
                        aboutMe.map(me => (
                            <div className="border-1 border-gray">
                                <p className="text-sm font-extralight p-3">
                                    {me}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>)
}

export default about;
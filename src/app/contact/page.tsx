import { icons } from "@/lib/constants";
import Heading from "../components/heading/Heading";
import PageHeading from "../components/heading/PageHeading";
import Icon from "../components/icons/icons";
import MessageMe from "../components/contacts/MessageMe";

const contact = () => {
    return (
        <div className="pl-5 pr-5">
            <div>
                <PageHeading title="contacts" />
            </div>
            <div className="pt-3 text-sm font-light">
                Who am i?
            </div>
            <div className="">
                <div className='flex flex-col md:flex-row justify-between items-baseline'>
                <div>
                    <p className='text-gray pt-5 font-light'>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                </div>
                <div className='mt-10 md:mt-0'>
                    <MessageMe />
                </div>
            </div>
            </div>
            <div className="pt-5">
                <Heading title="all-media" />
            </div>
            <div className="flex flex-row pt-5">
                {icons.map(icon => (
                    <div key={icon.alt}>
                            <Icon url={icon.url} alt={icon.alt} src={icon.src} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default contact;
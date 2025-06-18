import Icon from "../icons/icons";
import Button from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-20 flex flex-col md:flex-row ">
      {/* Left Column - Text Content */}
      <div className="flex flex-col">
        <h1 className="font-semibold text-2xl tracking-wide">
          Suraj is a{' '}
          <span className="text-primary">
            full stack developer.
          </span>
        </h1>
        <p className="pt-5 text-base text-gray">
          He crafts responsive websites, apps for iOS and Android platforms, and backend servers where technologies meet creativity.
        </p>
        <div>
          <Button
            onClick={(e) => console.log('Clicked', e)}
            disabled={false}
            className="mt-6"
          >
            Contact Me!!
          </Button>
        </div>
      </div>
      <div>
        {/* Right Column - Image and Quote */}
        <div className="flex flex-col md:pl-20  pb-0 mb-0 h-80">
          {/* Decorative Border Elements */}
          <div className="flex flex-row pb-0 mb-0">
            <div className="w-20 h-30 border border-primary translate-y-1/3 flex items-center justify-end">
              <div className="w-10 h-10 border border-primary border-r-0" />
            </div>
            <div className="w-20 h-30 border border-primary flex items-center justify-start">
              <div className="w-10 h-10 border border-primary border-l-0" />
            </div>
          </div>
          <div className="relative">
            {/* Image */}
            <div className="w-80 h-70 transform -translate-y-20 ">
              <Image
                src="/image/pic.png"
                alt="Profile picture"
                width={900}
                height={900}
                style={{ content: '' }}
              />
              <div className="w-20 h-20 transform translate-x-60 -translate-y-28">
                <Icon src="dots.svg" alt="Decorative dots" width={70} height={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
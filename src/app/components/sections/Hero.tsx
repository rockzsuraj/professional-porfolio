import { useState } from "react";
import Icon from "../icons/icons";
import Button from "../ui/button";
import Image from "next/image";
import ContactForm from "../form/ContactForm";
import ContactModel from "../shared/ContactModel";

export default function Hero() {
  return (
    <section className="pt-20 flex flex-col md:flex-row">
      <div className="">
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl tracking-wide">
            Suraj is a{' '}
            <span className="text-primary">
              full stack developer.
            </span>
          </h1>
          <p className="pt-5 text-base text-gray">
            He crafts responsive websites, apps for iOS and Android platforms, and backend servers where techStacksnologies meet creativity.
          </p>
          <ContactModel />
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col md:pl-20  pb-0 mb-0 h-80">
          <div className="flex flex-row pb-0 mb-0">
            <div className="w-20 h-30 border border-primary translate-y-1/3 flex items-center justify-end">
              <div className="w-10 h-10 border border-primary border-r-0" />
            </div>
            <div className="w-20 h-30 border border-primary flex items-center justify-start">
              <div className="w-10 h-10 border border-primary border-l-0" />
            </div>
          </div>
          <div className=" w-70 md:w-90 h-60 transform -translate-y-40 translate-x-15">
            <Image
              src="/image/pic.png"
              alt="Profile picture"
              width={300}
              height={300}
            />
            <div className="flex items-center border-1 max-w-65 px-2 py-1 border-gray">
              <p className="bg-primary h-3 w-3 mr-1" />
              <p className="text-gray text-sm fontsize-10">Currently working on <span className="text-white">Portfolio</span></p>
            </div>
            <div className=" w-15 h-15 transform translate-x-55 -translate-y-32 md:-translate-y-30 md:translate-x-60">
              <Icon src="dots.svg" alt="Decorative dots" width={60} height={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
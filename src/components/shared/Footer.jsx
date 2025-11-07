import { logo } from '@/assets';
import { linkSections } from '@/utils';
import Image from 'next/image';
import React from 'react'


const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-background">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-muted text-muted">
        <div>
          <Image
            src={logo}
            alt="Yesho Intelligence Logo"
            width={180}
            height={80}
          />
          <p className="max-w-[410px] mt-6">
            YESHO Intelligence is a leading expert in the field of garment and textile
            mending. We have built a reputation as a trusted partner for businesses
            seeking high-quality garment restoration services.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-foreground md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-sm text-muted">
        Copyright {new Date().getFullYear()} ©{" "}
        <span className="hover:text-foreground transition-colors">
          Yesho Intelligence
        </span>{" "}
        All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer

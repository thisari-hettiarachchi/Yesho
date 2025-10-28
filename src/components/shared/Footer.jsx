import { logo } from '@/assets';
import { linkSections } from '@/utils';
import Image from 'next/image';
import React from 'react'


const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-700">
        <div>
          <Image
            src={logo}
            alt="Yesho Intelligence Logo"
            width={180}
            height={80}
          />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-700 md:mb-5 mb-2">
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
      <p className="py-4 text-center text-sm md:text-sm text-gray-700">
        Copyright {new Date().getFullYear()} ©{" "}
        <span className="hover:text-gray-800 transition-colors">
          Yesho Intelligence
        </span>{" "}
        All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer

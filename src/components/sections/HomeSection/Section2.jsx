import { compliance } from "@/assets";
import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div>
      <div className="flex">
        <Image
          src={compliance}
          alt="compliance"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Section2;

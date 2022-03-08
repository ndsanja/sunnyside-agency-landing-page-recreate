import Image from "next/image";
import React from "react";

const Galery = () => {
  return (
    <>
      <div className="hidden md:grid md:grid-cols-4">
        <Image
          className="w-full h-full object-cover object-center"
          src="/desktop/image-gallery-milkbottles.jpg"
          alt="milky"
          layout="responsive"
          height={894}
          width={720}
        />
        <Image
          className="w-full h-full object-cover object-center"
          src="/desktop/image-gallery-orange.jpg"
          alt="orange"
          layout="responsive"
          height={894}
          width={720}
        />
        <Image
          className="w-full h-full object-cover object-center"
          src="/desktop/image-gallery-cone.jpg"
          alt="cone"
          layout="responsive"
          height={894}
          width={720}
        />
        <Image
          className="w-full h-full object-cover object-center"
          src="/desktop/image-gallery-sugarcubes.jpg"
          alt="sugar"
          layout="responsive"
          height={894}
          width={720}
        />
      </div>
      <div className="grid grid-cols-2 md:hidden">
        <Image
          className="w-full h-full object-cover object-center"
          src="/mobile/image-gallery-milkbottles.jpg"
          alt="milky"
          layout="responsive"
          height={376}
          width={376}
        />
        <Image
          className="w-full h-full object-cover object-center"
          src="/mobile/image-gallery-orange.jpg"
          alt="orange"
          layout="responsive"
          height={376}
          width={376}
        />
        <Image
          className="w-full h-full object-cover object-center"
          src="/mobile/image-gallery-cone.jpg"
          alt="cone"
          layout="responsive"
          height={376}
          width={376}
        />
        <Image
          className="w-full h-full object-cover object-center"
          src="/mobile/image-gallery-sugar-cubes.jpg"
          alt="sugar"
          layout="responsive"
          height={376}
          width={376}
        />
      </div>
    </>
  );
};

export default Galery;

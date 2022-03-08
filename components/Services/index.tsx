import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-primary-yellow/40">
        <div className="aspect-square  overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center"
            src="/mobile/image-transform.jpg"
            alt="image-1"
            height={750}
            width={624}
            layout="responsive"
          />
        </div>
        <div className="md:order-first text-center  px-6 py-16 md:py-0 md:my-auto space-y-8">
          <h2 className="font-fraunces text-4xl text-neutral-very-dark-desaturated-blue">
            Transform your brands
          </h2>
          <p className="text-base text-neutral-very-dark-grayish-blue font-barlow">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            porro repellendus accusantium eligendi, quas, amet alias sint odit
            sequi itaque, asperiores veniam
          </p>
          <div>
            <a
              className="uppercase tracking-wide font-bold font-fraunces text-neutral-very-dark-desaturated-blue"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-primary-yellow/40 ">
        <div className="aspect-square  overflow-hidden">
          <Image
            className="w-full h-full  object-cover object-center"
            src="/mobile/image-stand-out.jpg"
            alt="image-2"
            layout="responsive"
            height={720}
            width={624}
          />
        </div>
        <div className="text-center px-6 py-16 md:py-0 md:my-auto space-y-8">
          <h2 className="font-fraunces text-4xl text-neutral-very-dark-desaturated-blue">
            Stand out to the right audience
          </h2>
          <p className="text-base text-neutral-very-dark-grayish-blue font-barlow">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            porro repellendus accusantium eligendi, quas, amet alias sint odit
            sequi itaque, asperiores veniam
          </p>
          <div>
            <a
              className="uppercase tracking-wide font-bold font-fraunces text-neutral-very-dark-desaturated-blue"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative md:aspect-square overflow-hidden">
          <Image
            className="w-full h-full md:aspect-square object-cover object-center"
            src="/mobile/image-graphic-design.jpg"
            alt="image-3"
            layout="responsive"
            height={720}
            width={600}
          />
          <div className="w-full absolute bottom-20 left-1/2 -translate-x-1/2 text-center px-6 pt-20 space-y-8">
            <h2 className="font-fraunces text-4xl text-primary-dark-desaturated-cyan">
              Graphic Design
            </h2>
            <p className="text-base text-primary-dark-desaturated-cyan font-barlow">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore porro repellendus accusantium eligendi, quas,
            </p>
          </div>
        </div>
        <div className="relative md:aspect-square overflow-hidden">
          <Image
            className="w-full h-full md:aspect-square object-cover object-center"
            src="/mobile/image-photography.jpg"
            alt="image-4"
            layout="responsive"
            height={720}
            width={600}
          />

          <div className="w-full absolute bottom-20 left-1/2 -translate-x-1/2 text-center px-6 pt-20 space-y-8">
            <h2 className="font-fraunces text-4xl text-primary-dark-blue">
              Photography
            </h2>
            <p className="text-base text-primary-dark-blue font-barlow">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore porro repellendus accusantium eligendi, quas,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

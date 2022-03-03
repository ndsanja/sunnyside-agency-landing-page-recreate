const Services = () => {
  return (
    <div className="grid grid-cols-1">
      <div>
        <img src="/mobile/image-transform.jpg" alt="image-1" />
      </div>
      <div className="text-center bg-primary-yellow/40 px-6 py-16 space-y-8">
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
      <div>
        <img src="/mobile/image-stand-out.jpg" alt="image-2" />
      </div>
      <div className="text-center bg-primary-yellow/40 px-6 py-16 space-y-8">
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
      <div className="relative">
        <img src="/mobile/image-graphic-design.jpg" alt="image-3" />
        <div className="absolute top-80 text-center px-6 pt-20 space-y-8">
          <h2 className="font-fraunces text-4xl text-primary-dark-desaturated-cyan">
            Graphic Design
          </h2>
          <p className="text-base text-primary-dark-desaturated-cyan font-barlow">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            porro repellendus accusantium eligendi, quas,
          </p>
        </div>
      </div>
      <div className="relative">
        <img src="/mobile/image-photography.jpg" alt="image-4" />
        <div className="absolute top-80 text-center px-6 pt-20 space-y-8">
          <h2 className="font-fraunces text-4xl text-primary-dark-blue">
            Photography
          </h2>
          <p className="text-base text-primary-dark-blue font-barlow">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            porro repellendus accusantium eligendi, quas,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

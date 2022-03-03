const Testimonials = () => {
  return (
    <div className="py-16">
      <div>
        <h2 className="uppercase tracking-[0.2em] text-center font-fraunces font-bold text-neutral-dark-grayish-blue mb-12">
          Client Testimonials
        </h2>
      </div>
      <div className="mb-2 py-8 px-7 space-y-8 flex flex-col items-center justify-center">
        <div className="rounded-full h-16 w-16 bg-neutral-dark-grayish-blue overflow-hidden">
          <img src="/image-emily.jpg" alt="emily" />
        </div>
        <p className="text-center leading-loose text-neutral-very-dark-grayish-blue font-barlow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis quo
          libero sit minima dolor sint.
        </p>
        <div className="space-y-4 font-fraunces flex flex-col items-center justify-center">
          <h2 className="text-neutral-very-dark-desaturated-blue font-black text-lg">
            Emily R.
          </h2>
          <p className="capitalize text-sm text-neutral-grayish-blue">
            Marketing Director
          </p>
        </div>
      </div>
      <div className="mb-2 py-8 px-7 space-y-8 flex flex-col items-center justify-center">
        <div className="rounded-full h-16 w-16 bg-neutral-dark-grayish-blue overflow-hidden">
          <img src="/image-thomas.jpg" alt="Thomas" />
        </div>
        <p className="text-center leading-loose text-neutral-very-dark-grayish-blue font-barlow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis quo
          libero sit minima dolor sint.
        </p>
        <div className="space-y-4 font-fraunces flex flex-col items-center justify-center">
          <h2 className="text-neutral-very-dark-desaturated-blue font-black text-lg">
            Thomas S.
          </h2>
          <p className="capitalize text-sm text-neutral-grayish-blue">
            Chief Operating Officer
          </p>
        </div>
      </div>
      <div className="mb-2 py-8 px-7 space-y-8 flex flex-col items-center justify-center">
        <div className="rounded-full h-16 w-16 bg-neutral-dark-grayish-blue overflow-hidden">
          <img src="/image-jennie.jpg" alt="Jennie f" />
        </div>
        <p className="text-center leading-loose text-neutral-very-dark-grayish-blue font-barlow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis quo
          libero sit minima dolor sint.
        </p>
        <div className="space-y-4 font-fraunces flex flex-col items-center justify-center">
          <h2 className="text-neutral-very-dark-desaturated-blue font-black text-lg">
            Jennie F.
          </h2>
          <p className="capitalize text-sm text-neutral-grayish-blue">
            Business Owner
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

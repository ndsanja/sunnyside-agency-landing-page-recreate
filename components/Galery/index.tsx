import React from "react";

const Galery = () => {
  return (
    <div className="grid grid-cols-2">
      <img
        className="w-full h-full object-cover object-center"
        src="mobile/image-gallery-milkbottles.jpg"
        alt="milky"
      />
      <img
        className="w-full h-full object-cover object-center"
        src="mobile/image-gallery-orange.jpg"
        alt="orange"
      />
      <img
        className="w-full h-full object-cover object-center"
        src="mobile/image-gallery-cone.jpg"
        alt="cone"
      />
      <img
        className="w-full h-full object-cover object-center"
        src="mobile/image-gallery-sugar-cubes.jpg"
        alt="sugar"
      />
    </div>
  );
};

export default Galery;

import { useState } from "react";

export const ImageSlider = ({ images, alt = "", bgImage }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex-[1] flex flex-col items-center">
      <div
        className="relative rounded-xl overflow-hidden w-full"
        style={{
          backgroundImage: bgImage ? `url('${bgImage}')` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className="w-full h-auto object-contain shrink-0"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-md transition-all duration-300 ${
              i === active
                ? "w-6 h-1 bg-[#FEB413]"
                : "w-3 h-1 bg-[#463615] hover:bg-[#463615]/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

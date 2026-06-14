import { useEffect, useState, useMemo } from "react";

type Banner = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

const BANNER_INTERVAL = 3000;

const BannerCarousel = () => {
  const banners: Banner[] = useMemo(
    () => [
      {
        id: 1,
        title: "Fresh Vegetables",
        subtitle: "Get Up To 40% OFF",
        image:
          "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
      },
      {
        id: 2,
        title: "Fresh Fruits",
        subtitle: "Healthy & Organic",
        image:
          "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=1200",
      },
      {
        id: 3,
        title: "Daily Grocery",
        subtitle: "Best Deals Today",
        image:
          "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=1200",
      },
    ],
    [],
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, BANNER_INTERVAL);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="min-w-full relative h-40 sm:h-52 md:h-60 lg:h-72"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                {banner.title}
              </h2>

              <p className="mt-2 text-[#53B175] text-sm sm:text-base font-semibold">
                {banner.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2.5 rounded-full transition-all ${
              currentIndex === index ? "w-6 bg-[#53B175]" : "w-2.5 bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;

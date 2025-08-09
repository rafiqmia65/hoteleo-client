import React from "react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import img1 from "./../../../assets/slide1.jpg";
import img2 from "./../../../assets/slide2.jpg";

const Banner = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/allRooms");
  };

  const slides = [
    {
      image: img1,
      title: "Find Your Perfect Stay",
      description:
        "Discover comfort and convenience at top-rated hotels worldwide. Whether for business or leisure, find the perfect stay that fits your needs, style, and budget. Luxury and budget hotels at your fingertips.",
      buttonText: "Explore Rooms",
    },
    {
      image: img2,
      title: "Comfort Meets Convenience",
      description:
        "Experience the perfect blend of comfort and convenience with our curated stays—designed to make your travel relaxing, efficient, and entirely hassle-free.",
      buttonText: "Book Now",
    },
  ];

  return (
    <div className="w-full h-[70vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black z-10" />

              {/* Animated Content */}
              <div className="relative z-20 flex items-center justify-center h-full px-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-center text-white max-w-6xl"
                >
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold mt-20 mb-4 drop-shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-xl max-w-5xl mt-10 mb-10 text-gray-200"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.button
                    onClick={handleExplore}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    {slide.buttonText}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

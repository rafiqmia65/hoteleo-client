import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_serverURL}/latest-reviews`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error("Failed to load reviews", err));
  }, []);

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-3xl mx-auto px-5 lg:px-0 text-center">
        <h2 className="text-3xl font-semibold text-accent mb-6">
          What Our Guests Say
        </h2>
        <p className="text-text mb-10">Real reviews from our happy customers</p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={reviews.length > 2}
          spaceBetween={30}
          slidesPerView={1}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-secondary shadow-md rounded-xl p-6">
                <img
                  src={review.roomImage}
                  alt={review.roomTitle}
                  className="max-h-[150px] max-w-[400px] mx-auto rounded-2xl"
                />
                <p className="text-text italic mb-3 mt-5">"{review.comment}"</p>
                <div className="flex items-center justify-center gap-2 text-accent mb-2">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="text-sm text-text mb-5">
                  — <span className="font-medium">{review.name}</span> on{" "}
                  <strong>{review.roomTitle}</strong>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;

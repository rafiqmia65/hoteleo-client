import { Link, useLoaderData } from "react-router";

const TopRated = () => {
  const topRatedRooms = useLoaderData();

  return (
    <div className="bg-gradient-to-br bg-primary text-text">
      <div className="py-12 container mx-auto px-5 lg:px-0">
        <h2 className="text-3xl font-semibold text-center mb-8 text-accent">
          Top Rated Rooms
        </h2>

        <p className="text-center max-w-5xl mx-auto">
          Discover our top-rated rooms, handpicked based on guest reviews and
          satisfaction. Each suite offers exceptional comfort, premium
          amenities, and an unforgettable stay experience. Whether you're
          visiting for business or leisure, these rooms ensure the perfect blend
          of luxury and value.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRatedRooms.map((room) => (
            <div
              key={room._id}
              className="rounded-2xl shadow-lg overflow-hidden bg-secondary hover:shadow-xl transition flex flex-col"
            >
              {/* Image */}
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-60 object-cover"
              />

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Title & Price */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-text mb-1">
                    {room.title}
                  </h3>
                  <span className="text-lg font-bold text-accent">
                    ${room.price}/night
                  </span>
                </div>

                {/* ⭐ Rating & Review Count */}
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span className="text-accent font-semibold">
                    ⭐ {room.avgRating?.toFixed(1)} Star
                  </span>
                  <span className="text-text">
                    ({room.totalReviews} reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-text text-sm mb-3">
                  {room.description?.length > 100
                    ? room.description.slice(0, 100) + "..."
                    : room.description}
                </p>

                {/* Features */}
                <ul className="text-sm text-text mb-4 list-disc list-inside">
                  {room.features?.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                {/* Button Always at Bottom */}
                <div className="mt-auto">
                  <Link
                    to={`/roomDetails/${room._id}`}
                    className="bg-accent text-white px-4 py-1.5 rounded hover:bg-yellow-600 transition w-full text-center block"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;

import { Link, useLoaderData } from "react-router";

const TopRated = () => {
  const topRatedRooms = useLoaderData();

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white">
      <div className="py-12 container mx-auto px-5 lg:px-0">
        <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-600">
          Top Rated Rooms
        </h2>

        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
          Discover our top-rated rooms, handpicked based on guest reviews and
          satisfaction. Each suite offers exceptional comfort, premium
          amenities, and an unforgettable stay experience. Whether you're
          visiting for business or leisure, these rooms ensure the perfect blend
          of luxury and value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRatedRooms.map((room) => (
            <div
              key={room._id}
              className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {room.title}
                  </h3>
                  <span className="text-lg font-bold text-yellow-500">
                    ${room.price}/night
                  </span>
                </div>

                {/* ⭐ Rating & Review Count */}
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span className="text-yellow-500 font-semibold">
                    ⭐ {room.avgRating?.toFixed(1)} Star
                  </span>
                  <span className="text-gray-500">
                    ({room.totalReviews} reviews)
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  {room.description?.length > 100
                    ? room.description.slice(0, 100) + "..."
                    : room.description}
                </p>

                <div className="flex justify-between items-end">
                  <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                    {room.features?.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link
                    to={`/roomDetails/${room._id}`}
                    className="bg-yellow-500 text-white px-4 py-1.5 rounded hover:bg-yellow-600 transition"
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

import useAxiosSecure from "../Hook/useAxiosSecure";

const useBookingApi = () => {
  const axiosSecure = useAxiosSecure();

  const getMyBookings = async (email) => {
    const response = await axiosSecure.get(`/my-bookings?email=${email}`);
    return response.data;
  };

  return {
    getMyBookings,
  };
};

export default useBookingApi;

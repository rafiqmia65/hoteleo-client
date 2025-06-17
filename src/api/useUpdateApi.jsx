import useAxiosSecure from "../Hook/useAxiosSecure";

const useUpdateApi = () => {
  const axiosSecure = useAxiosSecure();

  const getUpdateBooking = async (email, bookingData) => {
    const response = await axiosSecure.patch(
      `/booking-date-update?email=${email}`,
      bookingData
    );
    return response;
  };

  return {
    getUpdateBooking,
  };
};

export default useUpdateApi;

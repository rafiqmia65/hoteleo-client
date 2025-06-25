import useAxiosSecure from "../Hook/useAxiosSecure";

const useCancelApi = () => {
  const axiosSecure = useAxiosSecure();

  const getCancelBooking = async (email, bookingData) => {
    const response = await axiosSecure.delete(
      `/booking-cancel?email=${email}`,
      {
        data: bookingData,
      }
    );
    return response;
  };

  return {
    getCancelBooking,
  };
};

export default useCancelApi;

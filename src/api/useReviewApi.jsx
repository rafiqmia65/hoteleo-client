import useAxiosSecure from "../Hook/useAxiosSecure";

const useReviewApi = () => {
  const axiosSecure = useAxiosSecure();

  const getReviewRoom = async (roomId, reviewData) => {
    const response = await axiosSecure.patch(`/review/${roomId}`, {
      review: reviewData,
    });
    return response;
  };

  return {
    getReviewRoom,
  };
};

export default useReviewApi;

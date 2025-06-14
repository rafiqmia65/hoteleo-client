import { Link } from "react-router";
import Lottie from "lottie-react";
import notFoundAnimation from "./../../assets/ErrorPage/error.json";
import { FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <Helmet>
        <title>Hoteleo - page not found</title>
      </Helmet>
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl">
        <div className="md:flex">
          <div className="p-6 md:p-10 flex items-center justify-center">
            <div className="max-w-[200px] mx-auto">
              <Lottie
                animationData={notFoundAnimation}
                loop={true}
                autoplay={true}
                className="hover:scale-105 transition-transform"
              />
            </div>
          </div>
          <div className="p-8 text-center bg-gradient-to-r from-indigo-100 to-purple-100 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Oops! Can't find the page
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The page you're looking for seems to have been lost in space!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/"
                className="flex items-center justify-center px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
              >
                <FaHome size={25} className="mr-2" />
                Back To Home
              </Link>
            </div>
            <div className="bg-yellow-600 p-3 text-center mt-8 text-white font-medium text-sm">
              Our spacecraft is trying to find the lost page...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

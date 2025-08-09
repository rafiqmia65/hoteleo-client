import logo from "../../../assets/favicon.png";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-primary transition-colors  duration-500">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-accent border-t-transparent rounded-full animate-spin shadow-2xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-extrabold  drop-shadow-lg animate-pulse">
              <img src={logo} className="w-10" alt="" />
            </span>
          </div>
        </div>

        <p className="mt-6 text-xl md:text-2xl font-semibold animate-bounce">
          Booking your experience...
        </p>

        <p className="mt-2 text-sm  animate-pulse">Please wait a moment</p>
      </div>
    </div>
  );
};

export default Loader;

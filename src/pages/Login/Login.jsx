import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login, setUser, googleAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        Swal.fire({
          title: `${loginUser.displayName}'s you are successfully Logged In`,
          text: "You clicked the button!",
          icon: "success",
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const handleGoogleAuth = () => {
    googleAuth()
      .then((result) => {
        const newUser = result.user;

        Swal.fire({
          title: `${newUser.displayName}'s you are successfully Logged In`,
          text: "You clicked the button!",
          icon: "success",
        });

        setUser(newUser);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="min-h-screen pt-30 pb-10 bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center p-6">
      <Helmet>
        <title>Hoteleo - Login</title>
      </Helmet>
      <div className=" p-8 rounded shadow-2xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Now!</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              required
            />
          </div>

          <button className="btn bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-full mt-6">
            Login
          </button>
        </form>
        {/* Google */}
        <button
          onClick={handleGoogleAuth}
          className="btn btn-secondary w-full mt-4"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className="text-sm mt-3 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signUp"
            className="font-medium text-yellow-600 hover:text-yellow-500"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

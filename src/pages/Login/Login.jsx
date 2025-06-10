import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="pt-28 pb-10 bg-base-200 min-h-screen">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center mb-6">
                Login now!
              </h1>
              <fieldset className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
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
                    type="password"
                    className="input input-bordered w-full"
                    placeholder="Password"
                    required
                  />
                  <label className="label">
                    <a className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <button className="btn bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-full mt-6">
                  Login
                </button>

                {/* Google */}
                <button className="btn btn-secondary w-full ">
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

                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-yellow-600 hover:text-yellow-500"
                  >
                    Create one
                  </Link>
                </p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

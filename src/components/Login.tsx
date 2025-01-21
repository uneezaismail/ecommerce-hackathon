import React from 'react';

const Login = () => {
  return (
    <section className=" px-4 w-full max-w-lg sm:mx-auto lg:max-w-xl xl:max-w-2xl  py-8 lg:px-16 lg:py-12 space-y-9">
      <div>
        <h4 className="text-3xl sm:text-4xl font-semibold text-custom-green text-center">
          Log In
        </h4>
      </div>
      <div>
        <form className="space-y-6 md:space-y-9">
          <div className="space-y-6 md:space-y-9">
            <div className="flex flex-col space-y-3">
              <label htmlFor="Email" className="text-base sm:text-lg font-medium">
                Username or email address
              </label>
              <input
                type="email"
                className="border focus:ring-0 focus:outline-none border-black rounded w-full h-[40px] sm:h-[50px] lg:h-[60px] px-3"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="Password" className="text-base sm:text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                className="border focus:ring-0 focus:outline-none border-black rounded w-full h-[40px] sm:h-[50px] lg:h-[60px] px-3"
                required
              />
            </div>
          </div>
          <div className="space-y-6 md:space-y-11">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-x-7">
              <button
                type="submit"
                className="border border-black rounded text-white bg-custom-green hover:bg-emerald-950 text-lg sm:text-xl py-2 sm:py-4 px-8 sm:px-10 lg:px-14 w-full md:w-auto"
              >
                Log In
              </button>
              <div className="mt-4 md:mt-0">
                <button className="text-sm text-gray-600 hover:underline font-light">
                  Lost your password?
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

import React from 'react'

const Register = () => {
  return (
    <section className="w-full max-w-lg mx-auto lg:max-w-xl xl:max-w-2xl px-4 py-8 lg:px-16 lg:py-12 space-y-9">
      <div>
        <h4 className="text-3xl sm:text-4xl font-semibold text-custom-green text-center">
          Register
        </h4>
      </div>
      <div>
        <form className="space-y-6 md:space-y-9">
          <div className="space-y-6 md:space-y-9">
            <div className="flex flex-col space-y-3">
              <label htmlFor="Email" className="text-base sm:text-lg font-medium">
                Email address
              </label>
              <input
                type="email"
                className="border focus:ring-0 focus:outline-none border-black rounded w-full h-[40px] sm:h-[50px] lg:h-[60px] px-3"
                required
              />
            </div>
            <div>
              <p className="text-sm sm:text-base">
                A link to set a new password will be sent to your email address.
              </p>
              <br />
              <p className="text-sm sm:text-base">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                <span className="font-semibold">privacy policy</span>.
              </p>
            </div>
          </div>
          <div className="space-y-6 md:space-y-11">
            <div className="flex items-center justify-center md:justify-start">
              <button
                type="submit"
                className="border border-black rounded text-white bg-custom-green hover:bg-emerald-950 text-lg sm:text-xl py-2 sm:py-4 px-8 sm:px-10 lg:px-14 w-full md:w-auto"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;

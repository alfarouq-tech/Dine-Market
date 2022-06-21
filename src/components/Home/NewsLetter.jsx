const NewsLetter = () => {
  return (
    <section className="mt-24 md:mt-36 max-w-3xl mx-auto">
      <div className="space-y-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 mx-auto text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
          />
        </svg>
        <h1 className="text-3xl font-bold">Subscribe to Our Newsletter</h1>
        <p className="font-light text-gray-dark">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
      </div>
      <div className="mt-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="items-center justify-center sm:flex"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="text-gray-dark w-full p-3 rounded-md border-2 border-gray-light outline-none focus:ring-blue focus:ring-1 foucs:border-none"
          />
          <button className="w-full sm:w-1/3 mt-3 px-8 py-3 rounded-md text-white bg-black font-semibold outline-none shadow-md sm:mt-0 sm:ml-3 hover:bg-gray-dark transition-all">
            Get Started
          </button>
        </form>
        <p className="mt-5  text-center text-base text-gray-dark">
          No spam ever, we care about the protection of your data. Read our
          <a className="ml-3 underline" href="#">
            Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;

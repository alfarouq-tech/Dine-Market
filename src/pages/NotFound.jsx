import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main class=" w-full flex flex-col justify-center items-center">
      <h1 class="text-9xl font-extrabold tracking-widest">404</h1>
      <div class="bg-blue text-white px-5 py-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <a class="relative inline-block text-sm font-medium text-blue group active:text-orange-500 focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 "></span>

          <span class="relative block px-8 font-semibold py-3 bg-black text-white rounded-md">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </main>
  );
};

export default NotFound;

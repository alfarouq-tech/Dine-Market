import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <section className="flex flex-col items-center justify-between lg:flex-row overflow-hidden mt-24 sm:mt-36">
      {/* Decorative image grid */}
      <div className="mt-10 relative">
        <div className="rounded-lg ">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
            alt=""
          />
        </div>

        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
          alt=""
          className="hidden lg:block absolute top-1/2 left-1/2"
        />
      </div>
      {/* CTA */}
      <div className=" pt-16 pb-16 sm:pt-24 sm:pb-40 lg:pt-48 lg:pb-48">
        <div className="">
          <div className="sm:max-w-lg">
            <h1 className="text-5xl font-bold">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-base text-gray-dark">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
            <Link
              to="/products/popular"
              className="inline-block mt-10 text-center bg-black border border-transparent rounded-md py-3 px-8 font-semibold text-white hover:bg-gray-dark transition-all"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

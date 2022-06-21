import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import PageAnimation from "../components/Animation/PageAnimation";

const product = {
  sizes: [
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

const ProductDetails = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selectedSize, setSelectedSize] = useState("M");
  const sizeHandler = (e) => {
    setSelectedSize(e.target.innerText);
  };

  const { productId } = useParams();

  const products = useSelector((state) => state.products.products);
  const productItem = products.find((item) => item.id === productId);

  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemtoCart({
        id: productItem.id,
        name: productItem.title,
        src: productItem.src,
        price: productItem.price,
        category: productItem.category,
        itemQuantity: 1,
        size: selectedSize,
      })
    );
  };

  if (!productItem) {
    return <LoadingSpinner />;
  }

  return (
    <PageAnimation>
      <div className="bg-white">
        <div>
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="flex items-center space-x-2 text-gray-dark "
            >
              <li key={productItem.id}>
                <div className="flex items-center">
                  <Link to="/products/popular" className="mr-2 text-sm ">
                    Products
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                  <div className="text-sm">
                    <Link
                      to={`/products/${productItem.gender}`}
                      aria-current="page"
                      className="capitalize"
                    >
                      {productItem.gender}
                    </Link>
                  </div>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm font-bold">
                <a href={product.href} aria-current="page" className=" ">
                  {productItem.title}
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col md:flex-row">
            {/* Image Gallery */}
            <div className="pt-10 pb-5 lg:pt-16 lg:pb-24 basis-[35%]">
              <div className="max-w-2xl mx-auto rounded-lg overflow-hidden lg:block">
                <img
                  src={productItem.src}
                  alt={productItem.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>

            {/* Product info */}
            <div className=" pt-10 pb-16 lg:pt-16 lg:pb-24 md:pl-24 flex flex-col basis-[65%]">
              <div className=" lg:pb-4">
                <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {productItem.title}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:mt-0 ">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl ">{product.price}</p>

                {/* Reviews */}
                <div className="lg:mt-0 flex justify-between">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-yellow"
                              : "text-yellow",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a href={reviews.href} className="ml-1 text-sm font-medium">
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                  <span className="text-2xl font-bold">
                    ${productItem.price}.00
                  </span>
                </div>

                <div className="mt-10">
                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Size</h3>
                      <a
                        href="https://www.dimensions.co.uk/advice-centre/size-guide"
                        className="text-sm font-medium "
                      >
                        Size guide
                      </a>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={selectedSize}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "bg-white shadow-sm cursor-pointer"
                                  : " cursor-not-allowed",
                                active
                                  ? "bg-blue text-white transition-all"
                                  : " transition-all",
                                "group relative rounded-md flex items-center justify-center text-sm font-medium uppercase focus:outline-none sm:flex-1 "
                              )
                            }
                          >
                            {({ active }) => (
                              <>
                                <RadioGroup.Label
                                  onClick={sizeHandler}
                                  as="p"
                                  className="w-12 h-12 flex flex-1 justify-center items-center"
                                >
                                  {size.name}
                                </RadioGroup.Label>

                                <div
                                  className={classNames(
                                    active ? "" : "border-2",
                                    "absolute -inset-px rounded-md pointer-events-none"
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <button
                    onClick={addItemHandler}
                    className="mt-10 w-full bg-black border border-none rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-dark focus:outline-none transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="py-10 lg:pt-6 lg:pb-16 lg:pr-8">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Highlights
                  </h3>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="pl-4 list-disc text-sm space-y-2"
                    >
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageAnimation>
  );
};

export default ProductDetails;

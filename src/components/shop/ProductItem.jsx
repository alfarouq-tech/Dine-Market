import { Link } from "react-router-dom";
const ProductItem = ({ id, name, imageSrc, imageAlt, price, category }) => {
  return (
    <div key={id} className="group relative">
      <div className="w-full min-h-80 bg-gray-dark rounded-md overflow-hidden lg:h-80">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex flex-col ">
        <div>
          <h3 className="text-base font-semibold">
            <Link to={`/productDetails/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-2 mb-1 font-semibold text-xs text-gray-dark capitalize">
            {category}
          </p>
        </div>
        <p className="text-base font-semibold">${price}.00</p>
      </div>
    </div>
  );
};

export default ProductItem;

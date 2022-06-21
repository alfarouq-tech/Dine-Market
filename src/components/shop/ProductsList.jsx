import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ProductsList = () => {
  const productsState = useSelector((state) => state.products.products);
  const location = useLocation();
  const { pathname } = location;
  let products = [];

  if (pathname.includes("/male")) {
    products = productsState.filter((item) => item.gender === "male");
  }
  if (pathname.includes("/female")) {
    products = productsState.filter((item) => item.gender === "female");
  }

  if (pathname.includes("/kids")) {
    products = productsState.filter((item) => item.gender === "kids");
  }

  if (pathname.includes("/popular")) {
    products = productsState;
  }

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.title}
          imageSrc={product.src}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductsList;

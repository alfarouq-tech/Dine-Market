import { productsActions } from "./products-slice";
import { cartActions } from "./cart-slice";

export const fetchProductsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-ecommerce-8e71d-default-rtdb.firebaseio.com/products.json"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetch Products Failed");
      }
      return data;
    };
    try {
      const ProductsData = await fetchData();
      dispatch(productsActions.replaceProducts(ProductsData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (cart) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-ecommerce-8e71d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice,
            size: cart.size,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Send Cart Data Failed");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-ecommerce-8e71d-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetch Cart Failed");
      }
      return data;
    };
    try {
      const CartData = await fetchData();

      dispatch(
        cartActions.replaceCart({
          items: CartData.items || [],
          totalQuantity: CartData.totalQuantity,
          totalPrice: CartData.totalPrice,
          size: CartData.size,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

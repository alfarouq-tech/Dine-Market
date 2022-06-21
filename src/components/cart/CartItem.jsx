import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={props.src}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium ">
            <h3>{props.name}</h3>
            <p className="ml-4">${props.price}.00</p>
          </div>
        </div>
        <span className="mt-4">{props.size}</span>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="">Qty {props.itemQuantity}</p>

          <div className="flex">
            <button
              onClick={removeItemHandler}
              type="button"
              className="font-medium text-gray-dark"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

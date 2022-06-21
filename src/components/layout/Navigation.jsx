import logoIcon from "../../favicon.svg";
import logoAll from "../../assets/Logo.svg";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { NavLink, Link } from "react-router-dom";
import LangSelect from "../UI/LangSelect";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const navigation = [
  { name: "Popular Products", href: "popular" },
  { name: "Male", href: "male" },
  { name: "Female", href: "female" },
  { name: "Kids", href: "kids" },
];

export default function Navigation() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const openCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <div className="pb-10 sm:pb-24">
      <Disclosure
        as="nav"
        className="flex justify-between items-center text-gray-dark text-xs md:text-sm mb-3"
      >
        <div className="flex items-center">
          <span className="hidden md:block mr-3">My Location</span>
          <LocationMarkerIcon className="w-5 h-5" />
          <span className="font-semibold ml-1">Alexandria, Egypt</span>
        </div>
        <LangSelect />
      </Disclosure>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div>
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}

                  <Disclosure.Button className="inline-flex items-center justify-center py-2 rounded-md  ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                  <Link to="/" className="flex-shrink-0 flex items-center">
                    <img
                      className="h-8 w-auto md:hidden"
                      src={logoIcon}
                      alt="Workflow"
                    />
                    <img
                      className="h-8 w-auto hidden md:block"
                      src={logoAll}
                      alt=""
                    />
                  </Link>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={`products/${item.href}`}
                          className={(navData) =>
                            navData.isActive
                              ? "text-white px-3 py-2 rounded-md text-sm font-medium bg-black transition-all"
                              : "text-black px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-black hover:text-white"
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div
                    onClick={openCartHandler}
                    className="relative bg-gray-800 p-1 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <ShoppingCartIcon className="h-6 w-6" />
                    <span className="text-white absolute -top-2 -right-2 bg-blue w-6 h-6 flex items-center justify-center text-xs rounded-full">
                      {totalQuantity}
                    </span>
                  </div>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 md:w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                        <Menu.Item>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-dark"
                          >
                            Sign In
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-dark"
                          >
                            Sign Up
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="sm:hidden relative z-20">
                <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg absolute  bg-white rounded-lg">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      to={`products/${item.href}`}
                      className=" hover:bg-gray-dark
                  block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisisble] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-pink-500 text-center py-2 text-white font-semibold z-50 overflow-hidden">
  <div className="whitespace-nowrap flex items-center gap-20 animate-marquee">
    {/* Content repeated to create a seamless scroll */}
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
    <span>SALE - UP TO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</span>
  </div>
</div>

      <div className="pt-12 mt-10">
        <div className="flex items-center justify-between py-5 font-medium">
          <Link to='/'>
            <h1 className="text-4xl font-bold text-pink-600">Mytalorzone By Sahiba</h1>
          </Link>

          <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p>HOME</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/collection" className="flex flex-col items-center gap-1">
              <p>COLLECTION</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>ABOUT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p>CONTACT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </ul>

          <div className="flex items-center gap-6">
            <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
            <div className="group relative">
              <img onClick={() => (token ? null : navigate('/login'))} className="w-5 cursor-pointer" src={assets.profile_icon} alt="" />
              {token && (
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
                      Orders
                    </p>
                    <p onClick={logout} className="cursor-pointer hover:text-black">
                      Logout
                    </p>
                  </div>
                </div>
              )}
            </div>
            <Link to="/cart" className="relative">
              <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                {getCartCount()}
              </p>
            </Link>
            <img onClick={() => setVisisble(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
          </div>

          {/* Sidebar menu for small screens */}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
              <div onClick={() => setVisisble(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                <p>Back</p>
              </div>
              <NavLink onClick={() => setVisisble(false)} className="py-2 pl-6 border " to="/">
                HOME
              </NavLink>
              <NavLink onClick={() => setVisisble(false)} className="py-2 pl-6 border " to="/collection">
                COLLECTION
              </NavLink>
              <NavLink onClick={() => setVisisble(false)} className="py-2 pl-6 border " to="/about">
                ABOUT
              </NavLink>
              <NavLink onClick={() => setVisisble(false)} className="py-2 pl-6 border " to="/contact">
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
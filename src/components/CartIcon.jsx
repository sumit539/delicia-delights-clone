import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartIcon = () => {
    const { cartItems, setIsCartOpen, getCartCount } = useCart();
    const itemCount = getCartCount();

    return (
        <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-dark hover:text-primary transition-colors duration-200"
            aria-label="Shopping Cart"
        >
            <FaShoppingCart className="text-2xl" />
            {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {itemCount > 99 ? '99+' : itemCount}
                </span>
            )}
        </button>
    );
};

export default CartIcon;

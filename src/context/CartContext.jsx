import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('deliciaCart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Failed to load cart from localStorage:', error);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('deliciaCart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, size, quantity = 1) => {
        setCartItems(prevItems => {
            // Check if item with same product and size already exists
            const existingItemIndex = prevItems.findIndex(
                item => item.id === product.id && item.selectedSize === size
            );

            if (existingItemIndex > -1) {
                // Update quantity of existing item
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += quantity;
                return updatedItems;
            } else {
                // Add new item
                const price = product.pricing && product.pricing[size]
                    ? product.pricing[size]
                    : product.price || 0;

                return [...prevItems, {
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    category: product.category,
                    selectedSize: size,
                    price: price,
                    quantity: quantity
                }];
            }
        });

        // Show cart briefly when item is added
        setIsCartOpen(true);
    };

    const removeFromCart = (productId, size) => {
        setCartItems(prevItems =>
            prevItems.filter(item => !(item.id === productId && item.selectedSize === size))
        );
    };

    const updateQuantity = (productId, size, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId, size);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId && item.selectedSize === size
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    const getItemQuantity = (productId, size) => {
        const item = cartItems.find(item => item.id === productId && item.selectedSize === size);
        return item ? item.quantity : 0;
    };

    const value = {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        getItemQuantity
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

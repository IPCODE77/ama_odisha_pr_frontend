
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem('ama-odisha-cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            return [];
        }
    });
    useEffect(() => {
        localStorage.setItem('ama-odisha-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1, weight = '200g') => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id && item.weight === weight
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id && item.weight === weight
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [
                ...prevItems,
                {
                    ...product,
                    weight,
                    quantity,
                    cartItemId: `${product.id}-${weight}`,
                },
            ];
        });
    };

    const removeFromCart = (cartItemId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.cartItemId !== cartItemId)
        );
    };

    const updateQuantity = (cartItemId, quantity) => {
        if (quantity < 1) return;

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.cartItemId === cartItemId
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used inside CartProvider');
    }

    return context;
}

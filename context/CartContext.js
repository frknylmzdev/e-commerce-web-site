import { createContext, useContext, useReducer, useEffect } from 'react';

// Sepet context'i oluştur
const CartContext = createContext();

// Başlangıç durumu
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Sepet reducer fonksiyonu
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        // Ürün zaten sepette varsa miktarını artır
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
        };

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + action.payload.quantity,
          totalPrice: state.totalPrice + (action.payload.price * action.payload.quantity),
        };
      } else {
        // Ürün sepette yoksa ekle
        return {
          ...state,
          items: [...state.items, action.payload],
          totalItems: state.totalItems + action.payload.quantity,
          totalPrice: state.totalPrice + (action.payload.price * action.payload.quantity),
        };
      }
    }

    case 'REMOVE_ITEM': {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (!existingItem) return state;

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - existingItem.quantity,
        totalPrice: state.totalPrice - (existingItem.price * existingItem.quantity),
      };
    }

    case 'UPDATE_QUANTITY': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex === -1) return state;

      const existingItem = state.items[existingItemIndex];
      const quantityDifference = action.payload.quantity - existingItem.quantity;

      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = {
        ...existingItem,
        quantity: action.payload.quantity,
      };

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDifference,
        totalPrice: state.totalPrice + (existingItem.price * quantityDifference),
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

// CartProvider bileşeni
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Sepeti localStorage'dan yükle
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        Object.keys(cartReducer(initialState, { type: '' })).forEach(key => {
          if (!(key in parsedCart)) {
            throw new Error(`Invalid cart data: missing ${key}`);
          }
        });
        
        // Her bir ürün için toplam fiyatı ve toplam ürün sayısını yeniden hesapla
        let totalItems = 0;
        let totalPrice = 0;
        
        parsedCart.items.forEach(item => {
          totalItems += item.quantity;
          totalPrice += item.price * item.quantity;
        });
        
        dispatch({
          type: 'REPLACE_CART',
          payload: {
            ...parsedCart,
            totalItems,
            totalPrice
          }
        });
      } catch (error) {
        console.error('Failed to parse saved cart:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Sepeti localStorage'a kaydet
  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }, [state]);

  // Sepete ürün ekleme
  const addItem = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
      },
    });
  };

  // Sepetten ürün çıkarma
  const removeItem = (productId) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: productId,
    });
  };

  // Ürün miktarını güncelleme
  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: productId,
        quantity,
      },
    });
  };

  // Sepeti temizleme
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Sepet hook'u
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const ADD_ORDER = 'ADD_ORDER';
export const EMPTY_ORDER = 'EMPTY_ORDER';

export const addOrder = (cartItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: { items: cartItems, amount: totalAmount }
  };
};

export const emptyOrder = () => {
  return {
    type: EMPTY_ORDER,
    orderData: { items: {}, amount: 0 }
  };
};

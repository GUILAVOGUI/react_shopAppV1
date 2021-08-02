import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import ordersReducer from './store/reducers/orders';

import productsReducer from './store/reducers/productsReducer';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer);



export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

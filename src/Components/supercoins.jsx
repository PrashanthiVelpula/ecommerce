import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSuperCoins } from './CartSlice'; 

const SuperCoins = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const [superCoins, setSuperCoins] = useState(0);

  const coin_fun = coins => {
    dispatch(updateSuperCoins(coins));
  };

  useEffect(() => {
    let coins = 0;
    if (totalAmount >= 100 && totalAmount < 200) {
      coins = 10;
    } else if (totalAmount >= 200 && totalAmount < 300) {
      coins = 20;
    } else if (totalAmount >= 300) {
      coins = 30;
    }
    setSuperCoins(coins);
    coin_fun(coins);
  }, [totalAmount]);
 

  return (
    <div className="super-coins" style={{ textAlign: 'center' }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">
        You will earn {superCoins} super coins with this purchase.
      </p>
    </div>
  );
};

export default SuperCoins;

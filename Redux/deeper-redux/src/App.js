import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.cartUi.isCartVisible);

  // 비동기 처리
  const cart = useSelector((state) => state.cart);

  // cart State가 변경될 때마다 Fetch하는 비동기 통신 로직 구현
  useEffect(() => {
    fetch(
      'https://react-app-283cb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      },
    );
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

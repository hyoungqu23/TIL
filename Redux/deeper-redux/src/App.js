import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { cartUiActions } from './store/cartUi-slice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, getCartData } from './store/cart-slice';

// App Component 외부에 변수를 설정해 해당 파일이 처음으로 파싱될 때 초기화되고, Component가 다시 렌더링된다 하더라도 다시 초기화되지 않는다.
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cartUi.isCartVisible);
  const notification = useSelector((state) => state.cartUi.notification);

  // 비동기 처리
  const cart = useSelector((state) => state.cart);

  // Get Cart Data from DB at First Render
  // 다만 이때 cart가 변경되며 아래의 useEffect의 dependencies가 변경되어 실행되게 된다.
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  // cart State가 변경될 때마다 Fetch하는 비동기 통신 로직 구현
  useEffect(() => {
    // const sendCartData = async () => {
    //   dispatch(
    //     cartUiActions.showNotification({
    //       status: 'pending',
    //       title: 'Sending...',
    //       message: 'Sending Cart Data!',
    //     }),
    //   );
    //   const response = await fetch(
    //     'https://react-app-283cb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
    //     {
    //       method: 'PUT',
    //       body: JSON.stringify(cart),
    //     },
    //   );
    //   // 모든 종류의 에러를 처리하지 않음. 단지 응답 상태가 200-299 사이가 아닌 경우에만 에러 처리
    //   if (!response.ok) {
    //     throw new Error('Sending Cart Data failed');
    //   }
    //   dispatch(
    //     cartUiActions.showNotification({
    //       status: 'success',
    //       title: 'Success!',
    //       message: 'Sending Cart Data Successfully!',
    //     }),
    //   );
    // };
    // 앱이 실행될 때 장바구니 데이터를 서버에 전달하지 않는다.
    if (isInitial) {
      isInitial = false;
      return;
    }

    // // catch 구문으로 발생할 수 있는 에러를 포착하여 dispatch 함수를 실행할 수 있다.
    // sendCartData().catch((error) => {
    //   dispatch(
    //     cartUiActions.showNotification({
    //       status: 'error',
    //       title: 'Error...',
    //       message: 'Sending Cart Data Failed...',
    //     }),
    //   );
    // });

    // RTK는 Action Creator 함수를 반환하는 함수도 Dispatch의 인수로 받는 것을 허용하고, 이러한 함수를 자동으로 실행해주며, dispatch 중첩된 내부 함수의 인자로 전달해 Dispatch할 수 있도록 해준다.
    if (cart.isChange) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

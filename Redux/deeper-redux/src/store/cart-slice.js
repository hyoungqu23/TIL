import { createSlice } from '@reduxjs/toolkit';
import { cartUiActions } from './cartUi-slice';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    isChange: false,
  },

  reducers: {
    // Action Creator 함수
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    // Action Creator 함수
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.isChange = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },

    // Action Creator 함수
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.isChange = true;

      if (existingItem.quantity === 1) {
        // 배열에서 제거
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

// Action Creator 함수를 반환하는 함수
// Get Cart Data from DB and Set Cart Data
export const getCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        'https://react-app-283cb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data.');
      }
      console.log('response', response);
      const data = await response.json();
      console.log('data', data);
      return data;
    };

    try {
      const cartData = await getData();
      console.log('cartData', cartData);
      // Setting Cart Data from DB to Frontend
      dispatch(
        cartActions.replaceCart({
          // 모든 아이템을 Cart에서 삭제하면, DB에 items field가 존재하지 않게 되어 다시 추가하는 경우에 에러가 발생한다.
          // 따라서 빈 배열 처리를 해주어야 한다.
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }),
      );
    } catch (error) {
      dispatch(
        cartUiActions.showNotification({
          status: 'error',
          title: 'Error...',
          message: 'Getting Cart Data Failed...',
        }),
      );
    }
  };
};

// Action Creator 함수를 반환하는 함수
// Send Cart Data to DB
export const sendCartData = (cart) => {
  return async (dispatch) => {
    // Dispatch 함수 실행
    dispatch(
      cartUiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending Cart Data!',
      }),
    );

    // 비동기 코드, 부수 효과 코드 실행 가능
    const sendRequest = async () => {
      const response = await fetch(
        'https://react-app-283cb-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        },
      );

      // 모든 종류의 에러를 처리하지 않음. 단지 응답 상태가 200-299 사이가 아닌 경우에만 에러 처리
      if (!response.ok) {
        throw new Error('Sending Cart Data failed');
      }
    };

    try {
      await sendRequest();
      dispatch(
        cartUiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sending Cart Data Successfully!',
        }),
      );
    } catch (error) {
      dispatch(
        cartUiActions.showNotification({
          status: 'error',
          title: 'Error...',
          message: 'Sending Cart Data Failed...',
        }),
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;

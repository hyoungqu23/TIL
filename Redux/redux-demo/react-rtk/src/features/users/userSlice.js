// Import createSlice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  users: [],
  error: '',
};

// createAsyncThunk 함수는 Action Type, Payload Creator를 인자로 받는다.
// createAsyncThunk 함수는 자동적으로 반환된 Promise를 기반으로 한 Pending, Fulfilled, Rejected Action Type을 생성하므로, 이를 Reducer 함수에서 활용해 State 업데이트를 실행할 수 있다.
// Slice 외부에서 생성되므로, extraReducers로 추가되어야 한다.
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id));
  // catch는 추가적인 기능으로 인해 불필요하다.
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;

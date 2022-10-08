import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getUsersThunk from '../actions';

const User = () => {
  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('handleClick');
    dispatch(getUsersThunk());
  };

  return (
    <div>
      <button
        style={{
          width: '200px',
          height: '50px',
          backgroundColor: 'skyblue',
          border: 'none',
          fontSize: '32px',
        }}
        onClick={handleClick}
      >
        Get Users
      </button>
      {/* {loading && <h1>로딩중입니다...</h1>}
      {error && <p>{error.message}</p>} */}
      {!!users && <h1>없음</h1>}
      {users?.map((user) => (
        <div
          key={user.id}
          style={{
            width: '50%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '5px solid #ccc',
          }}
        >
          <h1>{user.name}</h1>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default User;

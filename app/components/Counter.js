'use client';

import { useState } from 'react';

const Counter = ({ users }) => {
  const [count, setCount] = useState(users.length);

  const onIncrease = () => setCount((c) => c + 1);
  const onDecrease = () => setCount((c) => c - 1);

  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={onDecrease}>-</button>
      <span>{count}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default Counter;

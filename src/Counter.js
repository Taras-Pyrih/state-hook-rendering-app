import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  function handleMinusClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className='Counter'>
      <button onClick={handleMinusClick}><span>-</span></button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}><span>+</span></button>
    </div>
  );
}
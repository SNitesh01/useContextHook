import React from 'react';
import { CounterContext } from './App';

export default function first() {
  const { count, setCount } = React.useContext(CounterContext);
  {
    CounterContext;
  }
  return (
    <div style={{ border: '1px solid black', padding: '30px' }}>
      <h5>Third</h5>
      <button onClick={() => setCount(count + 1)}>+</button>

      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

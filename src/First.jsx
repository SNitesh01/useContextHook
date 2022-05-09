import React from 'react';
import Second from './Second';

export default function first() {
  return <div style={{ border: '1px solid black',padding:"30px" }}>
    <h5>first</h5>
    <Second/>
  </div>;
}

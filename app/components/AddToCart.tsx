'use client';
import React from 'react';

const AddToCart = () => {
  return (
    <>
      <button className="btn btn-warning" onClick={() => console.log('first')}>
        AddToCart
      </button>
      <button
        className="btn btn-active btn-ghost"
        onClick={() => console.log('first')}
      >
        AddToCart
      </button>
    </>
  );
};

export default AddToCart;

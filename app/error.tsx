'use client';
import React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <div>
      ErrorPagen
      <button className="btn" onClick={() => rest()}>
        retry
      </button>
    </div>
  );
};

export default ErrorPage;

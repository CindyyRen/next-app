'use client';
import React from 'react';
import ProductCard from '@/app/components/ProductCard';
import { useRouter } from 'next/navigation';

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/users')} className="btn btn-success">
        Create
      </button>
    </div>
  );
};

export default NewUserPage;

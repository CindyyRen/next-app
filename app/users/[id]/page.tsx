import { notFound } from 'next/navigation';
import React from 'react';
import UserNotFound from './not-found';

interface Props {
  params: { id: number };
  searchParams: { sortOrder: string };
}

const page = ({ params: { id }, searchParams: { sortOrder } }: Props) => {
  if (id > 10) return UserNotFound();
  return (
    <div>
      page{id}
      {sortOrder}
    </div>
  );
};

export default page;

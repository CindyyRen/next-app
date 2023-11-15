import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main >
      <Link href='/users/new'>newpage</Link>
      <Link href='/users'>users</Link>
      <h1>Hello world</h1>
    </main>
  );
}

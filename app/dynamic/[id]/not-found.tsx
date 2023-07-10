import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found!!!</h2>
      <p>Requested User does not exists</p>
      <p>
        <Link href="/dynamic"> Back</Link>
      </p>
    </div>
  );
}
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/dashboard"> View Dashboard</Link>
      </p>
    </div>
  );
}
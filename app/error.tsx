'use client';

// import Link from "next/link";

 
interface ErrorProps {
  error: Error | null;
  reset: () => void;
}
const Errors = ({error, reset}: ErrorProps) => {
  return (
    <div>
        <h2>Something went wrong!</h2>
        <p>{error?.message}</p>
        <button type="button" onClick={() => reset()}>Try again</button>
        {/* <Link href="/dashboard"> Go To Main Dashboard</Link> */}
    </div>
  );
}
export default Errors;
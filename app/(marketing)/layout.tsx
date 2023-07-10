import Link from "next/link";

export default function MarketingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Link href="/contact" >Contact</Link> <br />
      <Link href="/about" >About</Link> <br />
      {children}
    </section>
  );
}
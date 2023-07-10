export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>Dashbaord Nav</nav>
      <section>{children}</section>
    </>
  );
}
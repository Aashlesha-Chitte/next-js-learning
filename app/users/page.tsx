import Link from "next/link";

async function getAllUsers() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }).then((res) => res.json());
  return users;
}
export default async function Bolg() {
  const users: any = await getAllUsers();
  return (
    <>
      <h1 className="center">All Users</h1>
      <table>
        <tbody>
          <tr>
            <th style={{ textAlign: 'left' }} >User Name</th>
            <th style={{ textAlign: 'left' }}>User Detail</th>
          </tr>
          {users?.map((user: any) => (
            <tr key={user.id}>
              <td>{`${user.name}`}</td>
              <td><Link href={`users/${user.id}`}>{user.name}</Link></td>
            </tr>)
          )}
        </tbody>
      </table>
    </>

  )
}

export const revalidate = 0;
async function getAllUsers() {
  const id = Math.floor(Math.random() * 10) + 1;
  const users = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
  return users;
}
export default async function Dynamic() {
  const userDetail: any = await getAllUsers();
  return (
    <>
      <h1 className="center">Random User Number Details</h1>
      <p><strong> id:</strong> {userDetail.id} </p>
      <p><strong> name:</strong> {userDetail.name} </p>
      <p><strong> username:</strong> {userDetail.username} </p>
      <p><strong> email:</strong> {userDetail.email} </p>
  
    </>
  )
}

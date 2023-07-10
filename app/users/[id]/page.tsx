'use client';
import { useRouter } from 'next/navigation';

async function getAllUser(id: any) {
    const users = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
    // const users = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { next: { revalidate: 10 } }).then((res) => res.json());
    return users;
}

export default async function BolgPost({ params: { id } }: any) {
    const router = useRouter();
    const userDetail = await getAllUser(id);
    return (
        <>
            <h1 className="center">User Number {id} Details</h1>
            <p><strong> id:</strong> {userDetail.id} </p>
            <p><strong> name:</strong> {userDetail.name} </p>
            <p><strong> username:</strong> {userDetail.username} </p>
            <p><strong> email:</strong> {userDetail.email} </p>
            <p><strong> address of street:</strong> {userDetail.address.street} </p>
            <p><strong> suite:</strong> {userDetail.address.suite} </p>
            <p><strong> city:</strong> {userDetail.address.city} </p>
            <p><strong> zipcode:</strong> {userDetail.address.zipcode} </p>
            <p><strong> phone:</strong> {userDetail.phone} </p>
            <p><strong> website:</strong> {userDetail.website} </p>
            <p><strong> companyname:</strong> {userDetail.company.name} </p>
            <p><strong> company catchPhrase:</strong> {userDetail.company.catchPhrase} </p>
            <button type="button" onClick={() => router.push('/users')}>
                Back
            </button>
        </>
    )
}

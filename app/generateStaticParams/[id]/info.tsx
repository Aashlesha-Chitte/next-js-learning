'use client';
export default function InfoText({userDetail, id}: any) {
    return (
        <>
        <h1>Generate Static Params</h1>
        <h2 className="center">User Number {id} Details</h2>
        <p><strong> id:</strong> {userDetail.id} </p>
        <p><strong> name:</strong> {userDetail.name} </p>
        <p><strong> username:</strong> {userDetail.username} </p>
        <p><strong> email:</strong> {userDetail.email} </p>
        </>
    )
};
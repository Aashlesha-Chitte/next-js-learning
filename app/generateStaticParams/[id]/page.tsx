import InfoText from "./info";

export const dynamicParams = false;
async function getAllUser(id: any) {
    const users = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
    return users;
}

export function generateMetadata({ params: { id } }: any) {
    return {
        title: `User Number ${id} Details`
    }
}

export function generateStaticParams() {
    return ['1', '2', '4'].map((id) => ({ id }))
}

export default async function DynamicId({ params: { id } }: any) {
    const userDetail = await getAllUser(id);
    return (
        <>
            <InfoText userDetail={userDetail} id={id}/>
        </>
    )
}

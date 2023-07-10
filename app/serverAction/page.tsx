'use client';
import React, { useState } from "react";
import { showData } from "./serveraction"

export default function serverActions() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData]: any = useState({})
    const displayData = async (formData: any) => {
        const data = await showData(formData);
        console.log('dattttttttttttttttt', data);
        setData(data);
    }
    return (
        <>
            <form action={displayData}>
                <label htmlFor="title">Title:</label><br />
                <input type="text" id="title" name="title" /><br />
                <label htmlFor="body">Body:</label><br />
                <input type="text" id="body" name="body" /><br />
                <label htmlFor="id">Id:</label><br />
                <input type="text" id="id" name="id" /><br /><br />
                <input type="submit" value="Submit" />
            </form>
            <h4>Previous Post Title - {data?.previousPost?.title}</h4>
            <h4>Updated Title - {data?.updatedPost?.title}</h4>
            <h4>Previous body Title - {data?.previousPost?.body}</h4>
            <h4>Updated Body- {data?.updatedPost?.body}</h4>
            <h4>Id - {data?.previousPost?.id}</h4>
        </>
    )
}


'use client';
import { use } from "react";

const getData = async () =>{
    console.log('getData :::  start');
    await new Promise((res) => setTimeout(res, 15000));
    console.log('getData :::  end ::: success');
    return 'Aashlesha';
}

export default function ClientComponent() {
    const name = use(getData());
    return (
      <>
        <h1 className="center">Hello {name} - this is Client Component</h1>
      </>
    )
  }
  
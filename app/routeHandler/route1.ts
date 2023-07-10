import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY,
        } as HeadersInit,
    });
    const data = await res.json();
    // console.log('?????????????????????????????//', data);
    return NextResponse.json({ data });
}
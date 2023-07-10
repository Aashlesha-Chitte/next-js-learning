import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {
  const users = await fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => res.json());
  return NextResponse.json({ users })
}

export async function POST(request: NextRequest) {
  const userData = await request.json();

  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const createdUser = await response.json();

  return NextResponse.json({ user: createdUser });
}


export async function PUT(request: NextRequest) {
  const userData = await request.json();
  const { id, ...userFields } = userData;
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userFields),
  });

  const updatedUser = await response.json();

  return NextResponse.json({ user: {...user, ...updatedUser} });
}


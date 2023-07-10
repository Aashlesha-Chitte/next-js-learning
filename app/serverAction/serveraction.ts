'use server';
export const showData = async (data: any) => {
  const id = data.get('id');
  const title = data.get('title');
  const body = data.get('body');
  console.log(title, body);

  const postData = {
    title: title,
    body: body,
  };
  const previousPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' }).then((res) => res.json());;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error('Failed to update post data.');
  }

  const updatedPost = await response.json();
  console.log('Updated Post:', updatedPost);
  return { updatedPost, previousPost};
};

const getData = async () =>{
    console.log('getData :::  start');
    await new Promise((res) => setTimeout(res, 15000));
    console.log('getData :::  end ::: success');
    return 'Aashlesha';
}

export default async function ServerComponent() {
    const name = await getData();
    return (
      <>
        <h1 className="center">Hello {name} - this is Server Component</h1>
      </>
    )
  }
  
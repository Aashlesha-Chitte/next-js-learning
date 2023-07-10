/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useState } from 'react';


async function getData() {
  const response = await fetch('/api');
  const data = await response.json();
  return data;
}


async function postData() {
  const userBody = {
    name: 'Aashlesha',
    id: '11',
  }
  const response = await fetch('/api', { method: 'POST', body: JSON.stringify(userBody) });
  const data = await response.json();
  return data;
}


async function putData() {
  const userBody = {
    name: 'John Doe',
    id: '1',
  }
  const response = await fetch('/api', { method: 'PUT', body: JSON.stringify(userBody) });
  const data = await response.json();
  console.log('data', data);

  return data;
}
const routeHandler = () => {
  const [data, setData]: any = useState([]);
  const [createdUser, setCreatedUser]: any = useState({});
  const [updatedData, setUpdatedData]: any = useState({});
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const getDataa = await getData();
  //     const createdData = await postData();
  //     const updatedData = await putData();
  //     setCreatedUser(createdData);
  //     setData(getDataa);
  //     setUpdatedData(updatedData);
  //   };

  //   fetchData();
  // }, [])

  console.log('createdUser', createdUser);
  return (
    <>
      <br />

      <button
        type="button"
        onClick={async () => {
          const data = await getData();
          setData(data);
        }}>
        Get Data
      </button>
      {data.length !== 0 ?
        (<h1 className="center">Existing User - {data.users?.[0]?.name}</h1>)
        : ''}
      <br />
      <button
        type="button"
        onClick={async () => {
          const createdData = await postData();
          setCreatedUser(createdData);
        }}>
        Post Data
      </button>
      {Object.keys(createdUser).length !== 0 ?
        (<h1 className="center">Created User - {createdUser?.user?.name} </h1>)
        : ''}
      <br />

      <button
        type="button"
        onClick={async () => {
          const updatedData = await putData();
          setUpdatedData(updatedData);
        }}>
        Put Data
      </button>
      {Object.keys(updatedData).length !== 0 ?
        (<h1 className="center">Updated User - {updatedData?.user?.name} </h1>)
        : ''}

      <br />


    </>
  )
}
export default routeHandler;
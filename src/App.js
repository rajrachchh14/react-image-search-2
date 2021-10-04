import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import Display from './Display';

export default function App() {
  const [FormData, setFormData] = useState({
    search: 'apple',
    searchLenght: '5', // ?
  });

  // const key = '23664585-b63ea49e0412f4d30e9b28cc8';
  //const url = `https://pixabay.com/api/?key=${key}&q=${FormData.search}&image_type=photo&pretty=true&safesearch=false&per_page=${FormData.searchLenght}`;

  // useEffect(async () => {
  //   const result = await axios(
  //     'https://hn.algolia.com/api/v1/search?query=redux',
  //   );
  // setTimeout(() => {
  //   setPosts([
  //     { id: 0, content: 'foo' },
  //     { id: 1, content: 'bar' },
  //   ]);
  //   console.log(posts);
  // }, 1000);
  // }, []);

  const ChangeEvent = (InputEventHook) => (e) => {
    // console.log('s');
    setFormData((prevState) => ({
      ...prevState,
      [InputEventHook]: e.target.value,
    }));
  };

  //
  return (
    <>
      <div className="container">
        <div className="row d-flex">
          <Form Value={FormData} InputEventHook={ChangeEvent} />
          <Display />
        </div>
      </div>
    </>
  );
}

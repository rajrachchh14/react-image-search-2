import React, { useState } from 'react';
import Form from './Form';
import Display from './Display';

export default function App() {
  // const key = '23664585-b63ea49e0412f4d30e9b28cc8';
  // const url = `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&pretty=true&safesearch=false&per_page=10`;

  const [FormData, setFormData] = useState({
    search: '',
    searchLenght: '5',
  });

  const ChangeEvent = (InputEventHook) => (e) => {
    console.log('s');
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

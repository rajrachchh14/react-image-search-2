import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import Display from './Display';

export default function App() {
  const [FormData, setFormData] = useState({
    search: 'apple',
    searchLenght: '5', // ?
  });

  const [Image, setImage] = useState([]);

  useEffect(() => {
    const key = '23664585-b63ea49e0412f4d30e9b28cc8';
    const url = `https://pixabay.com/api/?key=${key}&q=${FormData.search}&image_type=photo&pretty=true&safesearch=false&per_page=${FormData.searchLenght}`;

    // const key = '23664585-b63ea49e0412f4d30e9b28cc8';
    // const url = `https://pixabay.com/api/?key=${key}&q=${FormData.search}&image_type=photo&pretty=true&safesearch=false&per_page=10`;
    // console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setImage(result.hits); // HERE IS ARRAY OF DATA STORE && Chk Also Console
          // setIsLoading(false);
        },

        (error) => {
          // setIsLoading(true);
          // setError(error);
        }
      );
  }, []);
  //console.log(url);

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

          {Image.map((data) => (
            <Display key={data.id} Image={data} />
          ))}
        </div>
      </div>
    </>
  );
}

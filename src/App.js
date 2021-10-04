import React, { useState } from 'react';
import Form from './Form';
import Display from './Display';

export default function App() {
  const [FormData, SetFormData] = useState({
    search: '',
    searchLenght: '5',
  });
  return (
    <>
      <div className="container">
        <div className="row d-flex">
          <Form />
          <Display />
        </div>
      </div>
    </>
  );
}

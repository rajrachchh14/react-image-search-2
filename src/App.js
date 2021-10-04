import React from 'react';

import Form from './Form';
import Display from './Display';

export default function App() {
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

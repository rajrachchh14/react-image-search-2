import React from 'react';

export default function Display() {
  return (
    <>
      <div className="col-12 col-lg-3 p-5">
        <div className="card" style={{ width: '18rem' }}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

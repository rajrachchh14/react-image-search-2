import React from 'react';

export default function Display(Image) {
  const { type, previewURL } = Image.Image;
  const [t1, t2, t3] = Image.Image.tags.split(',');
  
  console.log(Image.Image);
  return (
    <>
      <div className="col-12 col-lg-3 p-2">
        <div className="card" style={{ width: '18rem' }}>
          <img src={previewURL} class="card-img-top" alt={type} />
          <div className="card-body">
            <h5 className="card-title">type : {type}</h5>
            <p className="card-text">
              {' '}
              Tags : {t1} - {t2} - {t3}{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

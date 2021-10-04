import React from 'react';

export default function Form() {
  return (
    <>
      <div className="col-12 col-lg-12">
        <div className="text-center p-2">
          <h3>Search Image & Filter</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search Image"
            />
          </div>
          <div className="col-lg-6">
            <select className="form-select">
              <option value="1" defaultValue>
                5
              </option>
              <option value="2">10</option>
              <option value="3">15</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

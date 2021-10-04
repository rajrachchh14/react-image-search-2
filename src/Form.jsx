import React from 'react';

export default function Form({ Value, InputEventHook }) {
  // console.log({ Value });
  // console.log(InputEventHook);
  const { search, searchLenght } = Value;
  return (
    <>
      <div className="col-12 col-lg-12">
        <div className="text-center p-2">
          <h3>Search Image & Filter</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search Image"
              name="search"
              value={search}
              onChange={InputEventHook('search')}
              // , InputEventHook
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <select
              className="form-select"
              onChange={InputEventHook('searchLenght')}
            >
              <option value="5" defaultValue>
                5
              </option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

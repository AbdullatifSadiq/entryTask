import React from 'react';
import { useState } from 'react';

const AddContact = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please add a contact');
      return;
    }
    onAdd({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label> Name</label>
          <input
            type='text'
            placeholder='Enter a Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='form-control'>
          <label> Number</label>
          <input
            type='text'
            placeholder='Enter a Number'
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
        <input type='submit' value='Save Contact' className='btn btn-block' />
      </form>
    </>
  );
};

export default AddContact;

import React from 'react';
import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';

const UpdateModal = ({ contact, onClose, contacts, setContact, setUpdate }) => {
  // Update Contact
  const updateContact = (id) => {
    const newContact = contacts.filter((contact) => contact.id !== id);
    setContact([...contacts, newContact]);
  };
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please add a contact');
      return;
    }
    updateContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <div className='modal-container-1'>
      <FaTimes className='close-modal-btn' onClick={onClose} />
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label> Name</label>
          <input
            type='text'
            placeholder='Enter Your Name'
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
            placeholder='Enter Your Number'
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
        <input
          type='submit'
          value='Save Contact'
          className='btn btn-block'
          onClick={updateContact}
        />
      </form>
    </div>
  );
};

export default UpdateModal;

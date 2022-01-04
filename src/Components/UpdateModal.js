import React from 'react';
import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';

const UpdateModal = ({ contact, onClose, contacts, setContact, setUpdate }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  // Update Contact
  const updateContact = (id) => {
    const oldContacts = contacts.filter((contact) => contact.id !== id);
    const newContact = { id, name, number };
    setContact([...oldContacts, newContact]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please add a contact');
      return;
    }
    updateContact(contact.id);
    setUpdate(false);
  };

  return (
    <div className='modal-container-1'>
      <FaTimes className='close-modal-btn' onClick={onClose} />
      <form className='add-form'>
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
        <button
          type='submit'
          className='btn btn-block'
          onClick={(e) => onSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateModal;

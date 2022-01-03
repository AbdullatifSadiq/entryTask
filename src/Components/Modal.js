import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ contact, onClose }) => {
  return (
    <div className='modal-container'>
      <FaTimes className='close-modal-btn' onClick={onClose} />
      {
        <>
          <div className='modal-content'>
            <h3>{contact.name}</h3>
            <p>{contact.number}</p>
          </div>
        </>
      }
    </div>
  );
};

export default Modal;

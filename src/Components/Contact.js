import React from 'react';
import { FiDelete, FiEdit, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';
import Modal from './Modal';
import UpdateModal from './UpdateModal';

const Contact = ({ contact, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  return (
    <>
      <div className='contact'>
        <h3>
          {contact.name}{' '}
          <FiExternalLink
            className='view '
            onClick={() => setIsModalOpen(true)}
          />
          <FiEdit className='edit' onClick={() => setUpdate(true)} />
          <FiDelete className='delete' onClick={() => onDelete(contact.id)} />
        </h3>
        <p>{contact.number}</p>
      </div>
      {isModalOpen && (
        <Modal contact={contact} onClose={() => setIsModalOpen(false)} />
      )}
      {update && (
        <UpdateModal contact={contact} onClose={() => setUpdate(false)} />
      )}
    </>
  );
};

export default Contact;

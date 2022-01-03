import Header from './Components/Header';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import { useState } from 'react';

function App() {
  const [contacts, setContact] = useState([]);

  //Add Contact
  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 100 + 1);

    const newContact = { id, ...contact };
    setContact([...contacts, newContact]);
  };
  // Delete Contact
  const deleteContact = (id) => {
    setContact(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className='container'>
      <Header />
      <AddContact onAdd={addContact} />
      <Contacts contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;

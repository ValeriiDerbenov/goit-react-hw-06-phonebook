import { useState, useEffect } from "react"
import './App.css';


import { ContactList } from "./ContactList/ContactList";
// import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";


export const App = () => {
   
  const contacts = useSelector(state => state.contactsStore.contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase().trim() === contact.name.toLowerCase().trim()
    );
   
    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    // setContacts(prevContacts => [
    //   ...prevContacts,
    //   { id: nanoid(), ...contact },
    // ]);
  };

  const changeFilter = event => setFilter(event.target.value.trim());

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // const removeContact = contactId => setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId));

  const visibleContacts = getVisibleContacts();

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (<Filter value={filter} onChangeFilter={changeFilter} />) : (<p>Your phonebook is empty. Add first contact!</p>)}
      {contacts.length > 0 && (
          <ContactList
          contacts={visibleContacts}
          // onRemoveContact={removeContact}
        />
      )}
    </section>
  );
};

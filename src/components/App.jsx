import { useState, useEffect } from "react"
import './App.css';


import { ContactList } from "./ContactList/ContactList";
// import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";


export const App = () => {
   
  const contacts = useSelector(state => state.contactsStore.contacts);
  
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2> 
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </section>
  );
};

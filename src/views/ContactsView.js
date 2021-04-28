import React, { Component } from 'react';
import ContactForm from '../Components/contactForm/ContactForm';
import ContactList from '../Components/contactList/ContactList';
import Filter from '../Components/filter/Filter';

class ContactsView extends Component {
  render() {
    return (
      <>
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default ContactsView;

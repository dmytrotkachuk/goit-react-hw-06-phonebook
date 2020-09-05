import React from 'react';
import Layout from './Layout/Layout'
import Appbar from './Appbar/Appbar'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

function App() {
  return (
    <Layout>
      <Appbar/>
      <ContactForm/>
      <Filter/>
      <ContactList/>
    </Layout>
  );
}

export default App;

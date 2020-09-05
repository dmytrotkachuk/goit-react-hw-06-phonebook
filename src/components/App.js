import React from 'react';
import Layout from './Layout'
import Appbar from './Appbar'

import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Filter from './Filter'

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

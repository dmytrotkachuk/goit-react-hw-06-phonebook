import React from 'react'
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition , TransitionGroup} from 'react-transition-group'
// import contactsActions from '../redux/contacts/contactsActions'
import Contact from './Contact'
import styles from './ContactList.module.css'
import transitions from './transitions.module.css'

const ContactList = ({contacts, onRemoveContact}) => {
    return(
    <TransitionGroup component='ul' className={styles.contactList}>
   
    {contacts.map(contact => 
        
    <CSSTransition 
        classNames={transitions}
        timeout={200}
        key={uuidv4()}> 
        
        <Contact id={contact.id}/>
       
    </CSSTransition> )}
    
    </TransitionGroup>
    )
}

const mapStateToProps = (state) =>{
    const {items, filter} = state.contacts
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = items.filter(contact => contact.name.toLowerCase().includes(normalizeFilter)); 
    return ({ contacts: visibleContacts })
}



export default connect(mapStateToProps)(ContactList);


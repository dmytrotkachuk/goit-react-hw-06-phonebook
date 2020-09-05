import React from 'react'
import {connect} from 'react-redux'
import contactsActions from '../redux/contacts/contactActions'
import Contact from './Contact'
import styles from './ContactList.module.css'
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition , TransitionGroup} from 'react-transition-group'
import transitions from './transitions.module.css'

const ContactList = ({contacts, onRemoveContact}) => {
    return(
    <TransitionGroup component='ul' className={styles.contactList}>
   
    {contacts.map(contact => 
        
    <CSSTransition 
        classNames={transitions}
        timeout={200}
        key={uuidv4()}> 
        
        <Contact 
        contact={contact} 
        onRemove={()=> onRemoveContact(contact.id)}/>
       
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

const mapDispatchToProps = {
    onRemoveContact: contactsActions.removeContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);


import React from 'react'
import styles from './Contact.module.css'
import {connect} from 'react-redux'
import contactsActions from '../redux/contacts/contactsActions'
// import PropTypes from 'prop-types';

const Contact = ({name,number , onRemove}) => {
    
    return(
    <li className={styles.contact}>
    <p className={styles.contactData}>{name}</p>
    <p className={styles.contactData}>{number}</p>
    <button 
    className={styles.button} 
    onClick={onRemove}
    >X</button>
    </li>
    
    )}

const mapStateToProps = (state,ownProps) => {
 const item = state.contacts.items.find(item => item.id === ownProps.id)
 return {...item}
};


const mapDispatchToProps = (dispatch, ownProps) =>({
    onRemove: () => dispatch(contactsActions.removeContact(ownProps.id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Contact);


// Contact.propTypes = {
//     contact: PropTypes.shape(PropTypes.string.isRequired) ,
//     onRemove: PropTypes.func
// }
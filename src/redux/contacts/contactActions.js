import { v4 as uuidv4 } from 'uuid';
import actionType from './contactsActionsType'

const addContact = (name,number) => ({
type: actionType.ADD,
payload: {contact:{    
    id:uuidv4(),
    name,
    number}
}})

const removeContact = contactId => ({
    type: actionType.REMOVE,
    payload: {contactId}

})

const changeFilter = filter => ({
    type: actionType.CHANGE_FILTER,
    payload: {filter}
})


export default {addContact, removeContact, changeFilter}


//   isAlready = () =>{
//     this.setState({notification:false})
//   }
//   
//   removeContact = contactId =>{
//     console.log(contactId)
//     this.setState(prevState => ({contacts: prevState.contacts.filter(({id})=> id!==contactId)}))
//   }

//   changeFilter = filter =>{
//     this.setState({filter})
//   }
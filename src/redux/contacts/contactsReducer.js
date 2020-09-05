import {combineReducers} from 'redux'
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions'

const addContact = (state, action) => {
    return [...state, action.payload.contact]
};
const removeContact = (state, action) =>{ 
   return  state.filter(contact => contact.id !== action.payload)
};

const items = createReducer([],{
    [contactsActions.addContact]: addContact,
    [contactsActions.removeContact]: removeContact,
})

const filter = createReducer('',{
    [contactsActions.changeFilter]: (state, action) =>  action.payload
})


export default combineReducers({
    items,
    filter
})

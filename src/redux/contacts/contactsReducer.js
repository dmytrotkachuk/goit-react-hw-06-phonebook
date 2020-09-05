import {combineReducers} from 'redux'
import actionTypes from './contactsActionsType'
// import {addContact, removeContact, changeFilter } from './contactActions'
// import contactsActionsType from './contactsActionsType';

const items = (state = [], {type,payload}) => {
    switch(type){
        case actionTypes.ADD:
            return [...state, payload.contact];
        
        case actionTypes.REMOVE:
            return state.filter(contact => contact.id !== payload.contactId)

        default: return state;
    }
};

const filter = (state='', {type,payload}) =>{
    switch (type){
        case actionTypes.CHANGE_FILTER:
            return payload.filter;
        default: return state
    }
};

export default combineReducers({
    items,
    filter
})

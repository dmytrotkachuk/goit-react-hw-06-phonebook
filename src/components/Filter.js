import React from 'react'
import {connect} from 'react-redux';
import contactsActions from '../redux/contacts/contactActions'
import styles from './Filter.module.css'

const Filter = ({value, onChangeFilter}) =>(
    <div className={styles.filterContainer}>
    <label className={styles.filterName} htmlFor='filter'>Find contacts by name</label>
    <input
    className={styles.filterField}
    // type='text'
    value={value}
    onChange={e=> onChangeFilter(e.target.value)}
    id='filter'/>
    </div>
)

const mapStateToProps = (state) =>({
    value: state.contacts.filter
})

const mapDispatchToProps = {
    onChangeFilter: contactsActions.changeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContsctList/ContsctList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from './../redux/Operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm ></ContactForm>
      <Filter></Filter>
      <h2>Contacts</h2>
      {contacts.length !== 0 && <ContactList></ContactList>}
    </div>
  )
}
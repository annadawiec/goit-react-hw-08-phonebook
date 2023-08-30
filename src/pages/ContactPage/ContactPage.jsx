import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { getContacts, getFilter, selectLoading } from 'redux/contacts/selectors';
import { delContact, fetchContacts } from 'redux/contacts/actions';


export const ContactPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  const handleDelete = contactId => {
    dispatch(delContact(contactId));
  };

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter/>
      <ContactList 
      contacts={getFilteredContacts()}
      handleDelete={handleDelete}/>
    </>
  );
}
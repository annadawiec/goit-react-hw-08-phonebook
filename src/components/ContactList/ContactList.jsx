import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export const ContactList = ({ contacts, handleDelete }) => (
  <ul className={css.list}>
    {contacts.map((contact, id) => (
      <li key={id} className={css.item_contact}>
        <span className={css.name_contact}>
          {contact.name} {contact.number}
        </span>
          <Button variant="contained" size="small"
          type="button"
          onClick={() => handleDelete(contact.id)}
        >
          {' '}
          Delete{' '}
        </Button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { delContact } from 'redux/contacts/actions';


export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(delContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <button className={css.delete} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
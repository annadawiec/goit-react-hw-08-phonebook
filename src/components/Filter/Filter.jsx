import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <input
        className={css.input_filter}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

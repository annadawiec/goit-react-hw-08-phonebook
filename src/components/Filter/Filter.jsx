
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/actions';
import { TextField } from '@mui/material';
import css from "./Filter.module.css"

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.label_filter}>
         <TextField id="standard-basic"  variant="standard" color="secondary"  margin="normal" size="normal" focused 
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

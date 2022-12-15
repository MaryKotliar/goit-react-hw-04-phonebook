import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Wrapper } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <Wrapper>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        onChange={onChange}
        type="text"
        name="filter"
        value={value}
        id={filterInputId}
      />
    </Wrapper>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

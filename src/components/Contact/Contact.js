import PropTypes from 'prop-types';
import { Button, Wrapper } from './Contact.styled';
export const Contact = ({ contact: { name, number, id }, onDeleteContact }) => {
  return (
    <Wrapper>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Wrapper>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),

  onDeleteContact: PropTypes.func.isRequired,
};

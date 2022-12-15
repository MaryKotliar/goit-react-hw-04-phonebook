import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';
import { object } from 'prop-types';

export const ContactList = ({ items, onDeleteContact }) => {
  return (
    <>
      <ul>
        {items.map(item => (
          <Item key={item.id}>
            <Contact contact={item} onDeleteContact={onDeleteContact}></Contact>
          </Item>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

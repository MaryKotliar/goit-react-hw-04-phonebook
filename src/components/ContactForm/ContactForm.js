import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, BtnSubmit } from './ContactForm.styled';
export class ContactForm extends Component {
  static propTypes = {};
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit({ ...this.state });
    this.setState({ name: '', number: '' });
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
          />

          <label htmlFor={this.numberInputId}>Number</label>
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
          />

          <BtnSubmit type="submit">Add contact</BtnSubmit>
        </Form>
      </>
    );
  }
}

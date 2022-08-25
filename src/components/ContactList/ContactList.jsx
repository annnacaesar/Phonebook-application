import { Item, ButtonClose, Contact } from './ContactList.styled';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
// import { useDispatch } from 'react-redux';
// import { useDeleteContactMutation } from '../../redux/contacs/contactsSlice';

// const initialState = [
// 	{
// 		name: 'Anna',
// 		number: '06800987675',
// 		id: 1,
// 	},
// 	{
// 		name: 'Inna',
// 		number: '06800987675',
// 		id: 12,
// 	},
// 	{
// 		name: 'Tanya',
// 		number: '06800987675',
// 		id: 13,
// 	},
// ];

const ContactList = () => {
	// const [deleteContact] = useDeleteContactMutation();
	// const dispatch = useDispatch();

	const dispatch = useDispatch();
	const contacts = useSelector(contactsSelectors.getVisibleContacts);
	// const contacts = initialState;

	const onDeleteContact = id =>
		dispatch(contactsOperations.deleteContact(id));
	// const onToggleCompleted = id =>
	// 	dispatch(todosOperations.toggleCompleted(id));

	return (
		<ul>
			{contacts &&
				contacts.map(({ id, name, number }) => {
					return (
						<Item key={id}>
							<Contact>
								{name}: {number}
							</Contact>
							<ButtonClose
								type="button"
								onClick={() => onDeleteContact(id)}
							>
								x
							</ButtonClose>
						</Item>
					);
				})}
		</ul>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.array,
};

export default ContactList;

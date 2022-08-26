import { InputFilter, LabelFilter } from './Filter.styled';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, contactsSelectors } from 'redux/contacts';

const Filter = () => {
	const dispatch = useDispatch();
	const value = useSelector(contactsSelectors.getfilter);

	const handleChangeFilter = e => {
		console.log(e.target.value);
		dispatch(changeFilter(e.target.value));
	};
	return (
		<LabelFilter>
			<InputFilter
				type="text"
				value={value}
				onChange={handleChangeFilter}
			/>
			Find contact by name
		</LabelFilter>
	);
};

Filter.propTypes = {
	filter: PropTypes.string,
	onChange: PropTypes.func,
};

export default Filter;

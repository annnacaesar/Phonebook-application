import { InputFilter, LabelFilter } from './Filter.styled';
import { PropTypes } from 'prop-types';

const Filter = ({ filter, onChange }) => (
	<LabelFilter>
		<InputFilter type="text" value={filter} onChange={onChange} /> Знайти
		контакт за ім'ям
	</LabelFilter>
);

Filter.propTypes = {
	filter: PropTypes.string,
	onChange: PropTypes.func,
};

export default Filter;

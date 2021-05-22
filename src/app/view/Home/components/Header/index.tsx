import Search from 'app/components/Search';
import Select from 'app/components/Select';
import Text from 'app/components/Text';
import HeaderStyles from './styles';

const HomeHeader = () => {
	return (
		<HeaderStyles.Container>
			<Search placeholder="Search Templates" />
			<HeaderStyles.Filter>
				<Text color="gray200"> Sort By: </Text>
				<Select className="filter-select" label="Category" options={[]} />
				<Select className="filter-select" label="Order" options={[]} />
				<Select className="filter-select" label="Date" options={[]} />
			</HeaderStyles.Filter>
		</HeaderStyles.Container>
	);
};

export default HomeHeader;

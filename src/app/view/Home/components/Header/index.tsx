import { useContext } from 'react';

import { TemplateCategory, TemplateDate, TemplateOrder } from 'app/api/types';
import Search from 'app/components/Search';
import Select from 'app/components/Select';
import Text from 'app/components/Text';
import { ContentContext } from '../../providers/ContentProvider';
import HeaderStyles from './styles';

const HomeHeader = () => {
	const contentContext = useContext(ContentContext);
	return (
		<HeaderStyles.Container>
			<Search
				placeholder="Search Templates"
				value={contentContext?.query || ''}
				onChange={(event) => contentContext?.handleSearch(event)}
			/>
			<HeaderStyles.Filter>
				<Text color="gray200"> Sort By: </Text>
				<Select
					className="filter-select"
					label="Category"
					options={[
						{ value: 'all', label: 'All' },
						{ value: 'education', label: 'Education' },
						{ value: 'e-commerce', label: 'E-commerce' },
						{ value: 'health', label: 'Health' },
					]}
					value={contentContext?.category as string}
					onChange={(value) => contentContext?.handleChangeInCategory?.(value as TemplateCategory)}
				/>
				<Select
					className="filter-select"
					label="Order"
					options={[
						{ label: 'Default', value: 'default' },
						{ label: 'Ascending', value: 'ascending' },
						{ label: 'Descending', value: 'descending' },
					]}
					value={contentContext?.order as string}
					onChange={(value) => contentContext?.handleChangeInOrder?.(value as TemplateOrder)}
				/>
				<Select
					className="filter-select"
					label="Date"
					options={[
						{ label: 'Default', value: 'default' },
						{ label: 'Ascending', value: 'ascending' },
						{ label: 'Descending', value: 'descending' },
					]}
					value={contentContext?.date as string}
					onChange={(value) => contentContext?.handleChangeInDate?.(value as TemplateDate)}
				/>
			</HeaderStyles.Filter>
		</HeaderStyles.Container>
	);
};

export default HomeHeader;

import { useContext } from 'react';

import { TemplateCategory, TemplateDate, TemplateOrder } from 'app/api/types';
import Search from 'app/components/Search';
import Select from 'app/components/Select';
import Text from 'app/components/Text';
import { ContentContext } from '../../providers/ContentProvider';
import HeaderStyles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from 'app/redux/reducers';
import { isReducerBusy } from 'app/utils/helpers';

const HomeHeader = () => {
	const contentContext = useContext(ContentContext);

	const status = useSelector((state: RootState) => state.contentReducer.status);

	const isReducerOperating = isReducerBusy(status);

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
						{ value: 'Education', label: 'Education' },
						{ value: 'E-commerce', label: 'E-commerce' },
						{ value: 'Health', label: 'Health' },
					]}
					value={contentContext?.category as string}
					onChange={(value) => contentContext?.handleChangeInCategory?.(value as TemplateCategory)}
					disabled={isReducerOperating}
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
					disabled={isReducerOperating}
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
					disabled={isReducerOperating}
				/>
			</HeaderStyles.Filter>
		</HeaderStyles.Container>
	);
};

export default HomeHeader;

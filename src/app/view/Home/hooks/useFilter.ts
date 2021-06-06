import { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TemplateCategory, TemplateDate, TemplateOrder } from 'app/api/types';
import useComponentDidMount from 'app/hooks/useComponentDidMount';
import { fetchAllContents, fetchContentsByFilter } from 'app/redux/contents/actions';
import { RootState } from 'app/redux/reducers';
import { GetFilteredDataParams } from 'app/utils/pagination';

export type Filters = Omit<GetFilteredDataParams, 'data' | 'currentIndex' | 'totalEntries'> & {
	query: string;
	category: TemplateCategory;
	order: TemplateOrder;
	date: TemplateDate;
};

const initialFilters: Filters = {
	query: '',
	category: 'all',
	order: 'default',
	date: 'default',
};

const useFilter = () => {
	const [filters, setFilters] = useState<Filters>(initialFilters);

	const { pagination } = useSelector((state: RootState) => state.contentReducer);
	const dispatch = useDispatch();

	const handleSearch = (event: ChangeEvent<HTMLInputElement>): any => {
		setFilters({ ...initialFilters, query: event.target.value });
	};

	const handleChangeInCategory = (category: TemplateCategory) => {
		setFilters((prevFilters) => ({ ...prevFilters, category }));
	};

	const handleChangeInOrder = (order: TemplateOrder) => {
		setFilters((prevFilters) => ({ ...prevFilters, order }));
	};

	const handleChangeInDate = (date: TemplateDate) => {
		setFilters((prevFilters) => ({ ...prevFilters, date }));
	};

	useEffect(() => {
		dispatch(fetchAllContents());
	}, [dispatch]);

	const handleNext = () => {
		const nextIndex = (pagination.current_index || -1) + 1;
		dispatch(
			fetchContentsByFilter({
				...filters,
				nextIndex: nextIndex,
				lastIndex: pagination.last_index || 0,

				totalEntries: pagination.total_entries || 0,
				entriesList: pagination.entries_list || [],
			})
		);
	};

	const handlePrevious = () => {
		let currentIndex = pagination.last_index || 0;

		if (currentIndex < 0) {
			currentIndex = 0;
		}

		dispatch(
			fetchContentsByFilter({
				...filters,
				totalEntries: pagination.total_entries || 0,
				nextIndex: currentIndex,
				entriesList: pagination.entries_list || [],
			})
		);
	};

	useComponentDidMount(() => {
		dispatch(
			fetchContentsByFilter({
				...filters,
				nextIndex: 0,
			})
		);
	}, [filters]);

	return {
		filters,
		handleSearch,
		handleChangeInOrder,
		handleChangeInDate,
		handleChangeInCategory,
		handleNext,
		handlePrevious,
	};
};

export default useFilter;

import { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TemplateCategory, TemplateDate, TemplateOrder } from 'app/api/types';
import useComponentDidMount from 'app/hooks/useComponentDidMount';
import { fetchAllContents, fetchContentsByFilter } from 'app/redux/contents/actions';
import { RootState } from 'app/redux/reducers';
import { GetFilteredDataParams } from 'app/utils/pagination';
import { getTotalPages, isEntityEmpty } from 'app/utils/helpers';

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
	const [previousIndexes, setPreviousIndexes] = useState([0]);

	const { pagination, data } = useSelector((state: RootState) => state.contentReducer);
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
		if (previousIndexes.length !== getTotalPages(pagination.total_entries) - 1) {
			setPreviousIndexes((prevIndexes) => {
				if (!pagination.last_index) {
					return [0];
				} else {
					const newIndexes = [...prevIndexes];
					newIndexes.push(pagination.last_index || 0);
					return newIndexes;
				}
			});
			const nextIndex = (pagination.current_index || -1) + 1;
			dispatch(
				fetchContentsByFilter({
					...filters,
					nextIndex,

					totalEntries: pagination.total_entries || 0,
					entriesList: pagination.entries_list || [],
				})
			);
		} else {
			console.log('disabled');
		}
	};

	const handlePrevious = () => {
		let currentIndex = previousIndexes[previousIndexes.length - 1];

		if (currentIndex < 0) {
			currentIndex = 0;
		}

		setPreviousIndexes((prevIndex) => {
			const newIndexes = [...previousIndexes];
			newIndexes.pop();
			if (isEntityEmpty(newIndexes)) {
				return [0];
			}
			return newIndexes;
		});

		dispatch(
			fetchContentsByFilter({
				...filters,
				totalEntries: pagination.total_entries || 0,
				nextIndex: currentIndex,
				entriesList: pagination.entries_list || [],
			})
		);
	};

	useEffect(() => {
		console.log({ previousIndexes });
	}, [previousIndexes]);

	useEffect(() => {
		console.log({ pagination });
	}, [pagination]);

	useComponentDidMount(() => {
		if (isEntityEmpty(data)) {
			dispatch(fetchAllContents());
		} else {
			dispatch(
				fetchContentsByFilter({
					...filters,
					nextIndex: 0,
				})
			);
		}
		setPreviousIndexes([0]);
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

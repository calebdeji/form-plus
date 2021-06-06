import { createContext, FC, ChangeEvent } from 'react';

import { TemplateCategory, TemplateDate, TemplateOrder } from 'app/api/types';
import useFilter, { Filters } from '../hooks/useFilter';

interface ContentContextType extends Filters {
	handleSearch: (_: ChangeEvent<HTMLInputElement>) => any;
	handleChangeInCategory: (_: TemplateCategory) => void;
	handleChangeInOrder: (_: TemplateOrder) => void;
	handleChangeInDate: (_: TemplateDate) => void;
	handleNext: () => void;
	handlePrevious: () => void;
}

export const ContentContext = createContext<ContentContextType | null>(null);

const ContentProvider: FC = ({ children }) => {
	const { filters, ...rest } = useFilter();

	return <ContentContext.Provider value={{ ...filters, ...rest }}>{children}</ContentContext.Provider>;
};

export default ContentProvider;

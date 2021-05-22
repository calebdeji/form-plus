import { HTMLAttributes } from 'react';
import { ReactComponent as SVGIcon } from 'app/assets/icons/search.svg';
import SearchStyle from './styles';

interface SearchProps extends HTMLAttributes<HTMLInputElement> {}

const Search = (props: SearchProps) => {
	return (
		<SearchStyle.Container>
			<SearchStyle.Search {...props} />
			<button className="icon">
				<SVGIcon />
			</button>
		</SearchStyle.Container>
	);
};

export default Search;

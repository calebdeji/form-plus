import styled from '@emotion/styled';

import colors from 'app/constants/colors';

const Container = styled.div`
	max-width: 319px;
	position: relative;
	.icon {
		position: absolute;
		right: 13px;
		top: 14px;
	}
`;

const Search = styled.input`
	height: 45px;
	border: solid 0.5px ${colors.gray4};
	outline-color: ${colors.gray4};
	outline-width: 0px;
	display: flex;
	align-items: center;
	padding: 0 43px 0 32px;
	width: 100%;
`;

const SearchStyle = {
	Search,
	Container,
};

export default SearchStyle;

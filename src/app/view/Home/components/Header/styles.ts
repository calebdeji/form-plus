import styled from '@emotion/styled/macro';
import SelectStyles from 'app/components/Select/styles';

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	row-gap: 20px;
	column-gap: 30px;
	/* padding-top: 79px; */
	padding-top: 20px;
	flex-wrap: wrap;
	@media all and (max-width: 650px) {
		flex-direction: column;
		align-items: flex-start;

		> div {
			width: 100%;
		}
	}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
	column-gap: 20px;
	flex-wrap: wrap;
	row-gap: 20px;

	@media all and (max-width: 650px) {
		display: grid;
		width: 100%;

		.filter-select {
			width: 100%;
		}
	}
`;

const HeaderStyles = {
	Container,
	Filter,
};

export default HeaderStyles;

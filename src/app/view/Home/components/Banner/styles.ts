import styled from '@emotion/styled';
import colors from 'app/constants/colors';

const Container = styled.div`
	display: flex;
	justify-content: center;
	min-height: 60px;
	background-color: ${colors.orange300};
	border-radius: 2px;
	align-items: center;
	margin: 85px 0 60px;
	padding: 10px 20px;
	.icon {
		margin-right: 10px;
	}
`;

const BannerStyles = { Container };

export default BannerStyles;

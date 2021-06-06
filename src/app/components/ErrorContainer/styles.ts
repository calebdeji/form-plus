import styled from '@emotion/styled';
import colors from 'app/constants/colors';

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	width: 150px;
	height: 40px;
	color: ${colors.white100};
	background-color: ${colors.shade6};
	border: solid 1px ${colors.shade6};
	border-radius: 5px;
	margin-top: 20px;
`;

const ErrorStyles = {
	Container,
	Button,
};

export default ErrorStyles;

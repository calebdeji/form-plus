import styled from '@emotion/styled';
import colors from 'app/constants/colors';

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 75px 0;
`;

const NumberData = styled.div`
	display: flex;
	align-items: center;
`;

const NumberBox = styled.span`
	width: 30px;
	height: 30px;
	background: ${colors.white100};
	border: 1px solid ${colors.black200};
	border-radius: 3px;
	font-weight: 500;
	font-size: 18px;
	color: ${colors.black200};
	margin-right: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const NavigationButton = styled.button`
	color: ${colors.black200};
	font-size: 18px;
	font-weight: 500;

	&:disabled {
		color: ${colors.opaqueBlack};
		cursor: auto;
	}
`;

const FooterStyles = {
	Container,
	NumberBox,
	NavigationButton,
	NumberData,
};

export default FooterStyles;

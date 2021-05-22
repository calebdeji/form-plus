import FooterStyles from './styles';
import Text from 'app/components/Text';

const Footer = () => {
	return (
		<FooterStyles.Container>
			<FooterStyles.NavigationButton>Previous</FooterStyles.NavigationButton>
			<FooterStyles.NumberData>
				<FooterStyles.NumberBox>1</FooterStyles.NumberBox>{' '}
				<Text color="black200" size={18}>
					of 14
				</Text>
			</FooterStyles.NumberData>
			<FooterStyles.NavigationButton> Next </FooterStyles.NavigationButton>
		</FooterStyles.Container>
	);
};

export default Footer;

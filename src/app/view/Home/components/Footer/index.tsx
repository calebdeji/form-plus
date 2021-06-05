import { useContext } from 'react';

import Text from 'app/components/Text';
import FooterStyles from './styles';
import { ContentContext } from '../../providers/ContentProvider';
import { useSelector } from 'react-redux';
import { RootState } from 'app/redux/reducers';
import { getTotalPages } from 'app/utils/helpers';

const Footer = () => {
	const contentContext = useContext(ContentContext);
	const pagination = useSelector((state: RootState) => state.contentReducer.pagination);
	console.log({ pagination });
	return (
		<FooterStyles.Container>
			<FooterStyles.NavigationButton onClick={() => contentContext?.handlePrevious()}>
				Previous
			</FooterStyles.NavigationButton>
			<FooterStyles.NumberData>
				<FooterStyles.NumberBox> {pagination.current_page} </FooterStyles.NumberBox>
				<Text color="black200" size={18}>
					of {getTotalPages(pagination.total_entries)}
				</Text>
			</FooterStyles.NumberData>
			<FooterStyles.NavigationButton onClick={() => contentContext?.handleNext()}> Next </FooterStyles.NavigationButton>
		</FooterStyles.Container>
	);
};

export default Footer;

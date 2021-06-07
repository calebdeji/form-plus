import { useContext } from 'react';

import Text from 'app/components/Text';
import FooterStyles from './styles';
import { ContentContext } from '../../providers/ContentProvider';
import { useSelector } from 'react-redux';
import { RootState } from 'app/redux/reducers';
import { getCurrentPage, getTotalPages, isEntityEmpty, isReducerBusy } from 'app/utils/helpers';

const Footer = () => {
	const contentContext = useContext(ContentContext);
	const { pagination, status, filteredData } = useSelector((state: RootState) => state.contentReducer);

	const isReducerFetching = isReducerBusy(status);
	const isDataEmpty = isEntityEmpty(filteredData);

	return (
		<FooterStyles.Container>
			<FooterStyles.NavigationButton
				disabled={isReducerFetching || isDataEmpty}
				onClick={() => contentContext?.handlePrevious()}
			>
				Previous
			</FooterStyles.NavigationButton>
			<FooterStyles.NumberData>
				{isReducerFetching ? (
					<Text color="opaqueBlack" size={18}>
						Loading...
					</Text>
				) : (
					<>
						{isDataEmpty ? (
							<Text color="opaqueBlack" size={18}>
								List is empty
							</Text>
						) : (
							<>
								<FooterStyles.NumberBox>{getCurrentPage(pagination.last_index_in_entries)}</FooterStyles.NumberBox>
								<Text color="black200" size={18}>
									of {getTotalPages(pagination.total_entries)}
								</Text>
							</>
						)}
					</>
				)}
			</FooterStyles.NumberData>
			<FooterStyles.NavigationButton
				disabled={isReducerFetching || isDataEmpty}
				onClick={() => contentContext?.handleNext()}
			>
				Next
			</FooterStyles.NavigationButton>
		</FooterStyles.Container>
	);
};

export default Footer;

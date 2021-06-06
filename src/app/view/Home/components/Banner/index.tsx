import BannerStyles from './styles';
import { ReactComponent as WarningIcon } from 'app/assets/icons/warning.svg';
import Text from 'app/components/Text/index';

const Banner = () => {
	return (
		<BannerStyles.Container>
			<WarningIcon className="icon" />
			<Text lineHeight={22}>
				Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available
				templates
			</Text>
		</BannerStyles.Container>
	);
};

export default Banner;

import { FC } from 'react';
import Lottie from 'react-lottie';
import animationData from 'app/assets/data/error.json';
import ErrorStyles from './styles';
import Text from '../Text';

interface Props {
	message?: string;
	retryAction?: () => void;
}

const ErrorContainer: FC<Props> = (props) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	const handleClick = () => {
		props.retryAction?.();
	};

	return (
		<ErrorStyles.Container>
			<Lottie options={defaultOptions} width={200} height={200} />
			<Text size={18}> {props.message || 'Error Occured'} </Text>
			<ErrorStyles.Button onClick={handleClick}>Try Again</ErrorStyles.Button>
		</ErrorStyles.Container>
	);
};

export default ErrorContainer;

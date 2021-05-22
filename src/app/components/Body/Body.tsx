import { FC } from 'react';
import BodyStyles from './styles';

const Body: FC = ({ children }) => {
	return <BodyStyles.Body>{children}</BodyStyles.Body>;
};

export default Body;

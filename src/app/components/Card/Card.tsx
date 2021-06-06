import { FC } from 'react';
import CardStyles from './styles';

const Card: FC = ({ children }) => {
	return <CardStyles.Card>{children}</CardStyles.Card>;
};

export default Card;

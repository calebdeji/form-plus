import { FC, ElementType } from 'react';
import TextStyle from './styles';

export interface TextProps {
	as?: ElementType<any> & string;
	weight?: number;
	size?: number;
	color?: string;
	align?: 'center' | 'left' | 'right';
	lineHeight?: number;
}

const Text: FC<TextProps> = ({ children, ...others }) => {
	return <TextStyle {...others}> {children} </TextStyle>;
};

export default Text;

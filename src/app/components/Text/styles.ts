import { css } from '@emotion/react';
import styled from '@emotion/styled';

import colors from 'app/constants/colors';
import { TextProps } from './Text';

const TextStyle = styled.p<TextProps>`
	color: ${colors.black100};
	font-size: 14px;

	${(props) =>
		props.size &&
		css`
			font-size: ${`${props.size}px`};
		`};
	${(props) =>
		props.color &&
		css`
			color: ${colors[props.color] || props.color};
		`};
	${(props) =>
		props.weight &&
		css`
			font-weight: ${props.weight};
		`};
	${(props) =>
		props.align &&
		css`
			text-align: ${props.align};
		`};
	${(props) =>
		props.lineHeight &&
		css`
			line-height: ${props.lineHeight}px;
		`}
`;

export default TextStyle;

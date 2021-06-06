import styled from '@emotion/styled';

import colors from 'app/constants/colors';

const Select = styled.fieldset`
	border: solid 0.5px ${colors.neutral5};
	height: 39px;
	min-width: 160px;
	width: 160px;
	padding: 0 15px 0 23px;
	position: relative;
	border-radius: 2px;
	margin: 0;
	padding: 0 15px 0 23px;

	&:disabled {
		border-color: ${colors.fadedWhite};
		background-color: ${colors.fadedWhite};
	}

	.icon {
		transition: transform ease-in 200ms;
	}

	.icon-normal {
		transform: rotate(360deg);
	}

	.icon-reversed {
		transform: rotate(180deg);
	}
`;

const SelectedField = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	padding: 5px 0 11px;
`;

const SelectDropDown = styled.div`
	position: absolute;
	/* bottom: -47px; */
	left: 0;
	background-color: ${colors.white100};
	width: 100%;
	box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	z-index: 99999;
`;

const SelectDropDownItem = styled.div`
	padding: 10px 15px 15px 23px;
`;

const SelectStyles = {
	Select,
	SelectDropDown,
	SelectDropDownItem,
	SelectedField,
};

export default SelectStyles;

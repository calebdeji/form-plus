import { useCallback, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import Text from '../Text';
import SelectStyles from './styles';
import { ReactComponent as DropDownIcon } from 'app/assets/icons/dropdown.svg';
import { isEntityEmpty, mapKeys } from 'app/utils/helpers';

interface SelectOptions {
	label: string;
	value: string;
}

interface SelectProps {
	label?: string;
	options: Array<SelectOptions>;
	value?: string;
	onChange?: (value: string) => void;
	className?: string;
	disabled?: boolean;
}

const Select = (props: SelectProps) => {
	const [isDropDownVisible, setisDropDownVisible] = useState(false);

	const closeDropDown = () => {
		setisDropDownVisible(false);
	};

	const toggleDropDown = () => {
		if (!Boolean(props.disabled)) {
			setisDropDownVisible((prevState) => !prevState);
		}
	};

	const getLabel = useCallback(() => {
		if (isEntityEmpty(props.options)) {
			return 'Select';
		}
		const optionsAsLabel = mapKeys(props.options, 'value');
		return optionsAsLabel[props.value || props.options[0].value]?.label;
	}, [props.value, props.options]);

	const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => {
		event.stopPropagation();

		props.onChange?.(value);

		closeDropDown();
	};

	return (
		<ClickAwayListener onClickAway={closeDropDown}>
			<SelectStyles.Select
				className={props.className || ''}
				disabled={props.disabled || false}
				onClick={toggleDropDown}
				tabIndex={-1}
			>
				{props.label && (
					<Text as="legend" color="gray100" size={10}>
						{props.label}
					</Text>
				)}

				<SelectStyles.SelectedField>
					<Text color="black200"> {getLabel()} </Text>
					<DropDownIcon className={`icon ${isDropDownVisible ? 'icon-reversed' : 'icon-normal'}`} />
				</SelectStyles.SelectedField>

				{isDropDownVisible && (
					<SelectStyles.SelectDropDown>
						{props.options.map((item) => {
							return (
								<SelectStyles.SelectDropDownItem
									tabIndex={-1}
									key={`${item.label}-${item.value}`}
									onClick={(event) => {
										handleOnClick(event, item.value);
									}}
								>
									<Text> {item.label}</Text>
								</SelectStyles.SelectDropDownItem>
							);
						})}
					</SelectStyles.SelectDropDown>
				)}
			</SelectStyles.Select>
		</ClickAwayListener>
	);
};

export default Select;

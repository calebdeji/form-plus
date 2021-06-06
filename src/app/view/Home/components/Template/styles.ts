import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import colors from 'app/constants/colors';

const Container = styled.div`
	display: grid;
	row-gap: 23px;
`;

const TemplateCategoryAndNumber = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.category-text {
		text-transform: capitalize;
	}
`;

const TemplateCard = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;

	.upper {
		padding: 19px 22px 0 19px;
		display: grid;
		row-gap: 17px;
		flex: 1;

		.description {
			box-sizing: content-box;
			height: 51px;
			padding: 17px 0 41px;
		}
	}
	.lower {
		padding: 12px 5px 11px 19px;
		background-color: ${colors.neutral7};
	}
`;

const TemplateCardUpperLoadingAnimation = keyframes`
  from{
    background-color : ${colors.fadedBlack};
    transform : translateX(0);

  }
  to{
    background-color : ${colors.white100};
    transform : translateX(1);

  }
`;

const TemplateCardLowerLoadingAnimation = keyframes`
  from{
    background-color : ${colors.white100};
    transform : translateX(1);

  }
  to{
    transform : translateX(0);
    background-color : ${colors.fadedBlack};

  }
`;

const TemplateCardLoading = styled.div`
	.upper {
		height: 140px;
		background-color: ${colors.neutral7};
		position: relative;

		&:after {
			content: '';
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			transition: background-color 300ms ease-in-out;

			animation: ${TemplateCardUpperLoadingAnimation} 1000ms ease-in-out infinite alternate;
		}
	}

	.lower {
		height: 41px;
		background-color: ${colors.white100};
		position: relative;
		&:after {
			content: '';
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			transition: background-color 300ms ease-in-out;

			animation: ${TemplateCardLowerLoadingAnimation} 1000ms ease-in-out infinite alternate;
		}
	}
`;

const TemplateCardCollections = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(358px, 1fr));
	column-gap: 67px;
	row-gap: 70px;

	@media all and (max-width: 380px) {
		grid-template-columns: none;
		grid-auto-flow: row;
	}
`;

const TemplateStyles = {
	TemplateCard,
	TemplateCardCollections,
	TemplateCategoryAndNumber,
	Container,
	TemplateCardLoading,
};

export default TemplateStyles;

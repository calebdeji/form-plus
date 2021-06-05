import TemplateStyles from './styles';
import Text from 'app/components/Text';
import Card from 'app/components/Card';
import { useSelector } from 'react-redux';
import { RootState } from 'app/redux/reducers';
import { extractDescription, isReducerBusy } from 'app/utils/helpers';

const card: Array<{
	title: String;
	description: String;
}> = [
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
	{
		title: 'Alumni Membership Form Template',
		description:
			'Engage your alumni network better with this alumni registration form template. Embed this in your website ...',
	},
];

const LoadingTemplate = () => {
	return (
		<>
			{card.map(({ title, description }, index) => {
				return (
					<Card key={`${index}-${title}-${description}`}>
						<TemplateStyles.TemplateCardLoading>
							<div className="upper"></div>
							<div className="lower"></div>
						</TemplateStyles.TemplateCardLoading>
					</Card>
				);
			})}
		</>
	);
};

const Template = () => {
	const { status, filteredData, pagination } = useSelector((state: RootState) => state.contentReducer);

	return (
		<TemplateStyles.Container>
			<TemplateStyles.TemplateCategoryAndNumber>
				<Text color="neutral2" size={18} lineHeight={23}>
					All Templates
				</Text>
				<Text color="gray200" size={14}>
					{pagination.total_entries || ''} templates
				</Text>
			</TemplateStyles.TemplateCategoryAndNumber>
			<TemplateStyles.TemplateCardCollections>
				{isReducerBusy(status) ? (
					<LoadingTemplate />
				) : (
					filteredData.map(({ name, description }, index) => {
						return (
							<Card key={`${index}-${name}-${description}`}>
								<TemplateStyles.TemplateCard>
									<div className="upper">
										<Text color="black300" size={24} lineHeight={30.36} weight={500}>
											{name}
										</Text>
										<Text className="description" color="neutral2" lineHeight={16.94}>
											{extractDescription(description)}
										</Text>
									</div>
									<div className="lower">
										<Text color="shade6"> Use Template </Text>
									</div>
								</TemplateStyles.TemplateCard>
							</Card>
						);
					})
				)}
			</TemplateStyles.TemplateCardCollections>
		</TemplateStyles.Container>
	);
};

export default Template;

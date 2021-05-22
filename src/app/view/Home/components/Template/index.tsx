import TemplateStyles from './styles';
import Text from 'app/components/Text';
import Card from 'app/components/Card';

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

const Template = () => {
	return (
		<TemplateStyles.Container>
			<TemplateStyles.TemplateCategoryAndNumber>
				<Text color="neutral2" size={18} lineHeight={23}>
					All Templates
				</Text>
				<Text color="gray200" size={14}>
					2000 templates
				</Text>
			</TemplateStyles.TemplateCategoryAndNumber>
			<TemplateStyles.TemplateCardCollections>
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

				{/* {
					card.map(({ title, description }, index) => {
						return (
							<Card key={`${index}-${title}-${description}`}>
								<TemplateStyles.TemplateCard>
									<div className="upper">
										<Text color="black300" size={24} lineHeight={30.36} weight={500}>
											{title}
										</Text>
										<Text color="neutral2" lineHeight={16.94}>
											{description}
										</Text>
									</div>
									<div className="lower">
										<Text color="shade6"> Use Template </Text>
									</div>
								</TemplateStyles.TemplateCard>
							</Card>
						);
					})
				} */}
			</TemplateStyles.TemplateCardCollections>
		</TemplateStyles.Container>
	);
};

export default Template;

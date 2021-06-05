import { AxiosResponse } from 'axios';

export interface GenericResponse<Data = any> extends AxiosResponse {
	message: string;
	data: Data;
}

export type TemplateCategory = 'all' | 'health' | 'e-commerce' | 'education';
export type TemplateOrder = 'default' | 'ascending' | 'descending';
export type TemplateDate = TemplateOrder;

export interface Template {
	category: Array<TemplateCategory>;
	created: string;
	description: string;
	link: string;
	name: string;
}

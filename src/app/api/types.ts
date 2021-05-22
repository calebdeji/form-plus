export interface GenericResponse<Data = any> {
	status: string;
	data?: Data;
}

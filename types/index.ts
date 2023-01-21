export interface IServices {
	id: number
}
type IServicesType = {
	id: string
	title: string
	services: any[]
}
export interface IServices {
	id: number
	title: string
	contents: IServicesType[]
	category: string[]
}

export type IWeeklyServicesType = {
	id: number
	title: string
	includes: boolean
}
export interface IWeeklyProgramData {
	id: number
	tariff: string
	services: IWeeklyServicesType[]
}

export interface ITarif {
	id: number
	tarif: string
	title: string
	subtitle: string
	lists: any[]
}

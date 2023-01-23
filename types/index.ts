type IServicesType = {
	id: string
	title: string
	services: any[]
}
export interface IServices {
	id: number | string
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

export interface ITariff {
	id: number
	tarif: string
	title: string
	subtitle: string
	lists: any[]
}

export interface IModalProps {
	open: boolean
	setModal: (param?: boolean) => void
	text: string
	title: string
}

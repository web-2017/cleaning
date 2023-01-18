import { NextRouter, Router } from 'next/router'

export const breadcrumbsHelper = (router: NextRouter) => {
	router ?? {}
	const linkPath = router.asPath.split('/')
	linkPath.shift()

	const pathArray = linkPath.map((path: string, i: number) => {
		return {
			breadcrumb: path,
			href: '/' + linkPath.slice(0, i + 1).join('/'),
		}
	})

	return pathArray[0]
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type UserProps = {
	name: string
	lastName: string
	location: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<UserProps>
) {
	res
		.status(200)
		.json({ name: 'John Doe', lastName: 'Marcus', location: 'Chicago' })
}

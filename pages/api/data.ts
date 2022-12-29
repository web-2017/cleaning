// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type DataProps = {
	id: string
	key: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<DataProps>
) {
	res.status(200).json({ id: '1', key: 'Hello' })
}

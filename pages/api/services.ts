import { IServices } from '@/types';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'





export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IServices>
) {
	res
		.status(200)
		.json({ id: 1, title: 'John Doe', content: 'asdfasdf', category: ['home'] })
}

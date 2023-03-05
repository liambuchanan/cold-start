// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { kysely } from '../../lib/db'
import { sql } from 'kysely'


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await sql`SELECT 1`.execute(kysely)
  res.status(200).json({ name: 'John Doe' })
}

import { NextApiRequest, NextApiResponse } from 'next'

import query from '../../lib/db'
import escape from 'sql-template-strings'

const hello = async (req:NextApiRequest, res:NextApiResponse) => {

  const profiles = await query(escape`
      SELECT *
      FROM link
      ORDER BY id
    `)
  res.status(200).json({ profiles })
}
import { NextApiResponse, NextApiRequest } from 'next'
import { IInimigo, inimigos } from '../../../utils/inimigos/inimigo'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IInimigo[]>
) {
  return res.status(200).json(inimigos)
}

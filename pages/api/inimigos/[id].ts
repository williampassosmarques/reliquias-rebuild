import { NextApiRequest, NextApiResponse } from 'next'
import { IInimigo, inimigos } from '../../../utils/inimigos/inimigo'

type ResponseError = {
  message: string
}

export default function inimigoHandler(
  req: NextApiRequest,
  res: NextApiResponse<IInimigo | ResponseError>
) {
  const { query } = req
  const { id } = query
  const filtered = inimigos.filter(inimigo => inimigo.id === id)

  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}

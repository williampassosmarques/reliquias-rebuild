import { NextApiRequest, NextApiResponse } from 'next'
import { IFichaGeneric } from '../../../interfaces/IFichaGeneric'
import { vigias } from '../../../utils/vigias/vigias'

type ResponseError = {
  message: string
}

export default function vigiaHandler(
  req: NextApiRequest,
  res: NextApiResponse<IFichaGeneric | ResponseError>
) {
  const { query } = req
  const { id } = query
  const filtered = vigias.filter(vigia => vigia.id === id)

  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}

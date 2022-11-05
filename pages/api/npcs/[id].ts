import { NextApiRequest, NextApiResponse } from 'next'
import { IFichaGeneric } from '../../../interfaces/IFichaGeneric'
import { NPCS } from '../../../utils/npcs/npcs'

type ResponseError = {
  message: string
}

export default function npcHandler(
  req: NextApiRequest,
  res: NextApiResponse<IFichaGeneric | ResponseError>
) {
  const { query } = req
  const { id } = query
  const filtered = NPCS.filter(npc => npc.id === id)

  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}

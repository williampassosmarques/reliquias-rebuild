import { NextApiResponse, NextApiRequest } from 'next'
import { IFichaGeneric } from '../../../interfaces/IFichaGeneric'
import { NPCS } from '../../../utils/npcs/npcs'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IFichaGeneric[]>
) {
  return res.status(200).json(NPCS)
}

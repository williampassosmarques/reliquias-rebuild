import { NextApiResponse, NextApiRequest } from 'next'
import { IFichaGeneric } from '../../../interfaces/IFichaGeneric'
import { exploradores } from '../../../utils/esploradores/exploradores'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IFichaGeneric[]>
) {
  return res.status(200).json(exploradores)
}

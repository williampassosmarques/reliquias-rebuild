import { NextApiResponse, NextApiRequest } from 'next'
import { IFichaGeneric } from '../../../interfaces/IFichaGeneric'
import { vigias } from '../../../utils/vigias/vigias'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IFichaGeneric[]>
) {
  return res.status(200).json(vigias)
}

import Link from 'next/link'
import { IFichaGeneric } from '../../../interfaces/IFichaGeneric'
import Ficha from '../../ficha/Ficha'

interface Props {
  personagem: IFichaGeneric
}

export default function NPC({ personagem }: Props) {
  return (
    <div>
      <div className=''>
        <div className="flex justify-between">
          <Link
            className="capitalize cursor-pointer font-bold text-xl hover:underline"
            href="/npcs/[id]"
            as={`/npcs/${personagem.id}`}
          >
            {personagem.info.personagem.nome}
          </Link>
          <span>nível - {personagem.info.personagem.nivel}</span>
        </div>

        <div>
          <p>{personagem.info.personagem.informacoes.profissao}</p>
        </div>
      </div>
      <Ficha personagem={personagem} />
    </div>
  )
}

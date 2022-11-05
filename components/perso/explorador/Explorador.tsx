import Link from 'next/link'
import { IFichaGeneric } from '../../../interfaces/IFichaGeneric'
import Ficha from '../../ficha/Ficha'

interface Props {
  personagem: IFichaGeneric
}

export default function Explorador({ personagem }: Props) {
  return (
    <div>
      <div className="flex justify-between pb-4">
        <Link
          className="capitalize cursor-pointer font-bold text-xl hover:underline"
          href="/exploradores/[id]"
          as={`/exploradores/${personagem.id}`}
        >
          {personagem.info.personagem.nome}
        </Link>
        <span>nível - {personagem.info.personagem.nivel}</span>
      </div>
      <Ficha personagem={personagem} />
    </div>
  )
}

import Link from 'next/link'
import { IFicha } from '../../interfaces/IFicha'
import Ficha from '../ficha/Ficha'

interface Props {
  player: IFicha
}

export default function Player({ player }: Props) {
  return (
    <>
      <div>
        <div>
          <div>
            <Link
              href={`./players/${player.info.player}`}
              className="capitalize cursor-pointer font-bold text-xl hover:underline"
            >
              {`${player.info.personagem.nome} (${player.info.player})`}
            </Link>
          </div>

          <div className="flex justify-between pb-2">
            <p>nível - {player.info.personagem.nivel}</p>
            <p>xp - {player.info.personagem.xp}</p>
          </div>
        </div>

        <div>
          <Ficha personagem={player} />
        </div>
      </div>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import Ficha from '../../components/ficha/Ficha'
import Habilidades from '../../components/habilidades/Habilidades'
import Inventario from '../../components/inventario/Inventario'
import BotaoVoltar from '../../components/parts/BotaoVoltar'
import CombatePoldrin from '../../components/players/poldrin/CombatePoldrin'
import ReliquiaPoldrin from '../../components/players/poldrin/ReliquiaPoldrin'
import { Poldrin as playerPoldrin } from '../../utils/players/poldrin'

export default function Poldrin() {
  return (
    <>
      <Head>
        <title>{playerPoldrin.info.personagem.nome}</title>
      </Head>
      <div className="relative">
        <div className="relative flex justify-center gap-10 py-10 max-w-7xl mx-auto">
          <div>
            <h1 className="capitalize font-bold text-2xl pb-2">
              {playerPoldrin.info.personagem.nome}
              <span className="pl-1">
                <BotaoVoltar url="/players" />
              </span>
            </h1>
            <Link href="./info/poldrin">história</Link>
            <div className="flex justify-between pb-2">
              <p>nível - {playerPoldrin.info.personagem.nivel}</p>
              <p>xp - {playerPoldrin.info.personagem.xp}</p>
            </div>
            <div>
              <Ficha personagem={playerPoldrin} />
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full">
            <ReliquiaPoldrin reliquia={playerPoldrin.reliquia} />
            <CombatePoldrin reliquia={playerPoldrin.reliquia} />
          </div>
        </div>
        <Habilidades habilidades={playerPoldrin.habilidades} />
        <Inventario itens={playerPoldrin.inventario} />
      </div>
    </>
  )
}

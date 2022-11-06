import Head from 'next/head'
import Link from 'next/link'
import Ficha from '../../components/ficha/Ficha'
import Habilidades from '../../components/habilidades/Habilidades'
import Informacoes from '../../components/Informacoes'
import Inventario from '../../components/inventario/Inventario'
import BotaoVoltar from '../../components/parts/BotaoVoltar'
import CombatePoldrin from '../../components/players/poldrin/CombatePoldrin'
import ReliquiaPoldrin from '../../components/players/poldrin/ReliquiaPoldrin'
import Stage from '../../components/reliquia/Stage'
import { Poldrin as playerPoldrin } from '../../utils/players/poldrin'

export default function Poldrin() {
  return (
    <>
      <Head>
        <title>{playerPoldrin.info.personagem.nome}</title>
      </Head>
      <div className="relative py-10">
        <div className="relative flex justify-center gap-10 max-w-7xl mx-auto">
          <div>
            <h1 className="capitalize font-bold text-2xl pb-2">
              {playerPoldrin.info.personagem.nome}
              <span className="pl-1">
                <BotaoVoltar url="/players" />
              </span>
            </h1>
            <div className="flex justify-between pb-2">
              <p>nível - {playerPoldrin.info.personagem.nivel}</p>
              <p>xp - {playerPoldrin.info.personagem.xp}</p>
            </div>
            <div>
              <Ficha personagem={playerPoldrin} />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <Informacoes personagem={playerPoldrin} />
            <ReliquiaPoldrin reliquia={playerPoldrin.reliquia} />
            <CombatePoldrin reliquia={playerPoldrin.reliquia} />
            {playerPoldrin.stage ? <Stage stage={playerPoldrin.stage} /> : null}
          </div>
        </div>
        <Habilidades habilidades={playerPoldrin.habilidades} />
        <Inventario itens={playerPoldrin.inventario} />
      </div>
    </>
  )
}

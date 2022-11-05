import Head from 'next/head'
import Link from 'next/link'
import Ficha from '../../components/ficha/Ficha'
import Habilidades from '../../components/habilidades/Habilidades'
import Inventario from '../../components/inventario/Inventario'
import BotaoVoltar from '../../components/parts/BotaoVoltar'
import CombateOreaninho from '../../components/players/oreaninho/CombateOreaninho'
import ReliquiaOreaniho from '../../components/players/oreaninho/ReliquiaOreaninho'
import { Oreaninho as playerOreaninho } from '../../utils/players/oreaninho'

export default function Oreaninho() {
  return (
    <>
      <Head>
        <title>{playerOreaninho.info.personagem.nome}</title>
      </Head>
      <div className="relative">
        <div className="relative flex justify-center gap-10 py-10 max-w-7xl mx-auto">
          <div>
            <h1 className="capitalize font-bold text-2xl pb-2">
              {playerOreaninho.info.personagem.nome}
              <span className="pl-1">
                <BotaoVoltar url="/players" />
              </span>
            </h1>
            <Link href="./info/oreaninho">história</Link>
            <div className="flex justify-between pb-2">
              <p>nível - {playerOreaninho.info.personagem.nivel}</p>
              <p>xp - {playerOreaninho.info.personagem.xp}</p>
            </div>
            <div>
              <Ficha personagem={playerOreaninho} />
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full">
            <ReliquiaOreaniho reliquia={playerOreaninho.reliquia} />
            <CombateOreaninho reliquia={playerOreaninho.reliquia} />
          </div>
        </div>
        <Habilidades habilidades={playerOreaninho.habilidades} />
        <Inventario itens={playerOreaninho.inventario} />
      </div>
    </>
  )
}

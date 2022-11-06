import Head from 'next/head'
import Link from 'next/link'
import Ficha from '../../components/ficha/Ficha'
import Habilidades from '../../components/habilidades/Habilidades'
import Informacoes from '../../components/Informacoes'
import Inventario from '../../components/inventario/Inventario'
import BotaoVoltar from '../../components/parts/BotaoVoltar'
import CombateShiro from '../../components/players/shiro/CombateShiro'
import ReliquiaShiro from '../../components/players/shiro/ReliquiaShiro'
import Stage from '../../components/reliquia/Stage'
import { Shiro as playerShiro } from '../../utils/players/shiro'

export default function Shiro() {
  return (
    <>
      <Head>
        <title>{playerShiro.info.personagem.nome}</title>
      </Head>
      <div className="relative py-10">
        <div className="relative flex justify-center gap-10 max-w-7xl mx-auto">
          <div>
            <h1 className="capitalize font-bold text-2xl pb-2">
              {playerShiro.info.personagem.nome}
              <span className="pl-1">
                <BotaoVoltar url="/players" />
              </span>
            </h1>
            <div className="flex justify-between pb-2">
              <p>nível - {playerShiro.info.personagem.nivel}</p>
              <p>xp - {playerShiro.info.personagem.xp}</p>
            </div>
            <div>
              <Ficha personagem={playerShiro} />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <Informacoes personagem={playerShiro} />
            <ReliquiaShiro reliquia={playerShiro.reliquia} />
            <CombateShiro reliquia={playerShiro.reliquia} />
            {playerShiro.stage ? <Stage stage={playerShiro.stage} /> : null}
          </div>
        </div>

        <Habilidades habilidades={playerShiro.habilidades} />
        <Inventario itens={playerShiro.inventario} />
      </div>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import Ficha from '../../components/ficha/Ficha'
import Habilidades from '../../components/habilidades/Habilidades'
import Informacoes from '../../components/Informacoes'
import Inventario from '../../components/inventario/Inventario'
import BotaoVoltar from '../../components/parts/BotaoVoltar'
import CombateKuro from '../../components/players/kuro/CombateKuro'
import ReliquiaKuro from '../../components/players/kuro/ReliquiaKuro'
import Stage from '../../components/reliquia/Stage'
import { Kuro as playerKuro } from '../../utils/players/kuro'

export default function Kuro() {
  return (
    <>
      <Head>
        <title>{playerKuro.info.personagem.nome}</title>
      </Head>
      <div className="relative py-10">
        <div className="relative flex justify-center gap-10 max-w-7xl mx-auto">
          <div>
            <h1 className="capitalize font-bold text-2xl pb-2">
              {playerKuro.info.personagem.nome}
              <span className="pl-1">
                <BotaoVoltar url="/players" />
              </span>
            </h1>

            <div className="flex justify-between pb-2">
              <p>nível - {playerKuro.info.personagem.nivel}</p>
              <p>xp - {playerKuro.info.personagem.xp}</p>
            </div>
            <div>
              <Ficha personagem={playerKuro} />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <Informacoes personagem={playerKuro} />
            <ReliquiaKuro reliquia={playerKuro.reliquia} />
            <CombateKuro reliquia={playerKuro.reliquia} />
            {playerKuro.stage ? <Stage stage={playerKuro.stage} /> : null}
          </div>
        </div>
        <Habilidades habilidades={playerKuro.habilidades} />
        <Inventario itens={playerKuro.inventario} />
      </div>
    </>
  )
}

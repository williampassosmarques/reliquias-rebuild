import Head from 'next/head'
import Ficha from '../../components/ficha/Ficha'
import Habilidades from '../../components/habilidades/Habilidades'
import Informacoes from '../../components/Informacoes'
import Inventario from '../../components/inventario/Inventario'
import BotaoVoltar from '../../components/parts/BotaoVoltar'
import CombateBe from '../../components/players/be/CombateBe'
import ReliquiaBe from '../../components/players/be/ReliquiaBe'
import Stage from '../../components/reliquia/Stage'
import { Be as playerBe } from '../../utils/players/be'

export default function Kuro() {
  return (
    <>
      <Head>
        <title>{playerBe.info.personagem.nome}</title>
      </Head>
      <div className="relative py-10">
        <div className="relative flex justify-center gap-10 max-w-7xl mx-auto">
          <div>
            <h1 className="capitalize font-bold text-2xl pb-2">
              {playerBe.info.personagem.nome}
              <span className="pl-1">
                <BotaoVoltar url="/players" />
              </span>
            </h1>

            <div className="flex justify-between pb-2">
              <p>nível - {playerBe.info.personagem.nivel}</p>
              <p>xp - {playerBe.info.personagem.xp}</p>
            </div>
            <div>
              <Ficha personagem={playerBe} />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <Informacoes personagem={playerBe} />
            <ReliquiaBe reliquia={playerBe.reliquia} />
            <CombateBe reliquia={playerBe.reliquia} />
            {playerBe.stage ? <Stage stage={playerBe.stage} /> : null}
          </div>
        </div>
        <Habilidades habilidades={playerBe.habilidades} />
        <Inventario itens={playerBe.inventario} />
      </div>
    </>
  )
}

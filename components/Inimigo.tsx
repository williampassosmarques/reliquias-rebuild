import Head from 'next/head'
import { IInimigo } from '../utils/inimigos/inimigo'
import Ficha from './ficha/Ficha'
import Habilidades from './habilidades/Habilidades'
import Inventario from './inventario/Inventario'
import BotaoVoltar from './parts/BotaoVoltar'

interface Props {
  inimigo: IInimigo
}

export default function Inimigo({ inimigo }: Props) {
  return (
    <>
      <Head>
        <title>{inimigo.nome}</title>
      </Head>
      <div className="relative py-10">
        <div className="max-w-7xl mx-auto flex gap-5">
          <div>
            <h2 className="font-bold text-2xl">
              {inimigo.nome}
              <span>
                <BotaoVoltar url="/" />
              </span>
            </h2>
            <div className="flex justify-between pb-2">
              <p>nível - {inimigo.nivel}</p>
            </div>
            <Ficha personagem={inimigo} />
          </div>
        </div>
        <Inventario itens={inimigo.inventario} />
        <Habilidades habilidades={inimigo.habilidades} />
      </div>
    </>
  )
}

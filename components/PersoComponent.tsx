import Head from 'next/head'
import { IFichaGeneric } from '../interfaces/IFichaGeneric'
import Ficha from './ficha/Ficha'
import Habilidades from './habilidades/Habilidades'
import Informacoes from './Informacoes'
import Inventario from './inventario/Inventario'
import BotaoVoltar from './parts/BotaoVoltar'
import Reliquia from './reliquia/Reliquia'
import Stage from './reliquia/Stage'

interface Props {
  personagem: IFichaGeneric
}

export default function PersoComponent({ personagem }: Props) {
  return (
    <>
      <Head>
        <title>{personagem.info.personagem.nome}</title>
      </Head>
      <div className="relative py-10">
        <div className="max-w-7xl mx-auto flex gap-5">
          <div>
            <h2 className="font-bold text-2xl">
              {personagem.info.personagem.nome}
              <span>
                <BotaoVoltar url="/" />
              </span>
            </h2>
            <div className="flex justify-between pb-2">
              <p>nível - {personagem.info.personagem.nivel}</p>
            </div>
            <Ficha personagem={personagem} />
          </div>
          <div className="flex flex-col w-full">
            <Informacoes personagem={personagem} />
            {personagem.reliquia ? (
              <Reliquia reliquia={personagem.reliquia} />
            ) : null}
            {personagem.stage ? <Stage stage={personagem.stage} /> : null}
          </div>
        </div>
        <Inventario itens={personagem.inventario} />
        <Habilidades habilidades={personagem.habilidades} />
      </div>
    </>
  )
}

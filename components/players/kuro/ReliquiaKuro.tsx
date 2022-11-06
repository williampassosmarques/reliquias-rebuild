import { IKuro } from '../../../interfaces/players/IKuro'
import DespertarDominio from '../../parts/DespertarDominio'
import Durabilidade from '../../parts/Durabilidade'
import Stage from '../../reliquia/Stage'

interface Props {
  reliquia: IKuro
}

export default function ReliquiaKuro({ reliquia }: Props) {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold pb-4">Relíquia</h2>
        <DespertarDominio
          despertar={reliquia.despertar.ativado}
          dominio={reliquia.dominio.ativado}
        />
        <div>
          <p className="font-bold">{reliquia.nome}</p>
          <Durabilidade durabilidade={reliquia.durabilidade} />
          <p>{reliquia.descricao}</p>
          {reliquia.despertar.ativado ? (
            <p className="text-green-500 font-bold">
              {reliquia.despertar.descricao}
            </p>
          ) : null}
          {reliquia.dominio.ativado ? (
            <p className="text-blue-500 font-bold">
              {reliquia.dominio.descricao}
            </p>
          ) : null}
          <p>
            alcance -{' '}
            {reliquia.despertar.ativado
              ? reliquia.despertar.alcance
              : reliquia.alcance}
          </p>
          <p>
            dano -{' '}
            {reliquia.despertar.ativado
              ? reliquia.despertar.dados
              : reliquia.dados}
          </p>
        </div>
      </div>
    </>
  )
}

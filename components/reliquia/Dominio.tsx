import { IReliquiaGeneric } from '../../interfaces/IFichaGeneric'

interface Props {
  reliquia: IReliquiaGeneric
}

export default function Dominio({ reliquia }: Props) {
  return (
    <div>
      <p className="font-bold text-xl text-blue-500">Dominio</p>
      {reliquia.dominio ? (
        <div>
          <p>
            <span className="font-bold">nome - </span>
            {reliquia.dominio.nome}
          </p>
          {reliquia.dominio.visual ? (
            <p>
              <span className="font-bold">visual - </span>
              {reliquia.dominio.visual}
            </p>
          ) : null}
          <p>
            <span className="font-bold">descricao - </span>
            {reliquia.dominio.descricao}
          </p>
        </div>
      ) : null}
    </div>
  )
}

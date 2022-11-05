import { IReliquiaGeneric } from '../../interfaces/IFichaGeneric'

interface Props {
  reliquia: IReliquiaGeneric
}

export default function Despertar({ reliquia }: Props) {
  return (
    <div>
      <p className="font-bold text-xl text-green-500">Despertar</p>
      <div>
        <p>
          <span className="font-bold">nome - </span>
          {reliquia.despertar.nome}
        </p>
        {reliquia.despertar.visual ? (
          <p>
            <span className="font-bold">visual - </span>
            {reliquia.despertar.visual}
          </p>
        ) : null}
        <p>
          <span className="font-bold">descricao - </span>
          {reliquia.despertar.descricao}
        </p>
        {reliquia.despertar.dados ? (
          <p>
            <span className="font-bold">dados - </span>
            {reliquia.despertar.dados}
          </p>
        ) : null}
      </div>
    </div>
  )
}

import { IReliquiaGeneric } from '../../interfaces/IFichaGeneric'
import Despertar from './Despertar'
import Dominio from './Dominio'

interface Props {
  reliquia: IReliquiaGeneric
}

export default function Reliquia({ reliquia }: Props) {
  return (
    <div>
      <p className="font-bold text-xl">Reliquia</p>
      <div>
        <p>
          <span className="font-bold">nome - </span>
          {reliquia.nome}
        </p>
        <p>
          <span className="font-bold">descrição - </span>
          {reliquia.descricao}
        </p>
        {reliquia.historia ? (
          <p>
            <span className="font-bold">história - </span>
            {reliquia.historia}
          </p>
        ) : null}
        {reliquia.visual ? (
          <p>
            <span className="font-bold">visual - </span>
            {reliquia.visual}
          </p>
        ) : null}
        {reliquia.dados ? (
          <p>
            <span className="font-bold">dados - </span>
            {reliquia.dados}
          </p>
        ) : null}
      </div>

      {reliquia.despertar ? <Despertar reliquia={reliquia} /> : null}
      {reliquia.dominio ? <Dominio reliquia={reliquia} /> : null}
    </div>
  )
}

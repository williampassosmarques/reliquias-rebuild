import { IReliquiaGeneric } from '../../interfaces/IFichaGeneric'
import breakText from '../../utils/functions/break'
import Despertar from './Despertar'
import Dominio from './Dominio'

interface Props {
  reliquia: IReliquiaGeneric
}

export default function Reliquia({ reliquia }: Props) {
  const breakDescricao = breakText(reliquia.descricao)

  return (
    <div>
      <p className="font-bold text-xl text-yellow-500">Reliquia</p>
      <div>
        <p>
          <span className="font-bold">nome - </span>
          {reliquia.nome}
        </p>
        <div>
          <span className="font-bold">descrição: </span>
          {breakDescricao?.map(text => {
            return <p key={text}>{text}</p>
          })}
        </div>
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

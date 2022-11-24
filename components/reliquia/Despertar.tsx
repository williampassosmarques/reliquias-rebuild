import { IReliquiaGeneric } from '../../interfaces/IFichaGeneric'
import breakText from '../../utils/functions/break'

interface Props {
  reliquia: IReliquiaGeneric
}

export default function Despertar({ reliquia }: Props) {
  const breakDescricao = breakText(reliquia.despertar.descricao)
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
        <div>
          <span className="font-bold">descricao: </span>
          {breakDescricao?.map(text => {
            return <p key={text}>{text}</p>
          })}
        </div>
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

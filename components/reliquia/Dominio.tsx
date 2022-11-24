import { IReliquiaGeneric } from '../../interfaces/IFichaGeneric'
import breakText from '../../utils/functions/break'

interface Props {
  reliquia: IReliquiaGeneric
}

export default function Dominio({ reliquia }: Props) {
  const breakDescricao = breakText(reliquia.dominio?.descricao)

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
          <div>
            <span className="font-bold">descricao: </span>
            {breakDescricao?.map(text => {
              return <p key={text}>{text}</p>
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

import { IHabilidade } from '../../interfaces/IFicha'
import { useState } from 'react'
import classNames from 'classnames'
import ButtonCD from './ButtonCD'
import breakText from '../../utils/functions/break'

interface Props {
  habilidade: IHabilidade
}

export default function CardHabilidade({ habilidade }: Props) {
  const breakDescricao = breakText(habilidade.descricao)
  const [cd, setCd] = useState(false)

  return (
    <div>
      <div
        className={classNames({
          'relative p-2 flex flex-col before:bg-black before:absolute before:top-3 before:-bottom-1 before:-left-1 before:right-3 before:z-0':
            true,
          'before:bg-red-500': cd
        })}
      >
        <div
          className={classNames({
            'relative bg-white border border-black z-10 p-2 min-w-60': true,
            'text-red-500 border-red-500': cd
          })}
        >
          <p className="font-bold">{`[${habilidade.id}]  ${habilidade.nome}`}</p>
          <p>tipo - {habilidade.tipo}</p>
          <p>requisito - {habilidade.requisitos}</p>
          {habilidade.dificuldade ? (
            <p>dificuldade - {habilidade.dificuldade}</p>
          ) : null}
          {habilidade.efeitos ? <p>efeitos - {habilidade.efeitos}</p> : null}
          {habilidade.dados ? <p>dados - {habilidade.dados}</p> : null}
          <br />
          <div>
            {breakDescricao?.map(text => {
              return <p key={text}>{text}</p>
            })}
          </div>
          <br />
          <br />

          {habilidade.cd ? (
            <div className="absolute right-2 bottom-2">
              <ButtonCD cd={cd} setCd={setCd} timeCD={habilidade.cd} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

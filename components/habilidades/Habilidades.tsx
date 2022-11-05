import { useState } from 'react'
import { IHabilidade } from '../../interfaces/IFicha'
import CardHabilidade from './CardHabilidade'
import classNames from 'classnames'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface Props {
  habilidades: IHabilidade[]
}

export default function Habilidades({ habilidades }: Props) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="max-w-7xl mx-auto pt-5">
      <div
        className="font-bold flex items-center text-xl pb-4 cursor-pointer"
        onClick={() => {
          setVisible(!visible)
        }}
      >
        <span>Habilidades</span>
        {visible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </div>

      <div
        className={classNames({
          'flex gap-4 flex-wrap': true,
          hidden: !visible
        })}
      >
        {habilidades.map((habilidade: IHabilidade) => {
          return <CardHabilidade key={habilidade.id} habilidade={habilidade} />
        })}
      </div>
    </div>
  )
}

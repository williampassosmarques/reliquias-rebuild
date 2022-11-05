import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import classNames from 'classnames'
import { IEquipe, IInventario, IMochila } from '../../interfaces/IFicha'
import CardItem from './CardItem'

interface Props {
  itens: IInventario
}

export default function Inventario({ itens }: Props) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="absolute right-5 my-10 top-0">
      <div className="pb-4">
        <p className="font-bold pb-2">Equipado</p>
        {itens.equipamento.map((equip: IEquipe) => {
          return (
            <div
              key={equip.nome}
              className="max-w-[200px] border-b border-black pb-2"
            >
              <p>{`${equip.nome} [${equip.status}]`}</p>
            </div>
          )
        })}
      </div>

      <div
        className="font-bold flex items-center text-xl pb-4 cursor-pointer"
        onClick={() => {
          setVisible(!visible)
        }}
      >
        <span>Inventário</span>
        {visible ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </div>

      <div
        className={classNames({
          'flex flex-col gap-2 flex-wrap': true,
          hidden: !visible
        })}
      >
        <span className="font-bold">Mochila</span>
        {itens.mochila.map((item: IMochila) => {
          return <CardItem key={item.nome} item={item} />
        })}
      </div>
    </div>
  )
}

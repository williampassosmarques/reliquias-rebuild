import { IPoldrin } from '../../../interfaces/players/IPoldrin'
import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { GiStoneSphere } from 'react-icons/gi'

interface Props {
  reliquia: IPoldrin
}

export default function CombatePoldrin({ reliquia }: Props) {
  const [esferas, setEsferas] = useState(reliquia.esferas)

  let rows = []

  for (let i = 0; i < esferas; i++) {
    rows.push(<GiStoneSphere key={i} size={40} />)
  }

  for (let i = 0; i < 10 - esferas; i++) {
    rows.push(<GiStoneSphere key={10 - i} size={40} color="red" />)
  }

  return (
    <>
      <div>
        <h2 className="pb-4 font-bold text-xl">COMBATE </h2>
        <div className="flex flex-col justify-center pb-4 gap-2">
          <p className="text-lg">Esferas: {esferas}</p>
          <div className="flex items-center w-min">
            <button
              className="p-2 border border-black mr-1"
              onClick={() => {
                if (esferas > 0) setEsferas(esferas - 1)
              }}
            >
              <AiOutlineMinus />
            </button>
            <button
              className="p-2 border border-black mr-1"
              onClick={() => {
                if (esferas < 10) setEsferas(esferas + 1)
              }}
            >
              <AiOutlinePlus />
            </button>
            <div className="flex text-center">{rows}</div>
          </div>

          <div>
            <p>Esferas em cd: {10 - esferas}</p>
          </div>
        </div>
      </div>
    </>
  )
}

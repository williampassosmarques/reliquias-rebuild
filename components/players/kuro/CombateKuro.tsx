import { useState } from 'react'
import { IKuro } from '../../../interfaces/players/IKuro'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { GiSilverBullet } from 'react-icons/gi'
import Loading from '../../parts/Loading'

interface Props {
  reliquia: IKuro
}

export default function CombateKuro({ reliquia }: Props) {
  const [balas, setBalas] = useState(reliquia.balas)
  const [carregando, setCarregando] = useState(false)

  let rows = []

  for (let i = 0; i < balas; i++) {
    rows.push(<GiSilverBullet size={40} />)
  }

  return (
    <>
      <div>
        <h2 className="pb-4 font-bold text-xl">COMBATE </h2>
        <div className="flex flex-col justify-center pb-4 gap-2">
          <p className="text-lg">Balas: {balas}</p>
          <div className="flex items-center w-min">
            <button
              className="p-2 border border-black mr-1"
              onClick={() => {
                if (balas > 0) setBalas(balas - 1)
              }}
            >
              <AiOutlineMinus />
            </button>
            <button
              className="p-1 border border-black mr-1"
              onClick={() => {
                setCarregando(!carregando)
              }}
            >
              carregar
            </button>
            <button
              className="p-2 border border-black mr-2"
              onClick={() => {
                if (balas < 6) {
                  setBalas(balas + 1)
                  setCarregando(false)
                }
              }}
            >
              <AiOutlinePlus />
            </button>
            {carregando ? (
              <Loading />
            ) : (
              <div className="flex text-center">{rows}</div>
            )}
          </div>
        </div>

        <span className="text-lg">Munição - {reliquia.municao}</span>
      </div>
    </>
  )
}

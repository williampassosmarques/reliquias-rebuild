import { GiChainedHeart, GiChestArmor } from 'react-icons/gi'
import classNames from 'classnames'

interface Props {
  vida: number
  dano: number
  armadura: number
  bonusArm: number
}

export default function Vida({
  vida,
  dano,
  armadura,
  bonusArm
}: Props) {
  return (
    <tbody>
      <tr>
        <td className="p-4 border font-bold text-center">Vida</td>
        <td className="p-4 border" colSpan={2}>
          <div className="flex items-center justify-center pb-1 text-lg">
            {`${vida - dano} / ${vida}`}
            <GiChainedHeart size="1.5rem" className="ml-2" />
          </div>
          <div
            className={classNames({
              'flex items-center justify-center border-t-2 pt-1': true,
              'text-red-500 font-bold': bonusArm < 0,
              'text-green-500 font-bold': bonusArm > 0
            })}
          >
            {armadura + bonusArm}
            <GiChestArmor size="1rem" className="ml-2" />
          </div>
        </td>
      </tr>
    </tbody>
  )
}

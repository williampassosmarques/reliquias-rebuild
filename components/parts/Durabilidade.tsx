import { IDurabilidade } from '../../interfaces/IFicha'
import classNames from 'classnames'

interface Props {
  durabilidade: IDurabilidade
}

export default function Durabilidade({ durabilidade }: Props) {
  return (
    <div>
      <p>
        durabilidade:{' '}
        <span
          className={classNames({
            'font-bold': true,
            'text-red-500': durabilidade.atual < 50,
            'text-green-500': durabilidade.atual > 50,
            'text-yellow-500': durabilidade.atual > 90
          })}
        >
          {durabilidade.atual}
        </span>
        /<span className="font-bold">{durabilidade.total}</span>
      </p>
    </div>
  )
}

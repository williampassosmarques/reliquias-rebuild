import classNames from 'classnames'

interface Props {
  atributo: string
  valor: number
  bonus: number
}

export default function Atributo({ atributo, valor, bonus }: Props) {
  const valorAtt = valor + bonus
  const bonusAtt =
    (valorAtt - 10) / 2 < 0 && !Number.isInteger((valorAtt - 10) / 2)
      ? (valorAtt - 10) / 2 - 0.5
      : Math.trunc((valorAtt - 10) / 2)

  return (
    <tbody>
      <tr>
        <td className="p-4 border text-center font-bold">{atributo}</td>
        <td
          className={classNames({
            'p-4 border text-center': true,
            'text-red-500 font-bold': bonus < 0,
            'text-green-500 font-bold': bonus > 0
          })}
        >
          {valorAtt}
        </td>
        <td className="p-4 border text-center">{bonusAtt}</td>
      </tr>
    </tbody>
  )
}

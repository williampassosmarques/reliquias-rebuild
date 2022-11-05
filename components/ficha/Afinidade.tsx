interface Props {
  afinidade: number
}

export default function Afinidade({ afinidade }: Props) {
  const bonus = !Number.isInteger(afinidade / 2)
    ? afinidade / 2 - 0.5
    : afinidade / 2

  return (
    <>
      <tbody className="bg-black">
        <tr>
          <td className="p-4 border font-bold text-center text-white	">
            Afinidade
          </td>
          <td className="p-4 border text-center text-white	">{afinidade}</td>
          <td className="p-4 border text-center text-white	">{bonus}</td>
        </tr>
      </tbody>
    </>
  )
}

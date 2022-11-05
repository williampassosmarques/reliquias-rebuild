import { IMochila } from '../../interfaces/IFicha'

interface Props {
  item: IMochila
}

export default function CardItem({ item }: Props) {
  return (
    <div className="border-black border p-2 max-w-[200px]">
      <p>{`${item.quantidade} ${item.nome}`}</p>
      <p></p>
      <p>{item.descricao}</p>
    </div>
  )
}

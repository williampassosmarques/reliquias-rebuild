import { IOreaninho } from '../../../interfaces/players/IOreaninho'

interface Props {
  reliquia: IOreaninho
}

export default function CombateOreaninho({ reliquia }: Props) {
  return (
    <>
      <div>
        <h2 className="pb-4 font-bold text-xl">COMBATE </h2>
      </div>
    </>
  )
}

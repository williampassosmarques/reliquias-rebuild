import { IBe } from '../../../interfaces/players/IBe'

interface Props {
  reliquia: IBe
}

export default function CombateBe({ reliquia }: Props) {
  return (
    <>
      <div>
        <h2 className="pb-4 font-bold text-xl">COMBATE </h2>
      </div>
    </>
  )
}

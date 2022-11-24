import { IFicha } from '../../interfaces/IFicha'
import { IFichaGeneric } from '../../interfaces/IFichaGeneric'
import { IInimigo } from '../../utils/inimigos/inimigo'
import Afinidade from './Afinidade'
import Atributo from './Atributo'
import Vida from './Vida'

interface Props {
  personagem: IFicha | IFichaGeneric | IInimigo
}

export default function Ficha({ personagem }: Props) {
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="p-4 border">Atributos</th>
            <th className="p-4 border">Valor</th>
            <th className="p-4 border">Bônus</th>
          </tr>
        </thead>

        <Atributo
          atributo="Força"
          valor={personagem.atributos.FORCA}
          bonus={personagem.atributos.bonusFOR}
        />
        <Atributo
          atributo="Destreza"
          valor={personagem.atributos.DESTREZA}
          bonus={personagem.atributos.bonusDES}
        />
        <Atributo
          atributo="Saúde"
          valor={personagem.atributos.SAUDE}
          bonus={personagem.atributos.bonusSAU}
        />
        <Atributo
          atributo="Mente"
          valor={personagem.atributos.MENTE}
          bonus={personagem.atributos.bonusMEN}
        />
        <Atributo
          atributo="Carisma"
          valor={personagem.atributos.CARISMA}
          bonus={personagem.atributos.bonusCAR}
        />
        {personagem.atributos.afinidade ? (
          <Afinidade afinidade={personagem.atributos.afinidade} />
        ) : null}

        <Vida
          vida={personagem.vida.vida}
          dano={personagem.vida.dano}
          armadura={personagem.vida.armadura}
          bonusArm={personagem.vida.bonusArm}
        />
      </table>
    </>
  )
}

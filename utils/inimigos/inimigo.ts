import {
  IAtributos,
  IHabilidade,
  IInventario,
  IVida
} from '../../interfaces/IFicha'

export interface IInimigo {
  id: string
  nome: string
  nivel: number
  atributos: IAtributos
  vida: IVida
  inventario: IInventario
  habilidades: IHabilidade[]
}

export const inimigos: IInimigo[] = [
  {
    id: '1',
    nome: 'inimigo base',
    nivel: 2,
    atributos: {
      FORCA: 12,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 12,
      bonusSAU: 0,
      MENTE: 12,
      bonusMEN: 0,
      CARISMA: 10,
      bonusCAR: 0
    },
    vida: {
      vida: 19,
      dano: 0,
      armadura: 1,
      bonusArm: 0
    },
    inventario: {
      equipamento: [],
      mochila: [
        {
          nome: 'pistola',
          quantidade: 1,
          descricao: '1d6'
        },
        {
          nome: 'espada',
          quantidade: 1,
          descricao: '1d8'
        }
      ]
    },
    habilidades: []
  },
  {
    id: '2',
    nome: 'inimigo Forte',
    nivel: 4,
    atributos: {
      FORCA: 14,
      bonusFOR: 0,
      DESTREZA: 10,
      bonusDES: 0,
      SAUDE: 16,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 10,
      bonusCAR: 0
    },
    vida: {
      vida: 32,
      dano: 0,
      armadura: 3,
      bonusArm: 0
    },
    inventario: {
      equipamento: [],
      mochila: [
        {
          nome: 'martelo',
          quantidade: 1,
          descricao: '1d8+FOR'
        }
      ]
    },
    habilidades: []
  }
]

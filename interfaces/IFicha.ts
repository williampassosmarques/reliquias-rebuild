export interface IAtributos {
  FORCA: number
  bonusFOR: number
  DESTREZA: number
  bonusDES: number
  SAUDE: number
  bonusSAU: number
  MENTE: number
  bonusMEN: number
  CARISMA: number
  bonusCAR: number
  afinidade?: number
}

export interface IVida {
  vida: number
  dano: number
  armadura: number
  bonusArm: number
}

export interface IInfo {
  player?: string
  personagem: {
    nome: string
    nivel: number
    xp?: number
    informacoes: {
      idade: number | undefined
      aparencia: string
      personalidade: string
      profissao?: string
      historia: string
      objetivo?: string
      fraqueza?: string
    }
    cidadeNatal?: string
    defeat?: boolean
  }
}

export interface IHabilidade {
  id: number
  nome: string
  tipo: string
  requisitos: string
  dificuldade?: string
  cd?: number
  dados?: string
  efeitos?: string
  descricao: string
}

export interface IMochila {
  nome: string
  quantidade: number | string
  descricao: string
}

export interface IEquipe {
  nome: string
  status: string
}

export interface IInventario {
  equipamento: IEquipe[]
  mochila: IMochila[]
}

export interface IStage {
  repel: boolean
  track: boolean
  reverse: boolean
  consume?: {
    vanish: boolean
    heal: boolean
    gain: boolean
  }
}

export interface IDurabilidade {
  total: number
  atual: number
}

export interface IFicha {
  info: IInfo
  atributos: IAtributos
  vida: IVida
  reliquia: any
  stage?: IStage
  inventario: IInventario
  habilidades: IHabilidade[]
}

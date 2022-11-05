import {
  IAtributos,
  IHabilidade,
  IInfo,
  IInventario,
  IStage,
  IVida
} from './IFicha'

export interface IReliquiaGeneric {
  nome: string
  historia?: string
  descricao: string
  visual?: string
  dados?: string
  despertar: {
    ativado: boolean
    nome: string
    visual?: string
    descricao: string
    dados?: string
  }
  dominio?: {
    ativado: boolean
    nome: string
    area: string
    visual?: string
    descricao: string
  }
}

export interface IVigia {
  posicao: string
}

export interface IExplorador {
  posicao: string
}

export interface IFichaGeneric {
  id: string
  info: IInfo
  atributos: IAtributos
  vida: IVida
  reliquia?: IReliquiaGeneric
  stage?: IStage
  inventario: IInventario
  habilidades: IHabilidade[]
  vigia?: IVigia
  explorador?: IExplorador
}

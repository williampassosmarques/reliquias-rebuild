import { IDurabilidade } from "../IFicha"

export interface IPoldrin {
  nome: string
  tipo: string[]
  durabilidade: IDurabilidade
  descricao: string
  visual: string
  alcance: string
  esferas: number
  despertar: {
    ativado: boolean
    nome: string
    visual: string
    descricao: string
    dados: string
    laminas: number
    alcance: string
  }
  dominio: {
    ativado: boolean
    nome: string
    area: string
    visual: string
    descricao: string
  }
}

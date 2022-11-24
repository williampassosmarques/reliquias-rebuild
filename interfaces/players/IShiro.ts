import { IDurabilidade } from "../IFicha"

export interface IShiro {
  nome: string
  durabilidade: IDurabilidade
  descricao: string
  visual: string
  despertar: {
    ativado: boolean
    nome: string
    visual: string
    descricao: string
  }
  dominio: {
    ativado: boolean
    nome: string
    area: string
    visual: string
    descricao: string
  }
}
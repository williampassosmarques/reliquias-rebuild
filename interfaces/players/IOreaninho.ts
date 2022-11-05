import { IDurabilidade } from "../IFicha"

export interface IOreaninho {
  nome: string
  tipo: string[]
  durabilidade: IDurabilidade
  descricao: string
  visual: string
  dados:string
  despertar: {
    ativado: boolean
    nome: string
    visual: string
    descricao: string
    dados: string
  }
  dominio: {
    ativado: boolean
    nome: string
    area: string
    visual: string
    descricao: string
  }
}

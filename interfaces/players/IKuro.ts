import { IDurabilidade } from '../IFicha'

export interface IKuro {
  nome: string
  tipo: string[]
  durabilidade: IDurabilidade
  dados: string
  descricao: string
  visual?: string
  balas: number
  alcance: string
  municao: number
  carregando: boolean
  despertar: {
    ativado: boolean
    nome: string
    visual?: string
    descricao: string
    alcance: string
    dados: string
  }
  dominio: {
    ativado: boolean
    nome: string
    area: string
    visual?: string
    descricao: string
  }
}

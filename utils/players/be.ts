import { IFicha } from '../../interfaces/IFicha'

export const Be: IFicha = {
  info: {
    player: 'be',
    personagem: {
      nome: 'Julian Devorak',
      nivel: 1,
      xp: 10,
      informacoes: {
        aparencia: '',
        idade: 38,
        personalidade: '',
        historia: '',
        profissao: '',
        objetivo: '',
        fraqueza: ''
      }
    }
  },
  atributos: {
    FORCA: 10,
    bonusFOR: 0,
    DESTREZA: 13,
    bonusDES: 0,
    SAUDE: 10,
    bonusSAU: 0,
    MENTE: 12,
    bonusMEN: 0,
    CARISMA: 13,
    bonusCAR: 0,
    afinidade: 1
  },
  vida: {
    vida: 18,
    dano: 0,
    armadura: 0,
    bonusArm: 0
  },
  reliquia: {
    nome: 'Lira',
    durabilidade: {
      total: 100,
      atual: 100
    },
    descricao: 'Música possui efeitos.',
    visual: '',
    despertar: {
      ativado: false,
      nome: '',
      visual: 'Arco',
      descricao: 'Aumenta o efeito das músicas e precisão'
    },
    dominio: {
      ativado: false,
      nome: 'Ainda não Definido',
      area: 'Ainda não Definido',
      visual: 'Ainda não Definido',
      descricao: 'Ainda não Definido'
    }
  },
  inventario: {
    equipamento: [],
    mochila: [
      {
        nome: 'cartão de indenização dos vigias',
        quantidade: 1,
        descricao:
          'entregando ao prefeito você tem os danos causados por vigias mitigados.'
      }
    ]
  },
  habilidades: [
    {
      id: 1,
      nome: 'Atordoar',
      tipo: '',
      descricao: 'atordoa por 2 turnos',
      requisitos: '',
      dados: '',
      cd: 2
    },
    {
      id: 2,
      nome: 'Buff',
      tipo: '',
      descricao: 'acrescenta 2 de dano a todos os aliados.',
      requisitos: '',
      dados: '',
      cd: 2
    },
    {
      id: 3,
      nome: 'Ataque',
      tipo: '',
      descricao: '',
      requisitos: '',
      dados: '1d6+CAR'
    }
  ]
}

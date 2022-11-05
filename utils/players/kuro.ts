import { IFicha } from '../../interfaces/IFicha'

export const Kuro: IFicha = {
  info: {
    player: 'kuro',
    personagem: {
      nome: 'arthur jhonson',
      nivel: 2,
      xp: 80,
      informacoes: {
        aparencia: '',
        idade: 38,
        personalidade: 'Protagonista de Anime.',
        historia:
          'Familia de fazendeiros, fazendas eram muito perigosas e por causa disso decidiu se tornar um militar.',
        profissao: 'militar',
        objetivo: 'Se Tornar o melhor Vigia.',
        fraqueza: 'Toda vez que ve uma tesoura fica puto.'
      }
    }
  },
  atributos: {
    FORCA: 12,
    bonusFOR: 0,
    DESTREZA: 14,
    bonusDES: 0,
    SAUDE: 12,
    bonusSAU: 0,
    MENTE: 10,
    bonusMEN: 0,
    CARISMA: 10,
    bonusCAR: 0,
    afinidade: 2
  },
  vida: {
    vida: 19,
    dano: 0,
    armadura: 1 + 1,
    bonusArm: 0
  },
  reliquia: {
    nome: 'Pistola',
    tipo: ['dano', 'distância'],
    durabilidade: {
      total: 100,
      atual: 100
    },
    descricao:
      'Possui tiros especiais com multiplos efeitos. Inicialmente perfura armadura de inimigos e cura aliados.',
    visual: '',
    dados: '1d6',
    alcance: '10m',
    balas: 6,
    municao: 12,
    carregando: false,
    despertar: {
      ativado: false,
      nome: 'Carabine',
      visual: '',
      descricao: 'Alcance e dano maiores.',
      dados: '1d12',
      alcance: '20m'
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
    equipamento: [
      {
        nome: 'roupa vigia base',
        status: '+1 arm'
      }
    ],
    mochila: [
      {
        nome: 'ouro',
        quantidade: 20,
        descricao: 'dinheiro'
      }
    ]
  },
  habilidades: [
    {
      id: 1,
      nome: 'Bala Perfurante',
      tipo: 'perfurante',
      descricao: 'atravessa armadura',
      requisitos: 'nenhum',
      dados: '1d6'
    },
    {
      id: 2,
      nome: 'Bala Curativa',
      tipo: 'cura',
      descricao: 'cura aliados',
      requisitos: 'nenhum',
      dados: '1d6'
    }
  ]
}

import { IFicha } from '../../interfaces/IFicha'

export const Poldrin: IFicha = {
  info: {
    player: 'poldrin',
    personagem: {
      nome: 'hideiki',
      nivel: 2,
      xp: 10,
      informacoes: {
        aparencia: '',
        idade: 17,
        personalidade: '',
        historia: '',
        profissao: '',
        objetivo:
          'O meu personagem ele quer de alguma maneira conseguir fazer a família dele voltar aonde deveria está.',
        fraqueza: 'Perder alguém que importante.'
      }
    }
  },
  atributos: {
    FORCA: 14,
    bonusFOR: 0,
    DESTREZA: 16,
    bonusDES: 0,
    SAUDE: 10,
    bonusSAU: 0,
    MENTE: 14,
    bonusMEN: 0,
    CARISMA: 4,
    bonusCAR: 0,
    afinidade: 2
  },
  vida: {
    vida: 18,
    dano: 0,
    armadura: 1,
    bonusArm: 0
  },
  reliquia: {
    nome: 'Pulseira de Esferas',
    durabilidade: {
      total: 100,
      atual: 100
    },
    descricao:
      'Possui 10 esferas. Pode controlar elas independentemente. Sempre que usar as esferas, aquela quantidade fica 1 turno em cd.',
    visual: '',
    alcance: '10m',
    esferas: 10 + 10,
    despertar: {
      ativado: true,
      nome: 'Dança das Lâminas',
      visual: 'tipo as da irélia',
      descricao:
        'esferas podem virar lâminas. cada 2 esferas se toram 1 lamina.',
      dados: '1d6',
      laminas: 5,
      alcance: '10m'
    },
    dominio: {
      ativado: false,
      nome: 'Senbonzakura Kageyoshi',
      area: 'Ainda não Definido',
      visual: 'Ainda não Definido',
      descricao: 'BANKAI DO BYAKUYA'
    }
  },
  inventario: {
    equipamento: [
      {
        nome: 'roupa vigia oriental',
        status: '+1 arm'
      }
    ],
    mochila: [
      {
        nome: 'ouro',
        quantidade: 10,
        descricao: 'dinheiro'
      },
      {
        nome: 'Relógio',
        quantidade: 0,
        descricao: 'relógio'
      }
    ]
  },
  habilidades: [
    {
      id: 0,
      nome: 'Nirvana',
      tipo: 'passsivo',
      descricao:
        'Mente inabalável. Maior dificuldade de perder concentração e vantagem em testes de concentração.',
      requisitos: 'nenhum'
    },
    {
      id: 1,
      nome: 'Mestre das Esferas',
      tipo: 'passsivo',
      descricao:
        '1 ação bonus por turno que não seja um ataque e use as esferas.',
      requisitos: 'nenhum'
    },
    {
      id: 2,
      nome: 'Ataque com Esferas',
      tipo: 'concussão',
      descricao: 'utiliza 3 esferas em um ataque.',
      requisitos: 'nenhum',
      dados: '1d6'
    }
  ]
}

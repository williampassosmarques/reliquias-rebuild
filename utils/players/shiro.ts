import { IFicha } from '../../interfaces/IFicha'

export const Shiro: IFicha = {
  info: {
    player: 'shiro',
    personagem: {
      nome: 'Heloisa',
      nivel: 2,
      xp: 10 +10,
      informacoes: {
        aparencia: '',
        idade: 30,
        personalidade: 'maternal, amiga dos animais',
        historia: 'marido morreu caçando',
        profissao: '',
        objetivo: 'ajudar animais.',
        fraqueza: 'medo da morte.'
      }
    }
  },
  atributos: {
    FORCA: 11,
    bonusFOR: 0,
    DESTREZA: 13,
    bonusDES: 0,
    SAUDE: 12,
    bonusSAU: 0,
    MENTE: 12,
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
    nome: 'Pé de Coelho',
    durabilidade: {
      total: 100,
      atual: 100
    },
    descricao: 'Falar com os animais.',
    visual: '',
    despertar: {
      ativado: false,
      nome: '',
      visual: '',
      descricao: 'Vira animais'
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
        nome: 'ouro',
        quantidade: 10,
        descricao: 'dinheiro'
      }
    ]
  },
  habilidades: []
}

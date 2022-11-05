import { IFichaGeneric } from '../interfaces/IFichaGeneric'

const Base: IFichaGeneric[] = [
  {
    id: '0',
    info: {
      personagem: {
        nome: '',
        nivel: 1,
        informacoes: {
          idade: 18,
          aparencia: '',
          personalidade: '',
          historia: '',
          profissao: ''
        },
        cidadeNatal: ''
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 10,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 10,
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
      nome: '',
      tipo: [''],
      dados: '',
      historia: '',
      descricao: '',
      despertar: {
        ativado: false,
        nome: '',
        descricao: ''
      },
      dominio: {
        ativado: false,
        nome: '',
        area: '',
        descricao: ''
      }
    },
    stage: {
      repel: false,
      track: false,
      reverse: false
    },
    inventario: {
      equipamento: [],
      mochila: []
    },
    habilidades: []
  }
]

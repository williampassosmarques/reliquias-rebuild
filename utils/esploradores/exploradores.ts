import { IFichaGeneric } from '../../interfaces/IFichaGeneric'

export const exploradores: IFichaGeneric[] = [
  {
    id: '1',
    info: {
      personagem: {
        nome: 'Damon',
        nivel: 20,
        informacoes: {
          idade: 18,
          aparencia: '',
          personalidade: '',
          historia: ''
        },
        defeat: false
      }
    },
    explorador: {
      posicao: 'colecionador'
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
      afinidade: 20
    },
    vida: {
      vida: 9999,
      dano: 0,
      armadura: 20,
      bonusArm: 0
    },
    reliquia: {
      nome: 'colar de 3 pinos',
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
      repel: true,
      track: true,
      reverse: true
    },
    inventario: {
      equipamento: [],
      mochila: []
    },
    habilidades: []
  },
  {
    id: '2',
    info: {
      personagem: {
        nome: 'Reinard',
        nivel: 1,
        informacoes: {
          idade: 18,
          aparencia: '',
          personalidade: 'arrogante',
          historia: ''
        }
      }
    },
    explorador: {
      posicao: 'lacaio'
    },
    atributos: {
      FORCA: 12,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 12,
      bonusSAU: 0,
      MENTE: 12,
      bonusMEN: 0,
      CARISMA: 10,
      bonusCAR: 0,
      afinidade: 1
    },
    vida: {
      vida: 19,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Adaga Pequena Vermelha',
      dados: '1d6',
      historia: '',
      descricao: 'Tudo o que é cortado fica dormente por um tempo.',
      despertar: {
        ativado: false,
        nome: '',
        descricao: ''
      }
    },
    inventario: {
      equipamento: [],
      mochila: []
    },
    habilidades: []
  },
  {
    id: '3',
    info: {
      personagem: {
        nome: 'Olivia',
        nivel: 18,
        informacoes: {
          idade: 18,
          aparencia: '',
          personalidade: '',
          historia: ''
        }
      }
    },
    explorador: {
      posicao: 'sub-chefe'
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
      afinidade: 20
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Sketchbook',
      historia: '',
      descricao:
        'Sketchbook possui folhas infinitas.\n Origamis criados com eles possuem a habilidades atribuidas pela criadora.',
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
      repel: true,
      track: true,
      reverse: true
    },
    inventario: {
      equipamento: [],
      mochila: []
    },
    habilidades: [
      {
        id: 1,
        nome: 'Cubo (Dominio Artifial)',
        tipo: 'armadilha',
        requisitos: 'nenhum',
        dados: '',
        efeitos: '',
        descricao:
          'prende todos em um raio de 50m dentro de um dominio artificial, dura 10min.',
        cd: 0
      }
    ]
  },
  {
    id: '4',
    info: {
      personagem: {
        nome: 'Kristen',
        nivel: 4,
        informacoes: {
          idade: 18,
          aparencia: 'Cabelo longo preto bagunçado.',
          personalidade: '',
          historia: 'Ele tem uma irmã gêmea chamada Kristina.'
        },
        defeat: false
      }
    },
    explorador: {
      posicao: 'lacaio'
    },
    atributos: {
      FORCA: 14,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 14,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 10,
      bonusCAR: 0,
      afinidade: 4
    },
    vida: {
      vida: 30,
      dano: 0,
      armadura: 2,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Máscara de Lobo',
      historia: '',
      descricao: 'Habilidades de Lobo. Garras e Presas, Olfato, Audição.',
      despertar: {
        ativado: false,
        nome: 'Anthropomorphism',
        descricao: 'Vira um lobisomem. +2 FOR +2 DES e +10 VIDA.'
      },
      dominio: {
        ativado: false,
        nome: '',
        area: '',
        descricao: ''
      }
    },
    inventario: {
      equipamento: [],
      mochila: []
    },
    habilidades: []
  },
  {
    id: '5',
    info: {
      personagem: {
        nome: 'Diana',
        nivel: 6,
        informacoes: {
          idade: 25,
          aparencia:
            'Cabelos ruivos ondulados, corpo voluptuoso, olhos verdes.\n Veste uma lingerie preta com espartilho e salto alto. tem uma mascara q só cobre os olhos e batom vermelho.',
          personalidade: 'sádica',
          historia: 'ex-assistente de palco de Harry'
        },
        defeat: false
      }
    },
    explorador: {
      posicao: 'lacaio'
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 18,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 10,
      bonusCAR: 0,
      afinidade: 6
    },
    vida: {
      vida: 34,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Chicote',
      dados: '1d8',
      historia: '',
      descricao:
        'O chicote se estica infinitamente e se regenera quando cortado além de ser muito forte.',
      despertar: {
        ativado: false,
        nome: 'Dominatrix',
        descricao:
          'quando ela acerta um ataque com o chicote o inimigo é marcado com um coração.\n caso acertado uma segunda vez o inimigo se "apaixona" por ela.'
      },
      dominio: {
        ativado: false,
        nome: 'BDSM',
        area: '',
        descricao: 'Da mais dano com base no dano que recebe.'
      }
    },
    stage: {
      repel: true,
      track: false,
      reverse: false
    },
    inventario: {
      equipamento: [],
      mochila: []
    },
    habilidades: []
  },
  {
    id: '6',
    info: {
      personagem: {
        nome: 'Heracles',
        nivel: 18,
        informacoes: {
          idade: 18,
          aparencia: '',
          personalidade: '',
          historia: ''
        }
      }
    },
    explorador: {
      posicao: 'sub-chefe'
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
      afinidade: 16
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0,
      bonusArm: 6
    },
    reliquia: {
      nome: 'manto de leão',
      dados: '',
      historia: '',
      descricao: 'o manto funciona como um ecudo impenetrável. +6 ARM',
      despertar: {
        ativado: false,
        nome: '',
        descricao: ''
      },
      dominio: {
        ativado: false,
        nome: 'Twelve Labours',
        area: '',
        descricao: ''
      }
    },
    stage: {
      repel: true,
      track: true,
      reverse: true
    },
    inventario: {
      equipamento: [],
      mochila: []
    },
    habilidades: []
  },
  {
    id: '7',
    info: {
      personagem: {
        nome: 'paul',
        nivel: 18,
        informacoes: {
          idade: 18,
          aparencia: '',
          personalidade: '',
          historia: ''
        }
      }
    },
    explorador: {
      posicao: 'sub-chefe'
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
      afinidade: 16
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Monóculo',
      historia: '',
      descricao: 'consegue ver alguns segundos no futuro.',
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
  },
  {
    id: '8',
    info: {
      personagem: {
        nome: 'Marilia',
        nivel: 8,
        informacoes: {
          idade: 18,
          aparencia: '',
          personalidade: '',
          historia: ''
        }
      }
    },
    explorador: {
      posicao: 'lacaio'
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
      afinidade: 8
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Mochila',
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
  },
  {
    id: '9',
    info: {
      personagem: {
        nome: 'Beth',
        nivel: 8,
        informacoes: {
          idade: 12,
          aparencia: '',
          personalidade: '',
          historia: ''
        }
      }
    },
    explorador: {
      posicao: 'lacaio'
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
      afinidade: 8
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Urso de Pelucia',
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

import { IFichaGeneric } from '../../interfaces/IFichaGeneric'

export const NPCS: IFichaGeneric[] = [
  {
    id: '1',
    info: {
      personagem: {
        nome: 'miguel',
        nivel: 2,
        informacoes: {
          idade: 18,
          aparencia: '',
          personalidade: '',
          historia: '',
          profissao: 'guia/trombadinha'
        },
        cidadeNatal: 'cidade da meia noite'
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 8,
      bonusSAU: 0,
      MENTE: 14,
      bonusMEN: 0,
      CARISMA: 14,
      bonusCAR: 0,
      afinidade: 2
    },
    vida: {
      vida: 17,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'moeda',
      historia: '',
      descricao: '',
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
    id: '2',
    info: {
      personagem: {
        nome: 'Nicholas',
        nivel: 20,
        informacoes: {
          idade: 18,
          aparencia:
            'parece uma criança, cabelo loiro claro, 1,50m de altura, usa um macacão pijama e um gorro.',
          personalidade: 'preguiçoso, sonolento, lerdo, ambicioso, arrogante',
          historia: 'ex vigia',
          profissao: ''
        },
        cidadeNatal: 'reino apagado'
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 18,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 18,
      bonusMEN: 0,
      CARISMA: 14,
      bonusCAR: 0,
      afinidade: 20
    },
    vida: {
      vida: 90,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Travesseiro',
      dados: '',
      historia: '',
      descricao:
        'deixa as pessoas com preguiça e até pode faze-las cair em sono profundo.',
      despertar: {
        ativado: false,
        nome: '',
        descricao: ''
      },
      dominio: {
        ativado: false,
        nome: 'Dream / Nightmare',
        area: '',
        descricao: 'Despertas os sonhos e pesadelos das pessoas.'
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
    id: '3',
    info: {
      personagem: {
        nome: 'Sakura',
        nivel: 14,
        informacoes: {
          idade: 18,
          aparencia: '',
          personalidade: '',
          historia: '',
          profissao: ''
        },
        cidadeNatal: 'cidade do sol nascente'
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
      nome: 'Prendedor de Cabelo(palitos)',
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
    id: '4',
    info: {
      personagem: {
        nome: 'Haroldo',
        nivel: 1,
        informacoes: {
          idade: 41,
          aparencia: '',
          personalidade: '',
          historia: `Dono do Bar "Diabo Endiabrado". Ele atendeu Arthur durante o Prólogo.`,
          profissao: 'Dono de Bar'
        },
        cidadeNatal: 'reino das mentiras'
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 12,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 14,
      bonusCAR: 0
    },
    vida: {
      vida: 19,
      dano: 0,
      armadura: 0,
      bonusArm: 0
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
        nome: 'Cristina BotaFogo',
        nivel: 4,
        informacoes: {
          idade: 42,
          aparencia: 'MILF',
          personalidade: `odeia ser chamada de senhora ou ser lembrada de sua idade. "Eterna Jovem".`,
          historia: `"Chefe" das meretizes, no cabaré "Fada Sensata"`,
          profissao: 'Meretriz'
        },
        cidadeNatal: 'cidade da meia noite'
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 18,
      bonusCAR: 0
    },
    vida: {
      vida: 26,
      dano: 0,
      armadura: 0,
      bonusArm: 0
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
        nome: 'Lexie',
        nivel: 1,
        informacoes: {
          idade: 18,
          aparencia: 'ruiva',
          personalidade: '',
          historia: '',
          profissao: 'Meretriz'
        },
        cidadeNatal: 'cidade da meia noite'
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 16,
      bonusCAR: 0
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0,
      bonusArm: 0
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
        nome: 'Mind',
        nivel: 1,
        informacoes: {
          idade: 18,
          aparencia: 'loira',
          personalidade: '',
          historia: '',
          profissao: 'Meretriz'
        },
        cidadeNatal: 'cidade da meia noite'
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 16,
      bonusCAR: 0
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0,
      bonusArm: 0
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
        nome: 'Ricardo',
        nivel: 20,
        informacoes: {
          idade: 53,
          aparencia: '',
          personalidade: '',
          historia: '',
          profissao: 'prefeito'
        },
        cidadeNatal: 'cidade da meia noite'
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 16,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 16,
      bonusMEN: 0,
      CARISMA: 18,
      bonusCAR: 0,
      afinidade: 20
    },
    vida: {
      vida: 90,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Cidade da Meia Noite',
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
    id: '9',
    info: {
      personagem: {
        nome: 'Mariano',
        nivel: 1,
        informacoes: {
          idade: 49,
          aparencia: '',
          personalidade: '',
          historia: `Dono do Bar "Fundo do Poço".`,
          profissao: 'Dono de Bar'
        },
        cidadeNatal: 'cidade da meia noite'
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 12,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 14,
      bonusCAR: 0
    },
    vida: {
      vida: 19,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    inventario: {
      equipamento: [],
      mochila: []
    },
    habilidades: []
  },
  {
    id: '10',
    info: {
      personagem: {
        nome: 'Álvaro',
        nivel: 8,
        informacoes: {
          idade: 42,
          aparencia: '',
          personalidade: '',
          historia: '',
          profissao: 'General'
        },
        cidadeNatal: 'fortaleza azul'
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
      afinidade: 6
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: '',
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
    id: '11',
    info: {
      personagem: {
        nome: 'Dédalo',
        nivel: 10,
        informacoes: {
          idade: 67,
          aparencia: '',
          personalidade: '',
          historia: '',
          profissao: 'ferreiro'
        },
        cidadeNatal: 'cidadela do metal'
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
      afinidade: 20
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'martelo',
      dados: '2d8',
      historia: '',
      descricao: 'Pode consertar qualquer coisa, inclusive reliquias.',
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
    id: '12',
    info: {
      personagem: {
        nome: 'Kristina',
        nivel: 4,
        informacoes: {
          idade: 18,
          aparencia: 'Cabelo longo preto bagunçado.',
          personalidade: '',
          historia: 'Ela tem um irmão gêmeo chamado Kristen.',
          profissao: ''
        },
        cidadeNatal: 'cidade do sol nascente'
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
      afinidade: 4
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Máscara de Raposa',
      historia: '',
      descricao: 'Habilidades de Raposa.',
      despertar: {
        ativado: false,
        nome: 'Nove Caudas',
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
    id: '13',
    info: {
      personagem: {
        nome: 'Cibele',
        nivel: 6,
        informacoes: {
          idade: 16,
          aparencia: '',
          personalidade: '',
          historia: '',
          profissao: ''
        },
        cidadeNatal: 'cidade dos rabiscos'
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 16,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 16,
      bonusMEN: 0,
      CARISMA: 10,
      bonusCAR: 0,
      afinidade: 10
    },
    vida: {
      vida: 34,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Pincel',
      historia: '',
      descricao:
        'O pincel pode se tornar qualquer utensilio para arte.\n As artes feitas funcionam como um encantamento no local onde foram feitas. O encantamento depende do desejo que se tinha quando foi feito',
      despertar: {
        ativado: false,
        nome: 'Mestre da Arte',
        descricao:
          'Pode pintar no ar formando ataques. Ataques dessa forma tem dano baseado em MEN'
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
    id: '14',
    info: {
      personagem: {
        nome: 'Mario',
        nivel: 1,
        informacoes: {
          idade: 49,
          aparencia:
            'Bigodudu, olhar frio e cauculista. Usa Macacão e Boina. Calvo.',
          personalidade: 'Ranzinza',
          historia: 'serviu como maquinista para os players na primeira sessão',
          profissao: 'Maquinista de Trem'
        },
        cidadeNatal: 'reino das mentiras'
      }
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 12,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 14,
      bonusCAR: 0
    },
    vida: {
      vida: 19,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    inventario: {
      equipamento: [],
      mochila: []
    },
    habilidades: []
  },
  {
    id: '15',
    info: {
      personagem: {
        nome: 'Maia',
        nivel: 20,
        informacoes: {
          idade: 18,
          aparencia: '',
          personalidade: '',
          historia: '',
          profissao: 'historiadora'
        },
        cidadeNatal: 'alexandria'
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
      afinidade: 20
    },
    vida: {
      vida: 9999,
      dano: 0,
      armadura: 9999,
      bonusArm: 0
    },
    reliquia: {
      nome: '',
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

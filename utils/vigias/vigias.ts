import { IFichaGeneric } from '../../interfaces/IFichaGeneric'

export const vigias: IFichaGeneric[] = [
  {
    id: '1',
    info: {
      personagem: {
        nome: 'Musashi',
        nivel: 20,
        informacoes: {
          idade: 60,
          aparencia:
            'velhinho corcunda, calvo com o resto do cabelo e barba brancas.\n Usa um Kimono Tradicional. Esconde um corpo musculoso por baixo das roupas',
          personalidade: 'gentil, atencioso, lider,',
          historia:
            'Era o aluno preferido pelo seu mestre em um dojo que ensinava a arte da esgrima. Seu mestre foi morto por outro aluno que mais tarde ficaria conhecido como "Colecionador". Criou os Vigias como uma forma de lutar contra os Exploradores.'
        }
      }
    },
    vigia: {
      posicao: 'capitão'
    },
    atributos: {
      FORCA: 20,
      bonusFOR: 0,
      DESTREZA: 8,
      bonusDES: 0,
      SAUDE: 18,
      bonusSAU: 0,
      MENTE: 12,
      bonusMEN: 0,
      CARISMA: 12,
      bonusCAR: 0,
      afinidade: 20
    },
    vida: {
      vida: 130,
      dano: 0,
      armadura: 4,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Broken/Quebrado',
      historia:
        'Antigamente Musashi possuia uma bengala que era sua reliquia, mas ela quebrou, assim Musashi conseguiu se tornar um Broken (que é extremamente raro).',
      descricao:
        'Musashi usa as pontas de seus dedos para perfurar os inimigos, cada ataque adiciona uma marca no inimigo. Para cada marca ele pode realizar +1 ataque neste inimigo. Esses ataques contam como acões extras. Se houver mais de 10 marcas no alvo, Musashi pode retirar todas as marcas desse alvo, assim se tornando imune a qualquer efeito proveniente deste inimigo por 2 turnos. Pode usar FOR ao invés de DES.',
      despertar: {
        ativado: true,
        nome: 'Needle',
        descricao: 'As pontas dos dedos de Musashi projetam lâminas ficas parecendo agulhas. O alcance de seu ataque aumenta para 50m.'
      },
      dominio: {
        ativado: false,
        nome: 'King of the World',
        area: '500m',
        descricao:
          'Desfaz todos os dominios e nimguem pode utilzar o dominio na area alem de Musashi.Todos os inimigos recebem 5 marcas extras. Dobra FOR e DES.'
      }
    },
    stage: {
      repel: true,
      track: true,
      reverse: true,
      consume: {
        vanish: true,
        heal: true,
        gain: true
      }
    },
    inventario: {
      equipamento: [],
      mochila: []
    },
    habilidades: [
      {
        id: 1,
        nome: 'Agulha',
        requisitos: 'nenhum',
        tipo: 'ataque',
        dados: '1d6+FOR',
        efeitos: 'atordoar(1turno)',
        descricao: 'ataca o inimigo com a ponta dos dedos',
        cd: 0
      },]
  },
  {
    id: '2',
    info: {
      personagem: {
        nome: 'Harry',
        nivel: 18,
        informacoes: {
          idade: 31,
          aparencia:
            'cabelo preto encaracolado, olhos negros com olheiras, alto e magro.\n Usa cartola e fraque(smoking com cauda).',
          personalidade: 'descontraido, engraçado, sociavel, extrovertido',
          historia:
            'Sua familia foi massacrada pelos exploradores que procuravam o próximo usuário mágico. Ficou conhecido como o responsavel pelo "Massacre Invisivel" onde ele matou todos os exploradoes que estavam no local e desaparecido com todos os corpos. Se juntou aos Vigias por conta própria.'
        }
      }
    },
    vigia: {
      posicao: 'superior'
    },
    atributos: {
      FORCA: 6,
      bonusFOR: 0,
      DESTREZA: 14,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 18,
      bonusMEN: 0,
      CARISMA: 22,
      bonusCAR: 0,
      afinidade: 20
    },
    vida: {
      vida: 82,
      dano: 0,
      armadura: 0 + 3,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Cartola',
      historia:
        'A cartola é uma herança de familia passada por gerações para o proximo mágico da familia.',
      descricao:
        'Pode fazer magias. Seus ataques podem ser jogados com carisma. Tem imunidade a habilidades mentais.',
      despertar: {
        ativado: false,
        nome: 'Smoking Pinguim',
        descricao: ''
      },
      dominio: {
        ativado: false,
        nome: 'Dream World',
        area: 'indefinido',
        descricao: 'Parque de diversões onde ele controla todas as atrações.'
      }
    },
    stage: {
      repel: true,
      reverse: true,
      track: true
    },
    inventario: {
      equipamento: [
        {
          nome: 'Fraque',
          status: '+3ARM'
        }
      ],
      mochila: []
    },
    habilidades: [
      {
        id: 0,
        nome: 'Imunidade Mental',
        requisitos: 'nenhum',
        tipo: 'passivo',
        descricao: 'Não é afetado por habilidade mentais.'
      },
      {
        id: 1,
        nome: 'Coelho Explosivo',
        requisitos: 'nenhum',
        tipo: 'arremessavel',
        dados: '1d6+CAR',
        efeitos: 'atordoar(1turno)',
        descricao: 'lança um coelho em direção dos\n inimigos.',
        cd: 2
      },
      {
        id: 2,
        nome: 'Espada Balão',
        requisitos: 'nenhum',
        tipo: 'item',
        dados: '2d6+CAR',
        descricao:
          'cria uma arma de balões.\n pode esticar ela para fazer um ataque\n a distância mas ela ira estourar.'
      },
      {
        id: 3,
        nome: 'Sumiu!!!',
        requisitos: 'nenhum',
        tipo: 'locomoção',
        descricao:
          'pode se teletransportar em uma distância\n de 10m sem preparação.',
        cd: 1
      }
    ]
  },
  {
    id: '3',
    info: {
      personagem: {
        nome: 'Anna',
        nivel: 16,
        informacoes: {
          idade: 24,
          aparencia:
            '(Gyaru)\n cabelo loiro curto (pelo ombros), olhos castanhos, usa maquiagem chamativa além de ter unhas longas e coloridas. Tem o corpo magro e defino.\n Usar short curto, um uma jaqueta curta verde com uma camiseta acima do umbigo.(tem um piercing no umbigo)',
          personalidade: 'séria, gentil e objetiva',
          historia:
            'Começou a dançar ballet na escola de dança de sua tia. Lá conheceu sua melhor amiga e futuro amor Erika.\n Anna fugiu de sua cidade (reino das luzes) quando começou a ser caçada pelos Exploradores, por medo de colocar a vida das pessoas em sua volta em perigo. Se juntou aos Vigias após ser recrutada por Lissandra, uma falecida integrante.'
        }
      }
    },
    vigia: {
      posicao: 'superior'
    },
    atributos: {
      FORCA: 14,
      bonusFOR: 2 + 2 + 2,
      DESTREZA: 18,
      bonusDES: 2 + 2,
      SAUDE: 16,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 10,
      bonusCAR: 0,
      afinidade: 16
    },
    vida: {
      vida: 98,
      dano: 11,
      armadura: 3 + 6,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Sapatilhas de Ballet',
      visual: 'sapatilha rosa.',
      historia:
        'Foram um presente de sua tia(e tambem professora de Ballet) quando era mais nova.',
      descricao:
        'Pode saltar mais alto, chutes são mais fortes e faz menos barulho com os pés.',
      despertar: {
        ativado: false,
        nome: 'Symphonia',
        visual:
          'As sapatilhas ganham lâminas como as de patins de gelo, as fitas na sapatilhas se envoltam por toda sua perna até um pouco acima do joelho.',
        descricao:
          'Ela pode "patinar"no solo, não existe atrito.\n Ganha buffs com base nas 9 sinfonias de beethoven,\n os buffs se acumulam.\n Sinfonias:\n Sinfonia n.1 | +2 DES \n Sinfonia n.2 | +2 DES \n Sinfonia n.3 | +2 FOR \n Sinfonia n.4 | +2 FOR \n Sinfonia n.5 | +2 FOR \n Sinfonia n.6 | +6 ARM \n Sinfonia n.7 | life-steal 1d8+FOR \n Sinfonia n.8 | proteção contra efeitos negativos \n Sinfonia n.9 | vantagem em qualquer ataque'
      },
      dominio: {
        ativado: false,
        nome: 'Ride of the Valkyries',
        area: '100m',
        descricao:
          'Adversarios não podem desviar ou contra-atacar seus ataques. Anna ganha um ataque extra por adversário.'
      }
    },
    stage: {
      repel: true,
      track: true,
      reverse: true
    },
    inventario: {
      equipamento: [
        {
          nome: 'ballet armor',
          status: '+6ARM'
        }
      ],
      mochila: []
    },
    habilidades: [
      {
        id: 1,
        nome: 'Chute',
        tipo: 'Combate',
        requisitos: 'Nenhum',
        dados: '2d8+FOR',
        efeitos: '',
        descricao: 'CHUTÃO',
        cd: 0
      },
      {
        id: 2,
        nome: 'Chute Forte',
        tipo: 'Combate',
        requisitos: 'Nenhum',
        dados: '2d8+FOR',
        cd: 3,
        efeitos: 'atordoar(1 turno)',
        descricao: ''
      },
      {
        id: 3,
        nome: 'Chute com Lâmina',
        tipo: 'Combate',
        requisitos: 'Despertar',
        dados: '2d12+FOR',
        efeitos: 'sangramento(1d6)',
        descricao: '',
        cd: 0
      },
      {
        id: 4,
        nome: 'Lâmina Defensiva',
        tipo: 'Defesa',
        requisitos: 'Despertar',
        efeitos: 'reflete o ataque',
        descricao: 'Pode ser usado como resposta.',
        cd: 3
      }
    ]
  },
  {
    id: '4',
    info: {
      personagem: {
        nome: 'Jack',
        nivel: 16,
        informacoes: {
          idade: 38,
          aparencia:
            'Careca, super bombado. Veste um colete sem camiseta,\n calça jeans e botas militares',
          personalidade: 'gentil, extremamente feliz, pacifista',
          historia:
            'Após a morte de sua esposa descobriu ser um portador, logo foi encontrado por Musashi e viu nisso uma forma de recomeçar sua vida.'
        }
      }
    },
    vigia: {
      posicao: 'superior'
    },
    atributos: {
      FORCA: 20,
      bonusFOR: 0,
      DESTREZA: 10,
      bonusDES: 0,
      SAUDE: 22,
      bonusSAU: 0,
      MENTE: 6,
      bonusMEN: 0,
      CARISMA: 10,
      bonusCAR: 0,
      afinidade: 14
    },
    vida: {
      vida: 122,
      dano: 0,
      armadura: 6 + 9,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Luvas de Couro sem os Dedos',
      historia:
        'As luvas foram feitas por sua falecida esposa, quando ainda eram jovens.',
      descricao: 'Socos são mais poderosos e arremessam inimigos para trás.',
      despertar: {
        ativado: false,
        nome: 'One Punch',
        descricao:
          'Tem uma carga para utilizar com um soco poderoso que da o triplo do dano\n e não pode ser defendido. Ainda é possivel desviar, mas caso o inimigo desvie a carga não é gasta.'
      },
      dominio: {
        ativado: false,
        nome: 'One Hundred Rings',
        area: '1 pessoa',
        descricao:
          'Escolhe um adversario e ambos travarão 100 batalhas dentro de 1sec\n o vencedor tem sua vida regenerada, machucados regenerados e status negativos retirados,\n o perdedor recebe todas as penalidades retiradas dessa forma'
      }
    },
    stage: {
      repel: true,
      track: false,
      reverse: false
    },
    inventario: {
      equipamento: [
        {
          nome: 'MAROMBA ARMOR',
          status: '+9 ARM'
        }
      ],
      mochila: []
    },
    habilidades: [
      {
        id: 1,
        nome: 'Soco',
        tipo: 'fisico',
        requisitos: 'nenhum',
        dados: '1d12+FOR',
        efeitos: 'empurrão',
        descricao: '',
        cd: 0
      },
      {
        id: 2,
        nome: 'Saitama',
        tipo: 'fisico',
        requisitos: 'Despertar',
        dados: '3d12+FOR',
        efeitos: 'empurrão',
        descricao:
          'não pode ser defendido, alvo tem que tira no minimo 16 pra desviar.',
        cd: 5
      }
    ]
  },
  {
    id: '5',
    info: {
      personagem: {
        nome: 'Daniel',
        nivel: 14,
        informacoes: {
          idade: 18,
          aparencia: `cabelo castanho, rosto com sardas, baixinho.\n Usa uma camiseta escrita "fables are not real"`,
          personalidade: 'arrogante, frio, introvertido',
          historia:
            'Quando era mais novo seu avo morreu de uma doença terminal pois não tinha como pagar o tratamento. Ele era um escritor desconhecido infantil e não vendia muitos livros. Logo após sua morte, Daniel fugiu de casa e logo foi encontrado pelos exploradores e capturado pelo potencial que ele poderia ter. Foi socorrido por Harry que invadiu o esconderijo onde estava sendo mantido.'
        }
      }
    },
    vigia: {
      posicao: 'superior'
    },
    atributos: {
      FORCA: 6,
      bonusFOR: 0,
      DESTREZA: 16,
      bonusDES: 0,
      SAUDE: 8,
      bonusSAU: 0,
      MENTE: 24,
      bonusMEN: 0,
      CARISMA: 12,
      bonusCAR: 0,
      afinidade: 18
    },
    vida: {
      vida: 59,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Livro de Contos de Fada',
      historia: 'Recebeu o livro de seu falecido avo.',
      descricao: 'Pode mostrar ilusões baseadas nas páginas de seu livro.',
      despertar: {
        ativado: false,
        nome: 'Once Upon a Time',
        visual:
          'O livro se torna envolto por chamas azuis e flutua em torno de Daniel.',
        descricao: 'Torna contos de fadas realidade.'
      },
      dominio: {
        ativado: false,
        nome: 'All Fiction',
        area: 'indefinido',
        descricao:
          'A imaginação do usuario se torna realidade.\n Existe uma limitação que faz com que apenas aqueles\n que acreditam que o que esta acontecendo é real\n são afetados por esse dominio.'
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
        nome: 'Bela Adormecida',
        tipo: 'controle',
        requisitos: 'despertar',
        efeitos: 'sono',
        descricao:
          'O alvo entra em sono profundo e só\n pode ser acordado com um beijo.',
        cd: 10
      },
      {
        id: 2,
        nome: 'Lobo Mau',
        tipo: 'invocação',
        requisitos: 'despertar',
        descricao: 'invova o Lobo Mau',
        cd: 3
      },
      {
        id: 3,
        nome: 'Rapunzel',
        tipo: 'controle',
        requisitos: 'despertar',
        efeitos: 'enraizamento(3 turnos)',
        descricao: '',
        cd: 3
      },
      {
        id: 4,
        nome: 'Gigante do Pé de Feijão',
        tipo: 'ataque',
        requisitos: 'despertar',
        dados: '3d6+MEN',
        efeitos: 'enraizamento(3 turnos)',
        descricao: 'os alvos recebem um pisão de um gigante.',
        cd: 10
      },
      {
        id: 4,
        nome: 'Pé de Feijão',
        tipo: 'torre',
        requisitos: 'despertar',
        dados: '1d6+MEN',
        descricao:
          'invoca um pé de feijão que\n pode atacar usando suas raízes.',
        cd: 2
      },
      {
        id: 5,
        nome: 'Pinóquio',
        tipo: 'encantamento',
        requisitos: 'despertar',
        descricao: 'O nariz do alvo cresce se mentir'
      },
      {
        id: 6,
        nome: 'Botas do Gato',
        tipo: 'encantamento',
        requisitos: 'despertar',
        efeitos: 'dobra destreza(4turnos)',
        descricao: '',
        cd: 4
      }
    ]
  },
  {
    id: '6',
    info: {
      personagem: {
        nome: 'Emilia',
        nivel: 4,
        informacoes: {
          idade: 16,
          aparencia:
            'cabelo roxo com maria chiquinha, usa um vetido preto de mangas compridas cheio de babados, botas altas com meias brancas acima dos joelhos.',
          personalidade: 'obscura, alto-astral',
          historia: 'Harry salvou ela de ser capturada pelos Exploradores'
        }
      }
    },
    vigia: {
      posicao: 'novato'
    },
    atributos: {
      FORCA: 8,
      bonusFOR: 0,
      DESTREZA: 16,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 12,
      bonusMEN: 0,
      CARISMA: 14,
      bonusCAR: 0,
      afinidade: 4
    },
    vida: {
      vida: 26,
      dano: 0,
      armadura: 0 + 3,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Guarda Chuva',
      dados: '1d4',
      visual: 'preto cheio de babados',
      historia: '',
      descricao:
        'Permitia Emilia e qualquer pessoa que ela estiver tocando flutuar.',
      despertar: {
        ativado: false,
        nome: 'Mary Poppins',
        visual: 'Ganha o dobro do tamanho e recebe lâminas em suas hastes.',
        descricao:
          'É capaz de manipular o vento, até mesmo podendo gerar tufões.'
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
      equipamento: [
        {
          nome: 'Vestido Lolita',
          status: '+3 ARM'
        }
      ],
      mochila: [
        {
          nome: 'ouro',
          quantidade: 300,
          descricao: 'dinheiro'
        }
      ]
    },
    habilidades: [
      {
        id: 1,
        nome: 'repelir',
        requisitos: 'nenhum',
        dificuldade: 'depende do ataque recebido',
        cd: 2,
        tipo: 'defesa',
        descricao:
          'Emilia gira o guarda-chuva\n podendo ser usado como defesa contra\n ataques de longa distância.'
      }
    ]
  },
  {
    id: '7',
    info: {
      personagem: {
        nome: 'mel',
        nivel: 8,
        informacoes: {
          idade: undefined,
          aparencia:
            'Gata: Gato bracon com olhos azuis, orelhas, patas e ponta do rabo pretas.\n Humana: Cabelos Brancos com raiz preta, olhos azuis e rosto cheio de sardas, baixinha (1.45m). Ainda possui orelhas e rabo de gato.\n Se veste com uniforme sailor preto',
          personalidade:
            'Meiga, simapática, fofa, extrovertida, MUITO animada, mas não se da bem com estranhos.',
          historia:
            'Mel era uma gata de rua comum, um dia ela foi atacada por crianças e foi salva por Ariane, uma criança de 10 anos que acabou se tornando sua dona. O vinculo entre elas era muito poderoso e iam para todo lugar juntas, Ariane tinha uma paixão por uniformes sailor (os quais Mel se inpira para suas vestimentas atualmente).\n Os exploradores indentificaram que Ariane era uma possivel "portadora" e a capturaram, Mel acabou indo atrás de sua dona mas era tarde de mais quando a encontrou, como não tinham conseguido resultados, os exploradores a mataram. Mel possuida por uma grande raiva, despertou pela primeira vez descobrindo assim que ela era a portadora. Ela se culpa pela morte de sua dona até hoje.\n Depois do incidente Anna chegou ao local e a encontrou, assim a recrutando para os vigias.'
        }
      }
    },
    vigia: {
      posicao: 'intermediário'
    },
    atributos: {
      FORCA: 16,
      bonusFOR: 0,
      DESTREZA: 18,
      bonusDES: 0,
      SAUDE: 6,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 12,
      bonusCAR: 0,
      afinidade: 18
    },
    vida: {
      vida: 34,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Coleira',
      historia: 'Coleira recebida de sua antiga dona.',
      descricao:
        'Da caracteristicas humanas para Mel, como fala, tempo de vida estendido e sentimentos humanos.\n Tem vantagem ao realizar acrobacias, melhores refelexos, não toma dano ao cair de lugares altos e tem boa audição.',
      despertar: {
        ativado: false,
        nome: 'Miau',
        descricao:
          'Mel ganha um corpo humano, apesar de ainda possuir arelhas e rabo de gato, além de garras e presas poderosas.\n Os atributos SAU e FOR, alem de sua VIDA na forma de gato são diminuidos pela metade, enquanto DES é dobrado.\n Mel pode permanecer despertada por quanto tempo quiser sem se cansar. '
      },
      dominio: {
        ativado: false,
        nome: 'Nya',
        area: 'indefinida',
        descricao:
          'recebe DES +10 e FOR +4\n ataques de suas garras ou presas absorvem a força vital do alvo (life-steal 50% do dano+ FOR), qualquer um que tenha toda sua força vital absorvida se tornara um gato.\n Apenas Mel pode desfazer a tranformação.'
      }
    },
    stage: {
      repel: true,
      track: true,
      reverse: true
    },
    inventario: {
      equipamento: [],
      mochila: [
        {
          nome: 'doces',
          quantidade: 'muitos',
          descricao: 'açucar'
        }
      ]
    },
    habilidades: [
      {
        id: 1,
        nome: 'Garras',
        tipo: 'ataque',
        requisitos: 'Despertar',
        dados: '1d10+FOR',
        efeitos: 'Sangramento(1d6)',
        descricao: ''
      },
      {
        id: 2,
        nome: 'Presas',
        tipo: 'ataque',
        requisitos: 'Despertar',
        dados: '1d8+FOR',
        efeitos: 'Sangramento(1d6)',
        descricao: ''
      },
      {
        id: 3,
        nome: 'Drenar',
        tipo: 'dreno',
        requisitos: 'Dominio',
        dados: '1d6+AFI',
        descricao: 'Drena todos dentro de seu dominio.'
      }
    ]
  },
  {
    id: '8',
    info: {
      personagem: {
        nome: 'Eleanor',
        nivel: 10,
        informacoes: {
          idade: 41,
          aparencia:
            'cabelo castaho claro pelos ombros, olhos verdes. corpo voluptuoso, 1.79m, usa um vestido longo verde.',
          personalidade: 'cuidadosa, mãe',
          historia: ''
        }
      }
    },
    vigia: {
      posicao: 'intermediário'
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 14,
      bonusDES: 0,
      SAUDE: 12,
      bonusSAU: 0,
      MENTE: 16,
      bonusMEN: 0,
      CARISMA: 12,
      bonusCAR: 0,
      afinidade: 14
    },
    vida: {
      vida: 55,
      dano: 0,
      armadura: 1,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Anel',
      historia: '',
      descricao:
        'Acelara a cura do próprio corpo ou de quem ela tocar.\n Só pode curar danos fisicos (internos ou externos).',
      despertar: {
        ativado: false,
        nome: 'Salvation',
        visual:
          'O anel cria `raizes` metalicas se estendo pelo dedo, passando pela mão e chagando até o braço, com varias folhas de metal por elas',
        descricao:
          'Eleanor se regenera instantaneamente de qualquer dano que não seja fatal.'
      },
      dominio: {
        ativado: false,
        nome: 'I Need Healing',
        area: '100m',
        descricao:
          'Todos dentro do dominio são separados em dois grupos, aliados e inimigos.\n Alidos recuperam 4 de vida por turno e não podem ter sua vida reduzida a zero (min 1).\n Inimigos sofrem o dobro do dano.'
      }
    },
    stage: {
      repel: false,
      track: false,
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
        nome: 'Joseph',
        nivel: 12,
        informacoes: {
          idade: 27,
          aparencia:
            'usa óculos, cabelo curto raspado dos lados, usa calça e blusa social com um colete por cima além de gravata. 1.81m.',
          personalidade: 'frio e calculista',
          historia: 'sua cidade foi salva por Musashi.'
        }
      }
    },
    vigia: {
      posicao: 'intermediário'
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 14,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 20,
      bonusMEN: 0,
      CARISMA: 12,
      bonusCAR: 0,
      afinidade: 14
    },
    vida: {
      vida: 58,
      dano: 0,
      armadura: 0,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Bússola',
      historia: '',
      descricao: 'A bússola aponta para qualquer coisa que Joseph desejar.',
      despertar: {
        ativado: false,
        nome: 'Locked on Target',
        descricao:
          'O alvo apontado pela bússola não pode utilizar as habilidades de portador.'
      },
      dominio: {
        ativado: false,
        nome: 'The Room',
        area: '100m',
        descricao: 'Pode reposicionar tudo dentro do dominio.'
      }
    },
    stage: {
      repel: false,
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
    id: '10',
    info: {
      personagem: {
        nome: 'Elise',
        nivel: 4,
        informacoes: {
          idade: 23,
          aparencia:
            'cabelo cacheado preto onix com uma fita vermelha amarrada com as pontas para frente, olhos castanhos, pele negra, alta e corpo definido.',
          personalidade: 'deprimida, sonolenta, gosta de coisas fofas.',
          historia: ''
        }
      }
    },
    vigia: {
      posicao: 'suporte'
    },
    atributos: {
      FORCA: 16,
      bonusFOR: 0,
      DESTREZA: 12,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 12,
      bonusMEN: 0,
      CARISMA: 10,
      bonusCAR: 0
    },
    vida: {
      vida: 26,
      dano: 0,
      armadura: 0 + 3,
      bonusArm: 0
    },
    inventario: {
      equipamento: [
        {
          nome: 'Support Uniform',
          status: '+3 ARM'
        }
      ],
      mochila: [
        {
          nome: 'Mystery Backpack',
          quantidade: 1,
          descricao: 'Mochila'
        },
        {
          nome: 'Transmitter',
          quantidade: 1,
          descricao: 'Transmissor'
        },
        {
          nome: 'Global Code',
          quantidade: 1,
          descricao: 'Dispositivo de mensagens em código'
        },
        {
          nome: 'Master Tool',
          quantidade: 1,
          descricao: 'Tipo um canivete suiço'
        },
        {
          nome: 'kit de primeiros socorros',
          quantidade: 3,
          descricao: 'permite 4 usos'
        }
      ]
    },
    habilidades: []
  },
  {
    id: '11',
    info: {
      personagem: {
        nome: 'Nina',
        nivel: 2,
        informacoes: {
          idade: 19,
          aparencia:
            'Cabelo curto escuro, olhos castanhos, pele morena e corpo bem definido. Usa um fone de ouvido velho e um macacão jardineiro preto e camiseta preta de manga comprida, na perna direita ela tem uma espece de caixinha presa com uma superficie transparente onde é possível ver cds. normamelmente está suja de graxa.',
          personalidade: 'Animada, excentrica, esforçada, criativa',
          historia:
            'O pai de Nina era um Portador, ele usava os fones que Nina carraga com ela. Ele foi morto pelos exploradores quando Nina ainda era uma criança. Quando cresceu, ela decidiu tentar se tornar parte dos vigias para poder se vingar dos exploradores que mataram seu pai, mas mesmo carregando os fones dele, Nina não se tornou uma portadora, assim ela acabou virando uma suporte.'
        }
      }
    },
    vigia: {
      posicao: 'suporte'
    },
    atributos: {
      FORCA: 12,
      bonusFOR: 0,
      DESTREZA: 14,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 12,
      bonusCAR: 0
    },
    vida: {
      vida: 18,
      dano: 0,
      armadura: 0 + 3,
      bonusArm: 0
    },
    inventario: {
      equipamento: [
        {
          nome: 'Support Uniform',
          status: '+3 ARM'
        }
      ],
      mochila: [
        {
          nome: 'ouro',
          quantidade: 100,
          descricao: 'dinheiro'
        },
        {
          nome: 'Mystery Backpack',
          quantidade: 1,
          descricao: 'Mochila'
        },
        {
          nome: 'Transmitter',
          quantidade: 1,
          descricao: 'Transmissor'
        },
        {
          nome: 'Global Code',
          quantidade: 1,
          descricao: 'Dispositivo de mensagens em código'
        },
        {
          nome: 'Master Tool',
          quantidade: 1,
          descricao: 'Tipo um canivete suiço'
        },
        {
          nome: `CD's músicais`,
          quantidade: 'vários',
          descricao: 'música'
        },
        {
          nome: 'kit de primeiros socorros',
          quantidade: 3,
          descricao: 'permite 4 usos'
        }
      ]
    },
    habilidades: [
      {
        id: 0,
        nome: 'olha o som',
        tipo: 'passivo',
        requisitos: 'fones',
        efeitos: 'aumenta chance de percepção',
        descricao: 'Nina coloca músicas para o grupo ouvir.'
      }
    ]
  },
  {
    id: '12',
    info: {
      personagem: {
        nome: 'Lilia',
        nivel: 14,
        informacoes: {
          idade: 28,
          aparencia:
            'Cabelo castanho trançado, peitos pequenos, 1.60 altura, olhos negros.',
          personalidade: 'calma, focacada',
          historia:
            'Sua cidade foi destruida por Exploradores assim decidiu se juntar aos Vigias. É uma boa costureira.'
        }
      }
    },
    vigia: {
      posicao: 'suporte'
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 18,
      bonusDES: 0,
      SAUDE: 10,
      bonusSAU: 0,
      MENTE: 16,
      bonusMEN: 0,
      CARISMA: 12,
      bonusCAR: 0
    },
    vida: {
      vida: 66,
      dano: 0,
      armadura: 0 + 8,
      bonusArm: 0
    },
    inventario: {
      equipamento: [
        {
          nome: 'Support Uniform ++',
          status: '+8 ARM'
        }
      ],
      mochila: [
        {
          nome: 'Mystery Backpack',
          quantidade: 1,
          descricao: 'Mochila'
        },
        {
          nome: 'Transmitter',
          quantidade: 1,
          descricao: 'Transmissor'
        },
        {
          nome: 'Global Code',
          quantidade: 1,
          descricao: 'Dispositivo de mensagens em código'
        },
        {
          nome: 'Master Tool',
          quantidade: 1,
          descricao: 'Tipo um canivete suiço'
        }
      ]
    },
    habilidades: []
  },
  {
    id: '13',
    info: {
      personagem: {
        nome: 'Pierre',
        nivel: 6,
        informacoes: {
          idade: 29,
          aparencia:
            'cabelo vermelho espetado, usa uma faixa na cabeça, fisico forte, barba por fazer. Usa dólmã.',
          personalidade:
            'brabo, não gosta que falem mal de sua comida, confiável, gosta de alcool',
          historia: ''
        }
      }
    },
    vigia: {
      posicao: 'suporte'
    },
    atributos: {
      FORCA: 10,
      bonusFOR: 0,
      DESTREZA: 14,
      bonusDES: 0,
      SAUDE: 14,
      bonusSAU: 0,
      MENTE: 10,
      bonusMEN: 0,
      CARISMA: 14,
      bonusCAR: 0,
      afinidade: 12
    },
    vida: {
      vida: 40,
      dano: 0,
      armadura: 2 + 3,
      bonusArm: 0
    },
    reliquia: {
      nome: 'Colher de Pau',
      historia: '',
      descricao: 'Comidas feitas por Pierre dão Buffs.',
      dados: '1d2',
      despertar: {
        ativado: false,
        nome: 'MasterChef',
        descricao:
          'Consegue produzir pratos instantaneamente se possuir os ingredientes. Gasta muita estâmina.'
      },
      dominio: {
        ativado: false,
        nome: 'Restaurant',
        area: 'sala',
        descricao:
          'Produz 3 clones de si mesmo.\n Cada clone recebe uma cópia de sua reliquia e podem despertar'
      }
    },
    inventario: {
      equipamento: [
        {
          nome: 'Dólmã',
          status: '+3 ARM'
        }
      ],
      mochila: [
        {
          nome: 'kit de tempeiros',
          quantidade: 'muitos',
          descricao: 'tempeiros variados'
        },
        {
          nome: 'panelas',
          quantidade: 1,
          descricao: 'panelas'
        },
        {
          nome: 'mini fogão',
          quantidade: 1,
          descricao: 'mini fogão'
        }
      ]
    },
    habilidades: [
      {
        id: 0,
        nome: 'marmita',
        requisitos: 'ingredientes',
        tipo: 'buff',
        efeitos: 'cura completamente e reduz a fadiga',
        descricao: 'Panela velha faz comida boa.'
      },
      {
        id: 1,
        nome: 'curry',
        requisitos: 'ingredientes',
        tipo: 'buff',
        efeitos: 'regeneração(1d4) 5 turnos',
        descricao: 'Panela velha faz comida boa.'
      },
      {
        id: 2,
        nome: 'feijoada',
        requisitos: 'ingredientes',
        tipo: 'buff',
        efeitos: 'dano(1d4) 3 turnos',
        descricao: 'Panela velha faz comida boa.'
      },
      {
        id: 3,
        nome: 'bomba de chocolate',
        requisitos: 'ingredientes',
        tipo: 'explosivo',
        efeitos: 'atordoamento 2 turnos',
        descricao: 'Tenho ataques tambem.'
      }
    ]
  }
]

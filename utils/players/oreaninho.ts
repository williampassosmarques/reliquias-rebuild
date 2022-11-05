import { IFicha } from '../../interfaces/IFicha'

export const Oreaninho: IFicha = {
  info: {
    player: 'oreaninho',
    personagem: {
      nome: 'Xavier Eisfesto',
      nivel: 1,
      xp: 80,
      informacoes: {
        aparencia: '',
        idade: 0,
        personalidade: '',
        historia:
          'Vindo de uma familia feita de varias gerações de cabelereiros/barbeiros Xavier, ao completar o curso de cabelereiro/barbeiro, ele ganha de sua mãe uma antiga tesoura desfiadeira, essa tessoura é passada por mais de dez gerações em sua familia, vendo aquela tesoura meio sem corte, pois ela só era repassada, mas nunca utilisada por eles, Xavier  começou a cuidar dessa tessoura, limpando ferrugem, afiando e cuidando dos dentes dela,mas tem algo que ele nunca parou de pensar, quem ja teve a posse dela, perguntando para seus parentes vivos, pesquisando no caderno geneológica, onde tinha escrito todos os donos da tesoura e numero de usuario e se utilizou a tesoura para trabalho, mas contendo o nome do primeiro usuario riscado,  sua familia se nega a reverlar quem ele foi,mas Xavier quer saber, quem é o primeiro usuario, quem teve a ideia de repassar essa tesoura, pra que ele utilizava, coforme o livro de sua familia a tesoura só foi utilizada por duas pessoas, o primeiro usuario e pelo segundo, porem todos da familia dele reconheciam o segundo usuario, o grande cabelereiro Marcos Eisfesto, sabiam até que Marcos reclamava bastante que a tesoura tinha uma mancha que não saia por nada, uma mancha vermelha em sua lamina, mesmo Xavier achando isso um charme da tesoura, essa mancha atiça mais e mais sua curiosidade.',
        profissao: 'cabelereiro',
        objetivo: 'Descobrir quem foi a primeira pessoa que usou a tesoura.',
        fraqueza:
          'Cabelos maus cuidados fazendo ele querer arrumar o cabelo da pessoa.'
      }
    }
  },
  atributos: {
    FORCA: 4,
    bonusFOR: 0,
    DESTREZA: 16,
    bonusDES: 0,
    SAUDE: 12,
    bonusSAU: 0,
    MENTE: 10,
    bonusMEN: 0,
    CARISMA: 16,
    bonusCAR: 0,
    afinidade: 1
  },
  vida: {
    vida: 19,
    dano: 0,
    armadura: 1,
    bonusArm: 0
  },
  reliquia: {
    nome: 'Tesoura Desfiadeira',
    tipo: ['dano', 'cortante'],
    durabilidade: {
      total: 100,
      atual: 100
    },
    descricao: 'Pode cortar qualquer material contanto que não esteja vivo.',
    visual: '',
    dados: '1d2',
    despertar: {
      ativado: false,
      nome: '',
      visual: '(tipo kill la kill)',
      descricao:
        'Tesoura cresse e suas feridas deixam o agredido mais sensivel a dano.',
      dados: '2d6'
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

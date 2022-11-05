import { IFicha } from '../interfaces/IFicha'
import { IFichaGeneric } from '../interfaces/IFichaGeneric'

interface Props {
  personagem: IFichaGeneric | IFicha
}

export default function Informacoes({ personagem }: Props) {
  return (
    <div>
      <p className="font-bold text-xl">Informações</p>
      {/*  INFORMACOES PESSOAIS */}
      <div>
        <p>
          <span className="font-bold">idade - </span>
          {personagem.info.personagem.informacoes.idade
            ? personagem.info.personagem.informacoes.idade
            : 'indefinida'}
        </p>
        <p>
          <span className="font-bold">personalidade - </span>
          {personagem.info.personagem.informacoes.personalidade}
        </p>
        <p>
          <span className="font-bold">aparencia - </span>
          {personagem.info.personagem.informacoes.aparencia}
        </p>
        <p>
          <span className="font-bold">historia - </span>
          {personagem.info.personagem.informacoes.historia}
        </p>
        {personagem.info.personagem.informacoes.profissao ? (
          <p>
            <span className="font-bold">profissão - </span>
            {personagem.info.personagem.informacoes.profissao}
          </p>
        ) : null}

        {personagem.info.personagem.cidadeNatal ? (
          <p>
            <span className="font-bold">cidade - </span>
            {personagem.info.personagem.cidadeNatal}
          </p>
        ) : null}

        {personagem.info.personagem.informacoes.objetivo ? (
          <p>
            <span className="font-bold">objetivo/sonho - </span>
            {personagem.info.personagem.informacoes.objetivo}
          </p>
        ) : null}
        {personagem.info.personagem.informacoes.fraqueza ? (
          <p>
            <span className="font-bold">fraqueza/medo - </span>
            {personagem.info.personagem.informacoes.fraqueza}
          </p>
        ) : null}
      </div>
    </div>
  )
}

import Head from 'next/head'
import Informacoes from '../../../components/Informacoes'
import BotaoVoltar from '../../../components/parts/BotaoVoltar'

import { Oreaninho as playerOreaninho } from '../../../utils/players/oreaninho'

export default function OreaninhoInfo() {
  return (
    <>
      <Head>
        <title>{playerOreaninho.info.personagem.nome} | Info</title>
      </Head>
      <div>
        <BotaoVoltar url="/players/oreaninho" />
        <Informacoes personagem={playerOreaninho} />
      </div>
    </>
  )
}

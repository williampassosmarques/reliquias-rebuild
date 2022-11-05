import Head from 'next/head'
import Informacoes from '../../../components/Informacoes'
import BotaoVoltar from '../../../components/parts/BotaoVoltar'

import { Poldrin as playerPoldrin } from '../../../utils/players/poldrin'

export default function PoldrinInfo() {
  return (
    <>
      <Head>
        <title>{playerPoldrin.info.personagem.nome} | Info</title>
      </Head>
      <div>
        <BotaoVoltar url="/players/poldrin" />
        <Informacoes personagem={playerPoldrin} />
      </div>
    </>
  )
}

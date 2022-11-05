import Head from 'next/head'
import Informacoes from '../../../components/Informacoes'
import BotaoVoltar from '../../../components/parts/BotaoVoltar'

import { Kuro as playerKuro } from '../../../utils/players/kuro'

export default function KuroInfo() {
  return (
    <>
      <Head>
        <title>{playerKuro.info.personagem.nome} | Info</title>
      </Head>
      <div>
        <BotaoVoltar url="/players/kuro" />
        <Informacoes personagem={playerKuro} />
      </div>
    </>
  )
}

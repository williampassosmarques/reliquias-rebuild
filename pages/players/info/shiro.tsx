import Head from 'next/head'
import Informacoes from '../../../components/Informacoes'
import BotaoVoltar from '../../../components/parts/BotaoVoltar'

import { Shiro as playerShiro } from '../../../utils/players/shiro'

export default function PoldrinInfo() {
  return (
    <>
      <Head>
        <title>{playerShiro.info.personagem.nome} | Info</title>
      </Head>
      <div>
        <BotaoVoltar url="/players/shiro" />
        <Informacoes personagem={playerShiro} />
      </div>
    </>
  )
}

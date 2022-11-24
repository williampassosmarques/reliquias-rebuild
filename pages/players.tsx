import Head from 'next/head'
import Link from 'next/link'
import Player from '../components/players/Player'
import { Be } from '../utils/players/be'
import { Kuro } from '../utils/players/kuro'
import { Oreaninho } from '../utils/players/oreaninho'
import { Poldrin } from '../utils/players/poldrin'
import { Shiro } from '../utils/players/shiro'

export default function Players() {
  return (
    <>
      <Head>
        <title>players</title>
      </Head>
      <div className="pb-5 w-full flex items-center justify-center font-bold text-3xl">
        <Link href="/">
          <h1>Players</h1>
        </Link>
      </div>
      <div className="flex justify-center flex-wrap gap-10 mt-32">
        <Player player={Kuro} />
        <Player player={Poldrin} />
        <Player player={Oreaninho} />
         <Player player={Shiro} />
        <Player player={Be} /> 
      </div>
    </>
  )
}

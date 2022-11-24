import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'
import Ficha from '../components/ficha/Ficha'
import OptionLocalizacao from '../components/parts/OptionLocalizacao'
import NPC from '../components/perso/npc/NPC'
import { IFichaGeneric } from '../interfaces/IFichaGeneric'
import { IInimigo } from '../utils/inimigos/inimigo'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Inimigos() {
  const { data, error } = useSWR('/api/inimigos', fetcher)
  const [selected, setSelected] = useState('all')

  function handleSelected(e: string) {
    setSelected(e)
  }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>inimigos</title>
      </Head>
      <div className="pb-5 w-full flex items-center justify-center font-bold text-3xl">
        <Link href="/">
          <h1>inimigos</h1>
        </Link>
      </div>
      <div></div>
      <div className="pb-10 px-12">
        <div className="flex justify-center flex-wrap gap-20">
          {data.map((personagem: IInimigo) => {
            return (
              <div>
                <Link
                  className="capitalize cursor-pointer font-bold text-xl hover:underline"
                  href="/inimigos/[id]"
                  as={`/inimigos/${personagem.id}`}
                >
                  {personagem.nome}
                </Link>
                <p>nivel - {personagem.nivel}</p>
                <Ficha personagem={personagem} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

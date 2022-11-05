import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'
import OptionLocalizacao from '../components/parts/OptionLocalizacao'
import NPC from '../components/perso/npc/NPC'
import { IFichaGeneric } from '../interfaces/IFichaGeneric'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Vigias() {
  const { data, error } = useSWR('/api/npcs', fetcher)
  const [selected, setSelected] = useState('all')

  function handleSelected(e: string) {
    setSelected(e)
  }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>npcs</title>
      </Head>
      <div className="pb-5 w-full flex items-center justify-center font-bold text-3xl">
        <Link href="/">
          <h1>NPCS</h1>
        </Link>
      </div>
      <div>
        <form className="flex justify-center mb-5 w-fit mx-auto pb-1 border-b-2">
          <select
            value={selected}
            className="focus:outline-0 w-60 capitalize"
            onChange={e => {
              handleSelected(e.target.value)
            }}
          >
            <OptionLocalizacao localizacao="all" />
            <OptionLocalizacao localizacao="reino das mentiras" />
            <OptionLocalizacao localizacao="cidade da meia noite" />
            <OptionLocalizacao localizacao="cidade dos rabiscos" />
            <OptionLocalizacao localizacao="cidade do sol nascente" />
            <OptionLocalizacao localizacao="fortaleza azul" />
            <OptionLocalizacao localizacao="cidadela do metal" />
            <OptionLocalizacao localizacao="reino apagado" />
            <OptionLocalizacao localizacao="alexandria" />
          </select>
        </form>
      </div>
      <div className="pb-10 px-12">
        <div className="flex justify-center flex-wrap gap-20">
          {data.map((personagem: IFichaGeneric) => {
            if (selected === 'all') {
              return (
                <div key={personagem.id}>
                  <NPC personagem={personagem} />
                </div>
              )
            } else if (selected === personagem.info.personagem.cidadeNatal) {
              return (
                <div key={personagem.id}>
                  <NPC personagem={personagem} />
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

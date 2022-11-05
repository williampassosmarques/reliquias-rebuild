import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'
import RadioButton from '../components/parts/RadioButton'
import Vigia from '../components/perso/vigia/Vigia'
import { IFichaGeneric } from '../interfaces/IFichaGeneric'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Vigias() {
  const { data, error } = useSWR('/api/vigias', fetcher)
  const [checked, setChecked] = useState('all')

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>vigias</title>
      </Head>
      <div className="pb-5 w-full flex items-center justify-center font-bold text-3xl">
        <Link href="/"><h1>VIGIAS</h1></Link>
      </div>
      <div>
        <form className="flex flex-wrap mb-5 w-fit justify-center mx-auto">
          <RadioButton value="all" checked={checked} setChecked={setChecked} />
          <RadioButton
            value="capitão"
            checked={checked}
            setChecked={setChecked}
          />
          <RadioButton
            value="superior"
            checked={checked}
            setChecked={setChecked}
          />
          <RadioButton
            value="intermediário"
            checked={checked}
            setChecked={setChecked}
          />
          <RadioButton
            value="novato"
            checked={checked}
            setChecked={setChecked}
          />
          <RadioButton
            value="suporte"
            checked={checked}
            setChecked={setChecked}
          />
        </form>
      </div>
      <div className="pb-10 px-12">
        <div className="flex justify-center flex-wrap gap-20">
          {data.map((personagem: IFichaGeneric) => {
            if (checked === 'all') {
              return (
                <div key={personagem.id}>
                  <Vigia personagem={personagem} />
                </div>
              )
            } else if (checked === personagem.vigia?.posicao) {
              return (
                <div key={personagem.id}>
                  <Vigia personagem={personagem} />
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

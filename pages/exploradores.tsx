import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'
import RadioButton from '../components/parts/RadioButton'
import Explorador from '../components/perso/explorador/Explorador'
import { IFichaGeneric } from '../interfaces/IFichaGeneric'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Exploradores() {
  const { data, error } = useSWR('/api/exploradores', fetcher)
  const [checked, setChecked] = useState('all')

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>exploradores</title>
      </Head>
      <div className="pb-5 w-full flex items-center justify-center font-bold text-3xl">
        <Link href="/">
          <h1>EXPLORADORES</h1>
        </Link>
      </div>
      <div>
        <form className="flex flex-wrap mb-5 w-fit justify-center mx-auto">
          <RadioButton value="all" checked={checked} setChecked={setChecked} />
          <RadioButton
            value="lacaio"
            checked={checked}
            setChecked={setChecked}
          />
          <RadioButton
            value="sub-chefe"
            checked={checked}
            setChecked={setChecked}
          />
          <RadioButton
            value="colecionador"
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
                  <Explorador personagem={personagem} />
                </div>
              )
            } else if (checked === personagem.explorador?.posicao) {
              return (
                <div key={personagem.id}>
                  <Explorador personagem={personagem} />
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

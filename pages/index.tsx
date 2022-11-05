import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col justify-center items-center h-screen font-bold">
        <Link className="hover:underline" href="./players">
          Players
        </Link>
        <Link className="hover:underline" href="./vigias">
          Vigias
        </Link>
        <Link className="hover:underline" href="./exploradores">
          Exploradores
        </Link>
        <Link className="hover:underline" href="./npcs">
          NPCS
        </Link>
      </div>
    </>
  )
}

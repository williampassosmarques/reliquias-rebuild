import { useRouter } from 'next/router'
import useSWR from 'swr'
import PersoComponent from '../../components/PersoComponent'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function NPCPage() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/npcs/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <PersoComponent personagem={data} />
    </div>
  )
}

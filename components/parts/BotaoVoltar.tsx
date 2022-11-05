import { useRouter } from 'next/router'
import { AiOutlineRollback } from 'react-icons/ai'

interface Props {
  url: string
}

export default function BotaoVoltar({url}: Props) {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        router.push(url)
      }}
    >
      <AiOutlineRollback />
    </button>
  )
}

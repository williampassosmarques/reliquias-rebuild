import { Dispatch, SetStateAction, useState } from 'react'
import classNames from 'classnames'

interface Props {
  cd: boolean
  setCd: Dispatch<SetStateAction<boolean>>
  timeCD: number | undefined
}

export default function ButtonCD({ cd, setCd, timeCD }: Props) {
  const [time, setTime] = useState(timeCD)

  return (
    <>
      <button
        className="bg-black font-semibold px-2 text-white"
        onClick={() => {
          if (cd && typeof time === 'number') {
            setTime(time - 1)
          }
          if (time === 0) {
            setTime(timeCD)
            setCd(false)
          }
        }}
      >
        {time}
      </button>
      <button
        className={classNames({
          'bg-black font-semibold px-2 text-white': true,
          'bg-red-500': cd
        })}
        onClick={() => {
          setCd(!cd)
        }}
      >
        cd
      </button>
    </>
  )
}

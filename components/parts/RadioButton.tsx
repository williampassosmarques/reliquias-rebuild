import React from 'react'

interface Props {
  value: string
  checked: string
  setChecked: React.Dispatch<React.SetStateAction<string>>
}

export default function RadioButton({ value, checked, setChecked }: Props) {
  function handleChecked(e: string) {
    setChecked(e)
  }

  return (
    <label className="flex items-center border-b-2 py-1 border-r-2 px-2 last:border-r-0 last:pr-0">
      <input
        className="w-4 h-4"
        type="radio"
        value={value}
        checked={checked === value}
        onChange={e => {
          handleChecked(e.target.value)
        }}
      />
      <span className="ml-2 text-sm font-medium text-gray-500">{value}</span>
    </label>
  )
}

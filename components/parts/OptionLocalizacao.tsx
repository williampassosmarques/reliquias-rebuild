interface Props {
  localizacao: string
}

export default function OptionLocalizacao({ localizacao }: Props) {
  return <option value={localizacao}>{localizacao}</option>
}

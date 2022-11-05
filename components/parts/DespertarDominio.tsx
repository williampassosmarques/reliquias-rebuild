interface Props {
  despertar: boolean
  dominio: boolean
}

export default function DespertarDominio({ despertar, dominio }: Props) {
  return (
    <>
      {despertar ? (
        <p className="font-bold text-green-500">DESPERTADO</p>
      ) : null}
      {dominio ? <p className="font-bold text-blue-500">DOMINIO</p> : null}
    </>
  )
}

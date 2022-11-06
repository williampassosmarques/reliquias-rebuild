import { IStage } from '../../interfaces/IFicha'

interface Props {
  stage: IStage
}

export default function Stage({ stage }: Props) {
  return (
    <div>
      <p className="font-bold text-xl text-purple-500">Stage</p>
      <div>
        <p>
          <span className="font-bold">repel </span>
          {stage.repel ? <span>✔️</span> : <span>❌</span>}
        </p>
        <p>
          <span className="font-bold">track </span>
          {stage.track ? <span>✔️</span> : <span>❌</span>}
        </p>
        <p>
          <span className="font-bold">reverse </span>
          {stage.reverse ? <span>✔️</span> : <span>❌</span>}
        </p>
        <div>
          <p className="font-bold text-lg text-purple-500">Consume</p>
          <div>
            {stage.consume?.vanish ? (
              <p>
                <span className="font-bold">vanish </span>
                {stage.consume.vanish ? <span>✔️</span> : <span>❌</span>}
              </p>
            ) : null}
            {stage.consume?.heal ? (
              <p>
                <span className="font-bold">heal </span>
                {stage.consume.heal ? <span>✔️</span> : <span>❌</span>}
              </p>
            ) : null}
            {stage.consume?.gain ? (
              <p>
                <span className="font-bold">gain </span>
                {stage.consume.gain ? <span>✔️</span> : <span>❌</span>}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

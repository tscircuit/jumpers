import { SOIC } from "@tscircuit/footprints"

interface Props {
  name: string
  labels: string[]
}

export const SmdJumper = ({ name, labels }: Props) => {
  const pad_count = labels.length
  const sch_h = (pad_count - 1) * 0.25

  return (
    <component name={name}>
      <footprint>
        <SOIC row_count={1} pad_count={pad_count} />
      </footprint>
      {labels.map((l, i) => (
        <>
          <port name={l} x={0} y={-sch_h / 2 + i * 0.25} direction="left" />
        </>
      ))}
    </component>
  )
}

import { SOIC } from "@tscircuit/footprints"
export const SmdJumper = ({ name }: { name: string }) => (
  <component name={name}>
    <footprint>
      <SOIC row_count={1} pad_count={3} />
      <smtpad shape="rect" x={1} y={0} width={1} height={1} />
    </footprint>
  </component>
)

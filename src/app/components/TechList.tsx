import TechItem from "./TechItem"
type Props = {
  tech: string[]
}
export default function TechList(props: Props) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {props.tech.map((t) => (
        <TechItem key={t} title={t} />
      ))}
    </ul>
  )
}

import Image from "next/image"

type Props = {
  class: string
  width: number
  height: number
  viewBox: string
  content: string
  alt: string
}

export default function SVG(props: Props) {
  return (
    <div className={props.class}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={props.content} />
      </svg>
    </div>
  )
}

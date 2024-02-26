export function CoolButton() {
  return (
    <div>
      <a
        href="/docs/speedrun/"
        className="btn-xl btn-translucent btn-shadow group pr-9"
      >
        Learn More
        <div className="flex items-center ml-4 -mr-4 opacity-50 group-hover:opacity-100 transition-opacity">
          <svg
            role="img"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-0 group-hover:w-2.5 h-2.5 -mr-2.5 transition-all ease-out duration-200 transform-gpu"
          >
            <path d="M1 9h14a1 1 0 000-2H1a1 1 0 000 2z"></path>
          </svg>
          <svg
            role="img"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-2.5 h-2.5"
          >
            <path d="M7.293 1.707L13.586 8l-6.293 6.293a1 1 0 001.414 1.414l7-7a.999.999 0 000-1.414l-7-7a1 1 0 00-1.414 1.414z"></path>
          </svg>
        </div>
      </a>
    </div>
  )
}

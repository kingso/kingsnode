import Link from "next/link"

export default function FooterDetail() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Flagrantly copied from{" "}
        <Link
          href="https://brittanychiang.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Brittany Chiang&#39;s
        </Link>{" "}
        beautiful website. and coded in{" "}
        <Link
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Visual Studio Code
        </Link>{" "}
        by my fingers. Built with{" "}
        <Link
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </Link>
        , deployed with{" "}
        <Link
          property=""
          href="https://www.netlify.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </Link>
        .
      </p>
    </footer>
  )
}

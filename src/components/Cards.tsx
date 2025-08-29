import type { ReactNode } from "react"

type CardsProps = {
    children: ReactNode
    bg?: string
}

function Cards({children, bg = 'bg-gray-100'}: CardsProps) {
  return (
    <div className={`${ bg } p-6 rounded-lg shadow-md`}>
      { children }
    </div>
  )
}

export default Cards
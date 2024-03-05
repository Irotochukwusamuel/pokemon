import { Suspense } from 'react'
import Loading from '../loading'

export default function DisplayPage({ children, title }) {
  return (
    <div className="w-3/4 m-auto">
      <div className="p-4">
        <h1 className="text-3xl font-bold first-letter:capitalize">{title}</h1>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="p-4 flex flex-wrap gap-3">
          {children}
        </div>
      </Suspense>
    </div>
  )
}

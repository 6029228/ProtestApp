import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getProtestById } from '@/lib/api'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export default function ProtestDetail() {
  const router = useRouter()
  const { id } = router.query
  const [protest, setProtest] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (id) {
      getProtestById(id as string)
        .then(data => setProtest(data))
        .catch(console.error)
        .finally(() => setIsLoading(false))
    }
  }, [id])

  if (isLoading) return <LoadingSpinner />
  if (!protest) return <div>Protest niet gevonden</div>

  return (
    <div className="container mx-auto p-4">
      <h1>{protest.name}</h1>
      {/* Rest of protest details */}
    </div>
  )
} 
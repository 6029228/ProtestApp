'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function ProtestDetails() {
  const [protest, setProtest] = useState(null)
  const params = useParams()
  const router = useRouter()

  useEffect(() => {
    const storedProtests = JSON.parse(localStorage.getItem('protests') || '[]')
    const foundProtest = storedProtests.find(p => p.id.toString() === params.id)
    if (foundProtest) {
      setProtest(foundProtest)
    } else {
      router.push('/protests')
    }
  }, [params.id, router])

  if (!protest) return <div>Loading...</div>

  return (
    <Card className="max-w-md mx-auto bg-red-600 text-white">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{protest.name}</h2>
        <p><strong>Datum:</strong> {protest.date}</p>
        <p><strong>Locatie:</strong> {protest.location}</p>
        <p><strong>Doel:</strong> {protest.goal}</p>
        <p><strong>Beschrijving:</strong> {protest.description}</p>
        <Link href="/protests" passHref>
          <Button className="w-full bg-blue-500">Terug naar Lijst</Button>
        </Link>
      </CardContent>
    </Card>
  )
}


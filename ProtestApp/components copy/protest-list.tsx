'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function ProtestList() {
  const protests = [
    { id: 1, name: 'Protest 1', date: '2023-12-01' },
    { id: 2, name: 'Protest 2', date: '2023-12-15' },
    { id: 3, name: 'Protest 3', date: '2023-12-30' },
  ]

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">Mijn Protesten</h1>
      {protests.map((protest) => (
        <Card key={protest.id} className="bg-red-600 text-white">
          <CardContent className="p-4">
            <h2 className="text-xl font-bold">{protest.name}</h2>
            <p>Datum: {protest.date}</p>
            <Link href={`/protests/${protest.id}`} passHref>
              <Button className="mt-2 bg-blue-500">Meer Info</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
      <Link href="/protests/create" passHref>
        <Button className="w-full bg-orange-500">Protest Maken</Button>
      </Link>
      <Link href="/settings" passHref>
        <Button className="w-full bg-gray-500">Settings</Button>
      </Link>
    </div>
  )
}


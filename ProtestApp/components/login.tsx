'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

export default function Login() {
  return (
    <Card className="max-w-md mx-auto bg-orange-700 text-white">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-bold">Inloggen</h2>
        <Input placeholder="Gebruikersnaam of email" />
        <Input type="password" placeholder="Wachtwoord" />
        <Button className="w-full bg-white text-black">Inloggen</Button>
        <Button className="w-full bg-blue-500">Registreren</Button>
      </CardContent>
    </Card>
  )
}


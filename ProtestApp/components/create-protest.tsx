'use client'

import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

export default function CreateProtest() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    goal: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Card className="max-w-md mx-auto bg-orange-700 text-white">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-bold">Protest Maken</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Naam van het Protest" 
          />
          <Input 
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Datum" 
          />
          <Input 
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Locatie" 
          />
          <Input 
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            placeholder="Doel van het Protest" 
          />
          <Textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Beschrijving" 
          />
          <Button type="submit" className="w-full bg-blue-500">Bevestigen</Button>
          <Button type="button" className="w-full bg-white text-black">Terug</Button>
        </form>
      </CardContent>
    </Card>
  )
}


'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'

export default function Settings() {
  return (
    <Card className="max-w-md mx-auto bg-blue-700 text-white">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-bold">Settings</h2>
        <div className="flex items-center justify-between">
          <span>Lettergrootte</span>
          <Slider defaultValue={[50]} max={100} className="w-1/2" />
        </div>
        <div className="flex items-center justify-between">
          <span>Darkmode</span>
          <Switch />
        </div>
      </CardContent>
    </Card>
  )
}


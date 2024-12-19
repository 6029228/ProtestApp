import * as z from 'zod'

export const ProtestFormSchema = z.object({
  name: z.string().min(3, 'Naam moet minimaal 3 karakters zijn'),
  date: z.string().min(1, 'Datum is verplicht'),
  location: z.string().min(1, 'Locatie is verplicht'),
  goal: z.string().min(10, 'Doel moet minimaal 10 karakters zijn'),
  description: z.string().min(20, 'Beschrijving moet minimaal 20 karakters zijn')
})

export type ProtestFormData = z.infer<typeof ProtestFormSchema> 
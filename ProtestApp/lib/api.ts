import axios from 'axios'
import type { ProtestFormData } from './validations'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export async function createProtest(data: ProtestFormData) {
  return api.post('/protests', data)
}

export async function getProtests() {
  const response = await api.get('/protests')
  return response.data
}

export async function getProtestById(id: string) {
  const response = await api.get(`/protests/${id}`)
  return response.data
} 
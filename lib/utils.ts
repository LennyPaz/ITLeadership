import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Base path - empty for Netlify, was '/ITLeadership' for GitHub Pages
export const BASE_PATH = ''

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper to get correct image path with basePath for static export
export function getImagePath(path: string): string {
  // Only add basePath if the path starts with / and basePath is set
  if (BASE_PATH && path.startsWith('/')) {
    return `${BASE_PATH}${path}`
  }
  return path
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}k`
  }
  return num.toLocaleString()
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

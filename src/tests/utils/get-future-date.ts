import { setYear, parseISO } from 'date-fns'

// Receives "2024-08-10" and returns "2025-08-10"

export function getFutureDate (date: string): Date{
    return setYear(parseISO(date), new Date().getFullYear() + 1)
}
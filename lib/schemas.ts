import { z } from 'zod'

// Define the ContactFormSchema as a constant (not using 'function')
export const ContactFormSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Name is required.' })
        .min(2, { message: 'Must be at least 2 characters.' }),
    email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email('Invalid email.'),
    message: z
        .string()
        .min(1, { message: 'Message is required.' })
})

// Newsletter form schema example
export const NewsletterFormSchema = z.object({
    email: z.string().email('Invalid email.')
})

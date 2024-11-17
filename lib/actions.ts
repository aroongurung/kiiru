'use server'

import { z } from 'zod'
import { ContactFormSchema } from './schemas'
import { resend } from 'resend' // Import the resend function (correct for v4.x.x)
import { ContactFormEmail } from '@/components/ContactFormEmail' // Import the email template

// Type inferred from the schema
type ContactFormData = z.infer<typeof ContactFormSchema>

// Initialize Resend with your API key directly
const resendClient = resend('your-api-key') // Use the `resend` function and provide your API key

export async function sendEmail(data: ContactFormData) {
    // Validate the data using Zod
    const result = ContactFormSchema.safeParse(data)

    if (result.success === false) {
        // Return validation errors if parsing fails
        return { error: result.error.format() }
    }

    try {
        const { name, email, message } = result.data

        // Send the email using the Resend service
        const { data: sendData, error } = await resendClient.send({
            from: 'hello@example.com',
            to: [email],
            cc: ['hello@example.com'],
            subject: 'Contact form submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            react: ContactFormEmail({ name, email, message }) // Use the HTML template
        })

        if (!sendData || error) {
            throw new Error("Failed to send email")
        }

        // Return success if the email was sent
        return { success: true }
    } catch (error) {
        // Handle unexpected errors during email sending
        return { error: error instanceof Error ? error.message : 'Unknown error' }
    }
}

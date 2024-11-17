
export function ContactFormEmail({ name, email, message }: { name: string, email: string, message: string }) {
    return `
      <h1>Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  }

  // ContactFormEmail.tsx (or .html if it's not React)
  
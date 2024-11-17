'use client'
import {z} from "zod"
import {toast} from "sonner"
import {SubmitHandler, useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {ContactFormSchema} from "@/lib/schemas"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {sendEmail} from "@/lib/actions"
import Link from "next/link"


type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}
    } = useForm<Inputs>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })
    const processForm: SubmitHandler<Inputs> = async data => {
        const result = await sendEmail(data)

        if (result?.error) {
            toast.error("An error occured ! Please try again.")
            return
        }
        toast.success('Message sent successfully !')
        reset()
    }
  return (
    <section className="relative isolate">
        {/*Background pattern*/ }
        <svg
            className="absolute inset-0 -z-10 h-full stroke-zinc-200"
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id= '83fd4e5a-9d52-42fc-718e5d7ee527'
                    width={200}
                    height={200}
                    x='50%'
                    y={-64}
                    patternUnits="userSpaceOnUse"
                >
                    <path d='M100 200V .5M.5 . 5H200' fill='none' />
                </pattern>
            </defs>
        </svg>
        {/*Form */}
        <div className="relative">
            <form
                onSubmit={handleSubmit(processForm)}
                className="mt-16 lg:flex-auto"
                noValidate
            >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/*Name */}
                    <div>
                        <Input 
                            id='name'
                            type="text"
                            placeholder="Name"
                            autoComplete="given-name"
                            {...register('name')}
                        />
                        {errors.name?.message && (
                            <p className="ml-1 mt-2 text-sm text-red-600">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    {/*Email */}
                    <div>
                        <Input 
                            type="email"
                            id='email'
                            placeholder="Email"
                            autoComplete="email"
                            {...register('email')}
                        />
                        {errors.email?.message && (
                            <p className="ml-1 mt-2 text-sm text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    {/*Message */}
                    <div className="sm:col-span-2">
                        <Textarea 
                            rows={4}
                            placeholder="Message"
                            {...register('message')}
                        />
                        {errors.message?.message && (
                            <p className="ml-1 mt-2 text-sm text-red-600">
                                {errors.message.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mt-6">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full disabled:opacity-50"
                    >
                        {isSubmitting ? 'Submitting...' : 'Contact Us'}
                    </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                    By submitting this form, I agree to the{' '}
                    <Link href='/privacy' className="font-bold">
                        privacy&nbsp;policy
                    </Link>
                </p>
            </form>
        </div>

    </section>
  )
}

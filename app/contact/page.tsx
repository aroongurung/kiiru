import ContactForm from '@/components/contact-form'
import ForUserInfo from '@/components/foruserinfo'

export default function Contact() {
  return (
   <section className="pb-24 pt-40">
        <div className="container max-w-3xl">
            <ForUserInfo />
            <h2 className="title text-center">
                Let&apos;s talk about your project
            </h2>
            <ContactForm />
        </div>
   </section>
  )
}

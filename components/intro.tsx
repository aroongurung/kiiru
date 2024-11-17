import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Intro() {
  return (
    <section className="flex flex-reverse items-start gap-x-10 gap-y-4 mb-8">
        <div className="mt-2 flex-1 md:mt-0">
            <h1 className="title no-underline">Hey, I&#39;m Aroon.<span className="ml-3 mt-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-mono font-medium">
  beta
</span>
</h1>
            <p className="mt-3 font-light text-muted-foreground">
                I&#39;m a software developer Student at Omnia Vocational School. I&#39;m 
                looking for an Internship.
            </p>
            <div className="flex gap-4 items-center justify-center mt-6 mb-12">
                 {/* LinkedIn Icon */}
                 <a 
                    href="https://www.linkedin.com/in/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className=" hover:text-gray-400 transition-colors"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="w-6 h-6" />
                </a>
                
                {/* GitHub Icon */}
                <a 
                    href="https://github.com/your-profile" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className=" hover:text-gray-400 transition-colors"
                    aria-label="GitHub"
                >
                    <FaGithub className="w-6 h-6" />
                </a>
            </div>
        </div>
        
        {/*Image on the right side next to Introduction
        <div className="relative">
            <Image 
                className="flex-1 rounded-lg grayscale"
                src={aroonLogo}
                alt='Aroon'
                width={175}
                height={175}
                priority
            /></div> */}      
    </section>
  )
}

import Image from "next/image";
import aroonLogo from "@/public/images/authors/aroonLogo.jpg"
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="py-8">
        <div className="container border-t-2 border-zinc-400 pt-2 max-w-4xl flex flex-col items-center justify-between sm:flex-row">
            <div className=" flex justify-center items-center text-center text-zinc-950 dark:text-zinc-100 text-xs leading-5 text-muted-foreground">
                <span>&copy; {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;</span>
                <div className="flex justify-center items-center">
                    <Image 
                        src={aroonLogo}
                        alt='Aroon'
                        width={30}
                        height={8}
                        priority 
                        className="rounded-full"                 
                    />&nbsp;Aroon
                </div>
            </div>

            <div className=" text-sm text-zinc-950 dark:text-zinc-100 flex gap-4 mt-4 sm:mt-0">
                {/* Privacy Link */}
                <Link 
                    href="/privacy-policy" 
                    className=" hover:text-gray-400 transition-colors"
                    aria-label="Privacy Policy"
                >
                    Privacy
                </Link>
                {/* Terms of Services Link */}
                <Link 
                    href="/terms-of-services" 
                    className=" hover:text-gray-400 transition-colors"
                    aria-label="Privacy Policy"
                >
                    Terms of Services
                </Link>

                {/* Cookies Link */}
                <Link 
                    href="/cookies-policy" 
                    className=" hover:text-gray-400 transition-colors"
                    aria-label="Cookies Policy"
                >
                    Cookies
                </Link>
            </div>
        </div>
    </footer>
  );
}

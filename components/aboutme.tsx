import Intro from "./intro";
import TechStackSkills from "./tech-stack";
import Link from "next/link";
import { Button } from "./ui/button";
import aroonpic from "@/public/images/authors/newlogo_aroon.jpg"
import Image from "next/image";

export default function Aboutme() {
  
  return (
    <section className="flex flex-col justify-center text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          About Me
        </h1>
        <div className="flex flex-col justify-center items-center">
          <Intro />
          <Image
            src={aroonpic}
            alt="aroonlogo"
            width={150}
            height={150}
            priority
            className="rounded-full border-2 border-zinc-300 -mt-16"
          />
   
        
          <Link className="mt-6" href="/contact"><Button>Contact me</Button></Link>
          <TechStackSkills />
          <h1 className="text-2xl">I&apos;m currently specializing in <span className="font-semibold">Full Stack</span> Development.</h1>
        </div>
        <div className="my-2">
          <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
          I&apos;m committed to continuously advancing my skills in the field of web development through dedication, focus, and ongoing learning. I take great interest in exploring new technologies, writing technical articles, and contributing to open-source projects. This blog serves as a platform to share my knowledge and insights with the broader community.
          </p>
        </div>
        <div className="my-2">
          <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">At present, I am focused on project-based learning, with several projects in development.</p>
        </div>

        
      </div>
  </section>

  )
}

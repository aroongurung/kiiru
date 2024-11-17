import { FaHtml5, FaPhp, FaPython,  FaGit } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiGithub } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { IoLogoCss3 } from "react-icons/io5";

export default function TechStackSkills() {
  return (
    <section className="flex flex-col md:flex-row items-start gap-10 mt-10 mb-20">
      <div className="flex-1">
        <h1 className=" title mb-6">Technology Skills</h1>
        <div className="flex flex-wrap gap-8 justify-center font-light text-muted-foreground">
          {/* html*/}
          <FaHtml5 size={40} className="text-black dark:text-gray-300" title="HTML" />
          {/* css*/}
          <IoLogoCss3 size={40} className="text-black dark:text-gray-300" title="CSS" />
          {/*Tailwind Css*/}
          <SiTailwindcss size={40} className="text-black dark:text-gray-300" title="Tailwindcss" />
          {/* MongoDB 
          <SiMongodb size={40} className="text-green-600 dark:text-gray-300" title="MongoDB" />*/}
          
          {/* React 
          <SiReact size={40} className="text-sky-500 dark:text-gray-300" title="React" />*/}
          
          {/* Next.js */}
          <SiNextdotjs size={40} className="text-black dark:text-gray-300" title="Next.js" />
          
          
          {/* Node.js 
          <FaNodeJs size={40} className="text-green-500 dark:text-gray-300" title="Node.js" />*/}
          
          {/* Express 
          <FaNodeJs size={40} className="text-gray-600 dark:text-gray-300" title="Express" />*/}
          
          {/* PHP */}
          <FaPhp size={40} className="text-black dark:text-gray-300" title="PHP" />
          
          {/* SQL */}
          <PiFileSql size={40} className="text-black dark:text-gray-300" title="SQL" />
          
          {/* Python */}
          <FaPython size={40} className="text-black dark:text-gray-300" title="Python" />
          
          {/* Git */}
          <FaGit size={40} className="text-black dark:text-gray-300" title="Git" />
          
          {/* GitHub */}
          <SiGithub size={40} className="text-black dark:text-gray-300" title="GitHub" />
          
        </div>
      </div>
    </section>
  );
}

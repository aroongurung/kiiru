import RecentTechnologies from "@/components/technology/recent-technologies";
import RecentProjects from "@/components/project/recent-projects";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import RecentFinlandPosts from "@/components/aboutfinland/recent-finlandposts";
import FinlandPostLists from "@/components/aboutfinland/finlandpostlists";
import RecentArticleLists from "@/components/article/articlepostlists";
import AllContentList from "@/components/allcontentlist";


export default function Home() {
  
  return (
    <section className="py-32">
      <div className="container max-w-4xl">    
        <AllContentList />
        <FinlandPostLists />           
        <RecentArticleLists />
        <RecentFinlandPosts />
        <RecentTechnologies />
        <RecentProjects />
        <div className="flex justify-between">
          <Link
            href='/'
            className="mt-8 inline-flex items-center gap-2 text-sm font-light"
          >
            <ArrowLeftIcon className="¨h-5 w-5" />
            <span>To Top </span>
          </Link>
          <Link
            href='/'
            className="mt-8 inline-flex items-center gap-2 text-sm font-light"
          >
            <span>Back to Home</span>
            <ArrowRightIcon className="¨h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

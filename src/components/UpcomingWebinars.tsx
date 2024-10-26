import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebinars(){
    return (
        <div className="py-12 px-6 bg-gray-900">
            <div className="text-center">
                <h2 className="text-base text-teal-400 font-semibold tracking-wide">FEATURED COURSES</h2>
                <p className="text-3xl text-white/80 font-bold mt-2 sm:text-4xl tracking-tight">Learn with the BEST</p>
            </div>
            <div>
                <HoverEffect items={projects} />
            </div>
            <div className="mt-20 text-center">
                <Link className="rounded-2xl p-3 border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-400 transition duration-300" href={"/courses"}>
                    View all Webinars
                </Link>
            </div>
        </div>
    )
}

export const projects = [
    {
        title: "Understanding music theory",
        description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
        link: "/courses",
    },
    {
        title: "The Art of songwriting",
        description:
        "Learn the craft of songwriting from experienced musicians and songwriters",
        link: "/courses",
    },
    {
        title: "Mastering Your instrument",
        description:
        "Advanced techniques to master your musical instrument of choice",
        link: "/courses",
    },
    {
        title: "Music production essentials",
        description:
        "Get started with music production with this comprehensive overview.",
        link: "/courses",
    },
    {
        title: "Live Performance Techniques",
        description:
        "Enhance your live performance skills with expert tips and strategies.",
        link: "/courses",
    },
    {
        title: "Digital Music Marketing",
        description:
        "Learn how to promote your music effectively in the digital age.",
        link: "/courses",
    },
];
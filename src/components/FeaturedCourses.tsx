import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

export default function FeaturedCourses(){
    const courses = courseData.Courses.filter(course => course.isFeatured)
    return (
        <div className="py-12 px-6 bg-gray-900">
            <div className="text-center">
                <h2 className="text-base text-teal-400 font-semibold tracking-wide">FEATURED COURSES</h2>
                <p className="text-3xl text-white/80 font-bold mt-2 sm:text-4xl tracking-tight">Learn with the BEST</p>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {courses.map(course => (
                        <div className="">
                            <BackgroundGradient className="flex flex-col rounded-3xl bg-black/85 ">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="font-extrabold text-xl">{course.title}</p>
                                    <p className="mt-2">{course.description}</p>
                                    <Link className="mt-4" href={`/courses/${course.id}`}>Learn more</Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link className="rounded-2xl p-3 border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-400 transition duration-300" href={"/courses"}>
                    View All Courses
                </Link>
            </div>
        </div>
    )
}
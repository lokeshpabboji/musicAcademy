import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection(){
    return(
        <div className="relative min-h-screen flex flex-col md:h-[40rem] w-full rounded-md items-center justify-center overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="red"/>
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
                <div className="mt-4">
                    <Button className="bg-black/95" duration={2500}>
                        <Link href={"/courses"}>Explore Courses</Link>
                    </Button>
                </div>
            </div>
        </div>  
    )
}
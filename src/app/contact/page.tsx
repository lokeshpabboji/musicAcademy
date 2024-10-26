import { Meteors } from "@/components/ui/meteors";

export default function Contact(){
    return (
        <div className="min-h-screen w-screen relative shadow-xl bg-black/70 h-full overflow-hidden flex flex-col justify-end items-start">
            <Meteors number={40}/>
        </div>
    )
}
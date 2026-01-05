import type { ReactElement } from "react"
import { CardFooter } from "./ui/CardFooter"
import { CardHeader } from "./ui/CardHeader"
import { TypeOfContent } from "../icons/TypeOfContentLink";
import { ReadMoreText } from "./ui/ReadMoreText";



interface CardProps {
    type:"yt" | "doc" | "tweet";
    typeOfIcon: ReactElement;
    headerTitle: string;
    tag1: string;
    tag2: string;
    date: string;
    link: string;
    description: string;
}




export const Card = (props: CardProps) => {

    return <div className="flex flex-col w-70 border-[#edf2f0] border-2 m-2 rounded-2xl min-h-[420px] h-full justify-between overflow-hidden">
        <CardHeader  type={props.type} title={props.headerTitle} ></CardHeader>
        <div className="p-2 m-2 flex-1 overflow-hidden">
            <div className="w-full h-44 mb-2 overflow-hidden rounded-md">
                <TypeOfContent src={props.link} type={props.type}/>
            </div>
            <div className="text-sm text-[#333] max-h-42 overflow-hidden">
               <ReadMoreText text={props.description} limit={50}/>hi
            </div>
        </div>
        <CardFooter tag1={props.tag1} tag2={props.tag2} date={props.date}></CardFooter>

    </div>
}

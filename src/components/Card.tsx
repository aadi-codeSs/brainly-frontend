import type { ReactElement } from "react"
import { CardFooter } from "./ui/CardFooter"
import { CardHeader } from "./ui/CardHeader"
import { TypeOfContent } from "../icons/TypeOfContentLink";



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

    return <div className="flex flex-col max-w-80 border-[#edf2f0] border-2 m-2 rounded-2xl h-full">
        <CardHeader  type={props.type} title={props.headerTitle} ></CardHeader>
        <div className="p-2 m-2">
            <TypeOfContent src={props.link} type={props.type}/>
            {props.description}
        </div>
        <CardFooter tag1={props.tag1} tag2={props.tag2} date={props.date}></CardFooter>

    </div>
}

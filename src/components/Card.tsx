import type { ReactElement } from "react"
import { CardFooter } from "./ui/CardFooter"
import { CardHeader } from "./ui/CardHeader"

interface CardProps {
    typeOfIcon: ReactElement;
    headerTitle: string;
    tag1: string;
    tag2: string;
    date:string;
    description: string;
}


export const Card = (props: CardProps) => {

    return <div className="flex flex-col max-w-80 border-[#edf2f0] border-2 m-2 rounded-2xl">
        <CardHeader icon={props.typeOfIcon} title={props.headerTitle} ></CardHeader>
        <div className="p-2 m-2">
            {props.description}
        </div>
        <CardFooter tag1={props.tag1} tag2={props.tag2} date={props.date}></CardFooter>

    </div>
}
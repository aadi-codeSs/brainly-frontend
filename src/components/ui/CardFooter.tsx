
interface FooterProps {
    tag1: string,
    tag2: string,
    date: string
}



const CardFooter = (props: FooterProps) => {
    return <div className="font-satoshi text-xs flex flex-col gap-3 m-2">
        <div className="text-[#5248cf] flex gap-2 ">
            <div className="bg-[#e1e7ff] p-1 rounded-lg">{props.tag1}</div>
            <div className="bg-[#e1e7ff] p-1 rounded-lg">{props.tag2}</div>
        </div>
        <div className="text-[#7a7a86]">
            Added on {props.date}
        </div>
    </div>
}

export {CardFooter}
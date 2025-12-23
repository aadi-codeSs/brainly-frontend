import type { ReactElement } from "react"
import { ShareIcon } from "../../icons/ShareIcon";
import { DeleteIcon } from "../../icons/DeleteIcon";

interface cardHeaderProps  {
    icon: ReactElement;
    title: String;
    // width: String;
}

const deafultStyles = "flex items-center m-2";

export const CardHeader = (props: cardHeaderProps) => {

    return <div className={`${deafultStyles}`}>
        <div className="ml-1 mr-2 text-[#7a7a86]">
        {props.icon}
        </div>
        <div className="font-satoshi max-w-50 mr-6 text-md leading-5">{props.title}</div>
            <div className="flex flex-row gap-2 text-[#7a7a86]"><ShareIcon size="md"/>
        <DeleteIcon size="md"/>
        </div>
    </div>
}
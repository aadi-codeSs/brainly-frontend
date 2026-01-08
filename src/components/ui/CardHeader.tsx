import { ShareIcon } from "../../icons/ShareIcon";
import { DeleteIcon } from "../../icons/DeleteIcon";
import { DocTypeIcon } from "../../icons/TypeOfContentIcon";

interface cardHeaderProps  {
    type:"yt" | "doc" | "tweet";
    title: String;
    contentId: string;
    deleteFn: (contentId:string) => Promise<void>;
    // width: String;
}

const deafultStyles = "flex items-center m-2";

export const CardHeader = (props: cardHeaderProps) => {

    return <div className={`${deafultStyles}`}>
        <div className="ml-1 mr-2 text-[#7a7a86]">
        <DocTypeIcon type={props.type}/>
        </div>
        <div className="font-satoshi max-w-50 mr-6 text-md leading-5">{props.title}</div>
            <div className="flex flex-row gap-2 text-[#7a7a86]"><ShareIcon size="md"/>
        <div onClick={()=>{props.deleteFn(props.contentId)}}>
            <DeleteIcon size="md"/>
        </div>
        </div>
    </div>
}
import { useRef } from "react"
import { CancelIcon } from "../icons/CancelIcon"
import { Button } from "./ui/Button"
import { DropDownMenu } from "./ui/DropDown"
import { TextArea } from "./ui/TextArea"
import { TextBox } from "./ui/TextBox"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const CreateContentModal = ({open, onClose}) => {

    const titleRef = useRef<HTMLInputElement | null>(null);
    const linkRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
    const typeRef = useRef<HTMLSelectElement | null>(null);
    
    async function CreateContent ()  {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const description = descriptionRef.current?.value;
        const type = typeRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title,
            link,
            description,
            type
        },{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        alert("content added")
    }

    return <>
    <div>
        {open && <div className="flex items-center justify-center w-screen h-screen bg-slate-500/60 fixed top-0 left-0">
            <div className="p-2 flex flex-col min-w-[50vh] bg-white opacity-100 rounded-lg">
                <div className="ml-[44vh]" onClick={onClose}>
                    <CancelIcon />
                </div>
                <div className="ml-2 mr-2 mt-4 flex flex-col gap-2">
                    <TextBox ref={titleRef} placeholder="Enter title"/>
                    <TextBox ref={linkRef} placeholder="Paste the link"/>
                    <TextArea ref={descriptionRef}/>
                    <DropDownMenu ref={typeRef}/>
                </div>
                <div className="ml-[39vh]">
                    <Button onClick={CreateContent} variant="primary" text="Add" size="sm" />
                </div>
            </div>
            </div>}
    </div>
    </>
}
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
        onClose();
    }

    return <>
        {open && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-500/60">
                <div className="p-6 flex flex-col w-full max-w-2xl bg-white rounded-lg shadow-xl mx-4">
                    <div className="flex justify-end mb-2">
                        <button onClick={onClose} className="hover:opacity-70 transition-opacity">
                            <CancelIcon />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <TextBox ref={titleRef} placeholder="Enter title"/>
                        <TextBox ref={linkRef} placeholder="Paste the link"/>
                        <TextArea ref={descriptionRef}/>
                        <DropDownMenu ref={typeRef}/>
                    </div>
                    <div className="flex justify-end mt-6">
                        <Button onClick={CreateContent} variant="primary" text="Add" size="sm" />
                    </div>
                </div>
            </div>
        )}
    </>
}
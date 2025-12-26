import { CancelIcon } from "../icons/CancelIcon"
import { DropDownMenu } from "./ui/DropDown"
import { TextBox } from "./ui/TextBox"

export const CreateContentModal = ({open, onClose}) => {
    return <>
    <div>
        {open && <div className="flex items-center justify-center w-screen h-screen bg-slate-500/60 fixed top-0 leftt-0">
            <div className="p-2 flex flex-col min-w-[50vh] bg-white opacity-100">
                <div className="ml-[44vh]">
                    <CancelIcon/>
                </div>
                <div className="ml-2 mr-2 mt-4">
                    <TextBox placeholder="Enter title"/>
                    <TextBox placeholder="Paste the link"/>
                    <TextBox placeholder="Paste the link"/>
                    <DropDownMenu/>
                </div>
            </div>
            </div>}
    </div>
    </>
}
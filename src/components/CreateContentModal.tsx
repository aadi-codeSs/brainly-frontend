import { CancelIcon } from "../icons/CancelIcon"
import { Button } from "./ui/Button"
import { DropDownMenu } from "./ui/DropDown"
import { TextArea } from "./ui/TextArea"
import { TextBox } from "./ui/TextBox"

export const CreateContentModal = ({open, onClose}) => {
    return <>
    <div>
        {open && <div className="flex items-center justify-center w-screen h-screen bg-slate-500/60 fixed top-0 left-0">
            <div className="p-2 flex flex-col min-w-[50vh] bg-white opacity-100 rounded-lg">
                <div className="ml-[44vh]" onClick={onClose}>
                    <CancelIcon />
                </div>
                <div className="ml-2 mr-2 mt-4 flex flex-col gap-2">
                    <TextBox placeholder="Enter title"/>
                    <TextBox placeholder="Paste the link"/>
                    <TextArea/>
                    <DropDownMenu/>
                </div>
                <div className="ml-[39vh]">
                    <Button variant="primary" text="Add" size="sm" />
                </div>
            </div>
            </div>}
    </div>
    </>
}
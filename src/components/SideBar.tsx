import { DocTypeIcon } from "../icons/TypeOfContentIcon"
import { SideBarItem } from "./ui/SideBarItem"


const defaultStyles = "w-56 border-r-2 border-slatish min-h-screen flex flex-col items-center  "

export const SideBar = () => {
    return <aside className={`${defaultStyles}`}>
        <SideBarItem title="Tweets" logo={<DocTypeIcon type="tweet"/>}></SideBarItem>
        <SideBarItem title="Video" logo={<DocTypeIcon type="yt"/>}></SideBarItem>

    </aside>
}
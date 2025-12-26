import { SideBarItem } from "./ui/SideBarItem"


const defaultStyles = "w-64 border-r-2 border-slatish min-h-screen"

export const SideBar = () => {
    return <aside className={`${defaultStyles}`}>
        <SideBarItem title="hello"></SideBarItem>
    </aside>
}
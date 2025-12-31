import { DocTypeIcon } from "../icons/TypeOfContentIcon"
import { SideBarItem } from "./ui/SideBarItem"


const defaultStyles = "w-56 min-h-screen flex flex-col gap-0.75 bg-[#f9fafd]  "

export const SideBar = () => {
    return <div className="">
            <aside className={`${defaultStyles}`}>
        <SideBarItem title="Tweets" logo={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" width="20px" height="20px" viewBox="0 0 26 26">
<path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
</svg>}></SideBarItem>
        <SideBarItem title="Video" logo={<svg width="20px" height="20px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="size-6"><path d="M14 12L10.5 14V10L14 12Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z" stroke="currentColor" stroke-width="1.5"></path></svg>}></SideBarItem>

    </aside>
        </div>
}
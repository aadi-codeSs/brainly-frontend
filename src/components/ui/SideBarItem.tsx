import type { ReactElement } from "react"

interface SideBarItem {
    logo: ReactElement;
    title:string;
}

const defaultStyles = "font-satoshim hover:bg-[#f7f9fc] hover:text-[#000000] duration-150 ml-6 mt-2.5 p-2 w-[140px]  rounded-md h-[34px] text-sm flex items-center gap-3 text-base tracking-tight cursor-pointer text-[#6a7385] "

export const SideBarItem = (props: SideBarItem) => {
    return <div className={`${defaultStyles}`}>
        {props.logo}
        {props.title}
    </div>
}
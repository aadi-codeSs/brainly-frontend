import type { ReactElement } from "react"

interface SideBarItem {
    logo: ReactElement;
    title:string;
}

const defaultStyles = "font-satoshim border-1 p-0.5 pl-2 m-2 w-[140px]  rounded-md h-[34px] flex items-center gap-2 text-base text-[#7a7a86] tracking-tight "

export const SideBarItem = (props: SideBarItem) => {
    return <div className={`${defaultStyles}`}>
        {props.logo}
        {props.title}
    </div>
}
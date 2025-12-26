import type { ReactElement } from "react"

interface SideBarItem {
    logo: ReactElement;
    title:string;
}

const defaultStyles = "border-1 p-1 m-2 rounded-md h-[34px] flex items-center"

export const SideBarItem = (props: SideBarItem) => {
    return <div className={`${defaultStyles}`}>
        {props.title}
    </div>
}
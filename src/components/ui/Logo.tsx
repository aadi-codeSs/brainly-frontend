import type { ReactElement } from "react"

interface LogoProps {
    logoIcon?: ReactElement;
    logoName: string;
    size: "sm" | "md" | "lg";
}

const sizeStyles = {
    "sm":"text-2xl font-[400] tracking-tighter",
    "md":"",
    "lg":""
}

const deafultStyles = "flex items-center font-satoshib leading-none antialiased subpixel-antialiased"

export const Logo = (props: LogoProps) => {

    return <div className={`${sizeStyles[props.size]} ${deafultStyles}`}>
        {props.logoIcon ? <div> {props.logoIcon} </div> : null}
        <div className="flex">{props.logoName}</div>
    </div>
}
import type { ReactElement } from "react"

interface LogoProps {
    logoIcon?: ReactElement;
    logoName: string;
    size: "sm" | "md" | "lg";
}

const sizeStyles = {
    "sm":"text-xl font-[400] text-widest m-1",
    "md":"",
    "lg":""
}

const deafultStyles = "flex items-center font-satoshib leading-none antialiased subpixel-antialiased"

export const Logo = (props: LogoProps) => {

    return <div className={`${sizeStyles[props.size]} ${deafultStyles}`}>
        {props.logoIcon ? <div> {props.logoIcon} </div> : null}
        {props.logoName}
    </div>
}
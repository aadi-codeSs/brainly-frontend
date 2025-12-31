import type { ReactElement } from "react";


type Variants = "primary" | "secondary"


interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    height: ""
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    function: ()=>void
}

const variantStyles = {
    "primary": "bg-[#5046e5] text-[#f1f1fd]",
    "secondary": "bg-[#e1e7ff] text-[#5248cf] font-[425]"
    
}

const sizeStyles = {
    "sm": " m-2  h-[38px] p-4 text-sm tracking-tight rounded-[8px] font-[3]",
    "md": " m-2 h-[40px] p-2.5 pl-3.5 pr-3.5 rounded-[9px] font-[400]",
    "lg": "py-4 px-6"
}

const deafultStyles = "flex items-center font-satoshi leading-none cursor-pointer"

export const Button = (props: ButtonProps) => {

    return <button onClick={props.function} className={`${variantStyles[props.variant]} ${deafultStyles} ${sizeStyles[props.size]}`}>
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}  {props.text}  {props.endIcon}
    </button>

}


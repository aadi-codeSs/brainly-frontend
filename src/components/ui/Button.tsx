import type { ReactElement } from "react";


type Variants = "primary" | "secondary"


interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    /** optional classes applied to the text wrapper */
    textStyle?: string;
    /**
     * Generic click handler: supports sync or async functions and optional event param
     */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>  ;
}

const variantStyles = {
    "primary": "bg-[#5046e5] text-[#f1f1fd]",
    "secondary": "bg-[#e1e7ff] text-[#5248cf] font-[425]"
    
}

const sizeStyles = {
    "sm": " m-2  h-[38px] p-4 text-sm tracking-tight rounded-[8px] font-[3]",
    "md": " m-2 h-[40px] p-2.5 pl-3.5 pr-3.5 rounded-[9px] font-[400]",
    "lg": " py-4 px-6"
}

const defaultStyles = "flex items-center font-satoshi leading-none cursor-pointer"

export const Button = (props: ButtonProps) => {
  const textContainerClass = `flex-1 flex items-center justify-center ${props.textStyle ?? ""}`.trim()

  return (
    <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
      {props.startIcon ? <div className="pr-2 flex items-center">{props.startIcon}</div> : <div className="w-4" />}

      {props.text ? (
        <div className={textContainerClass}>
          <span className="text-center">{props.text}</span>
        </div>
      ) : null}

      {props.endIcon ? <div className="pl-2 flex items-center">{props.endIcon}</div> : <div className="w-4" />}
    </button>
  )

}


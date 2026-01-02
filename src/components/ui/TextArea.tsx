import { forwardRef } from "react";

interface TextAreaProps {
  placeholder?: string;
  styles?: string;
  rows?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  return (
    <textarea
      ref={ref}
      rows={props.rows ?? 4}
      className={`min-h-10 w-full bg-background border-2 border-slatish px-3 py-2 text-sm rounded-md placeholder:font-satoshi focus:border-slatish focus:outline-none focus:ring-2 focus:ring-[#dfe8e4] focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${props.styles ?? ''}`}
      placeholder={props.placeholder ?? "Enter description here..."}
    />
  );
});

TextArea.displayName = "TextArea";
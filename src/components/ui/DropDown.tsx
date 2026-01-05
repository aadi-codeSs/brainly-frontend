import { forwardRef } from "react";

interface DropdownOption { value: string; label: string }
interface DropdownProps {
  options?: DropdownOption[];
  styles?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const DropDownMenu = forwardRef<HTMLSelectElement, DropdownProps>((props, ref) => {
  const options = props.options ?? [
    { value: "", label: "Type" },
    { value: "yt", label: "youtube" },
    { value: "tweet", label: "tweet" },
    { value: "doc", label: "document" },
  ];

  return (
    <select
      ref={ref}
      id="dropdown"
      value={props.value}
      onChange={props.onChange}
      className={`flex h-8 w-22 rounded-md bg-background border-2 border-slatish px-3 py-1 text-sm font-satoshi text-grey focus:border-slatish focus:outline-none focus:ring-2 focus:ring-[#dfe8e4] focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${props.styles ?? ''}`}
    >
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
});

DropDownMenu.displayName = "DropDownMenu";
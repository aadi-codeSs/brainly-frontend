
interface TextHolder{
    placeholder: string,
}

export const TextBox = (props: TextHolder) => {
    return <>
<input
  type="text"
  className="
    flex h-10 w-full rounded-md
    bg-background
    border-2 border-slatish
    px-3 py-2 text-sm

    placeholder:font-satoshi

    focus:border-slatish
    focus:outline-none
    focus:ring-2
    focus:ring-[#dfe8e4]
    focus:ring-offset-0

    disabled:cursor-not-allowed
    disabled:opacity-50
  "
  placeholder={props.placeholder}
/>
    </>
}
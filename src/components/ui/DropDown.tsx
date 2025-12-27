export const DropDownMenu = () => {
    return <>
    
<select
        id="dropdown"
        // value={selectedOption}
        // onChange={(e) => setSelectedOption(e.target.value)}
        className={`
            " flex h-8 w-22 rounded-md
            bg-background
            border-2 border-slatish
            px-3 py-1 text-sm
            font-satoshi
            text-grey

            placeholder:font-satoshi
            placeholder: text-sm

            focus:border-slatish
            focus:outline-none
            focus:ring-2
            focus:ring-[#dfe8e4]
            focus:ring-offset-0

            disabled:cursor-not-allowed
            disabled:opacity-50 " 
        `}>
        <option value="">Type</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </>
}
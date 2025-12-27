export const TextArea = () => {
    return <textarea
        id="description"
        // value={description}
        // onChange={(e) => setDescription(e.target.value)}
        rows={4} // Makes it taller than a single-line input
        className={`
            " min-h-10
            w-full 
            bg-background
            border-2 border-slatish
            px-3 py-2 text-sm
            
            rounded-md
            
            placeholder:font-satoshi

            focus:border-slatish
            focus:outline-none
            focus:ring-2
            focus:ring-[#dfe8e4]
            focus:ring-offset-0
            
            disabled:cursor-not-allowed
            disabled:opacity-50  "`}
        placeholder="Enter description here..."
      />
}
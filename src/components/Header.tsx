
import { BrainIcon } from "../icons/BrainIcon"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Logo } from "./ui/Logo"
import { Button } from "./ui/Button"
import { shareFn } from "../icons"

interface Headerprops {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = (props: Headerprops) => {
    return <div className="fixed top-0 left-0 right-0 w-full z-30 bg-white border-b-2 border-slatish h-16 mt-1">
      <div className='flex items-center h-full px-4'>    
        <Logo logoIcon={<BrainIcon/>} logoName='Second Brain' size='sm'></Logo>
        <div className='flex ml-auto gap-2'>
          <Button startIcon={<PlusIcon size='base'/>} onClick={()=>{props.setModalOpen(true)}} variant="primary" text="Add Content" size="sm"></Button>
          <Button onClick={shareFn} startIcon={<ShareIcon size='base'/>} variant="secondary" text="Share Brain" size="sm"></Button>
        </div>
      </div>
    </div>
}
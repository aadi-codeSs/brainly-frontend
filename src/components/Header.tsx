
import { BrainIcon } from "../icons/BrainIcon"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Logo } from "./ui/Logo"
import { Button } from "./ui/Button"

interface Headerprops {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = (props: Headerprops) => {
    return <div className='flex items-center mb-2 ml-4 mt-2 mr-4 border-b '>    
        <Logo logoIcon={<BrainIcon/>} logoName='Second Brain' size='sm'></Logo>
        <div className='flex ml-auto'>
          <Button startIcon={<PlusIcon size='base'/>} function={()=>{props.setModalOpen(true)}} variant="primary" text="Add Content" size="sm"></Button>
          <Button startIcon={<ShareIcon size='base'/>} variant="secondary" text="Share Brain" size="sm"></Button>
        </div>
      </div>
}

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
    return <div className="border-b-2 border-slatish">
      <div className='flex items-center mb ml-4 mt-2 mr-4  '>    
        <Logo logoIcon={<BrainIcon/>} logoName='Second Brain' size='sm'></Logo>
        <div className='flex ml-auto'>
          <Button startIcon={<PlusIcon size='base'/>} onClick={()=>{props.setModalOpen(true)}} variant="primary" text="Add Content" size="sm"></Button>
          <Button startIcon={<ShareIcon size='base'/>} variant="secondary" text="Share Brain" size="sm"></Button>
        </div>
      </div>
    </div>
}
import './App.css'
import { Button } from './components/ui/Button'
import { CardHeader } from './components/ui/CardHeader'
import { Logo } from './components/ui/Logo'
import { BrainIcon } from './icons/BrainIcon'
import { DeleteIcon } from './icons/DeleteIcon'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { DocTypeIcon } from './icons/TypeOfContentIcon'
import { CardFooter } from './components/ui/CardFooter'
import { Card } from './components/Card'
import { SideBar } from './components/SideBar'
import { TypeOfContent } from './icons/TypeOfContentLink'
import { CreateContentModal } from './components/CreateContentModal'


function App() {


  return (
    <div className='min-h-screen flex flex-col'>
      {/* <Button startIcon={<PlusIcon size='base'/>} variant="primary" text="Add Content" size="sm"></Button>
      <Button startIcon={<ShareIcon size='base'/>} variant="secondary" text="Share Brain" size="sm"></Button>
      <Logo logoIcon={<BrainIcon/>} logoName='Second Brain' size='sm'></Logo>
       */}
      <CreateContentModal open={true}/>
      <Card
        type="yt"
        typeOfIcon={<DocTypeIcon type='doc' />}
        headerTitle='Lorem ipsum dolor sit amet, consectetuer adip'
        tag1='#productivity' tag2='#ideas' 
        date='12/12/2025' 
        link="https://youtu.be/V7-vRoLgccY"
        description='friends new episode'
      />
       <Card
        type="tweet"
        typeOfIcon={<DocTypeIcon type='doc' />}
        headerTitle='Lorem ipsum dolor sit amet, consectetuer adip'
        tag1='#productivity' tag2='#ideas' 
        date='12/12/2025' 
        link="https://x.com/diwanshu_28/status/2004433554508599706"
        description='friends new episode'
      />
    
        {/* <SideBar></SideBar> */}
    </div>

  )
}

export default App

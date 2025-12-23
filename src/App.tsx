
import './App.css'
import { Button } from './components/ui/Button'
import { CardHeader } from './components/ui/CardHeader'
import { Logo } from './components/ui/Logo'
import { BrainIcon } from './icons/BrainIcon'
import { DeleteIcon } from './icons/DeleteIcon'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { DocTypeIcon } from './icons/DataTypeIcon'
import { CardFooter } from './components/ui/CardFooter'
import { Card } from './components/Card'

function App() {


  return (
    <>
      {/* <Button startIcon={<PlusIcon size='base'/>} variant="primary" text="Add Content" size="sm"></Button>
      <Button startIcon={<ShareIcon size='base'/>} variant="secondary" text="Share Brain" size="sm"></Button>
      <Logo logoIcon={<BrainIcon/>} logoName='Second Brain' size='sm'></Logo> */}
      <Card
        typeOfIcon={<DocTypeIcon type='doc' />}
        headerTitle='Lorem ipsum dolor sit amet, consectetuer adip'
        tag1='#productivity' tag2='#ideas' 
        date='12/12/2025' 
        description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.' ></Card>
    </>
  )
}

export default App

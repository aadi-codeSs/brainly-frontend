
import './App.css'
import { Button } from './components/ui/Button'
import { Logo } from './components/ui/Logo'
import { BrainIcon } from './icons/BrainIcon'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {


  return (
    <>
      <Button startIcon={<PlusIcon size='base'/>} variant="primary" text="Add Content" size="sm"></Button>
      <Button startIcon={<ShareIcon size='base'/>} variant="secondary" text="Share Brain" size="sm"></Button>
      <Logo logoIcon={<BrainIcon/>} logoName='Second Brain' size='sm'></Logo>

    </>
  )
}

export default App

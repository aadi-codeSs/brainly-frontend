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
import { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Landingpage } from './components/pages/LandingPage'


function App() {

  const [modalOpen, setModalOpen] = useState(true);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout modalOpen={modalOpen} setModalOpen={setModalOpen} />}>
          <Route index element={<Landingpage modalOpen={modalOpen} setModalOpen={setModalOpen} />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

interface Layoutprops{
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = (props: Layoutprops) => {
  return  <div>
            <Header modalOpen={props.modalOpen} setModalOpen={props.setModalOpen} ></Header>
          <div className='flex'>
            <SideBar/>
          <div className='min-h-[100vh] flex flex-col ml-28 mr-28 mt-4'>
    
          <div className='flex-1'>
            <Outlet/>
          </div>
            <Footer></Footer>
          </div>
          </div>
          </div>
}
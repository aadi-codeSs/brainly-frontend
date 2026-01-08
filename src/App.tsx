import './App.css'
import { SideBar } from './components/SideBar'
import { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Landingpage } from './components/pages/LandingPage'
import { Signup } from './components/pages/SignUp'
import { Signin } from './components/pages/SignIn'
import { ProtectedRoute } from './components/ProtectedRoute'


function App() {

  const [modalOpen, setModalOpen] = useState(false);

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>} /> 
        <Route path='/signin' element={<Signin/>} />
        <Route path="/dashboard" element={<Layout modalOpen={modalOpen} setModalOpen={setModalOpen} />}>
          <Route index element={<ProtectedRoute children={<Landingpage modalOpen={modalOpen} setModalOpen={setModalOpen} />}/>}/>
          
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
          <div className='flex ml-0!'>
            <SideBar/>
          <div className='min-h-[100vh] flex flex-col ml-14 mr-14 mt-4'>
    
          <div className='flex-1'>
            <Outlet/>
          </div>
            
          </div>
          </div>
          <div className='ml-20 mr-20 mt-4'>
            <Footer></Footer>
          </div>
          </div>
}
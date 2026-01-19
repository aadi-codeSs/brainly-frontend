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
import { Ytpage } from './components/pages/YtPage'


function App() {

  const [modalOpen, setModalOpen] = useState(false);

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>} /> 
        <Route path='/signin' element={<Signin/>} />
        <Route path="/dashboard" element={<Layout modalOpen={modalOpen} setModalOpen={setModalOpen} />}>
          <Route index element={<ProtectedRoute children={<Landingpage modalOpen={modalOpen} setModalOpen={setModalOpen} />}/>}/>
          <Route path='/dashboard/yt' element={<Ytpage/>}/>
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
  return (
    <div className='min-h-screen bg-white'>
      {/* Fixed Header */}
      <Header modalOpen={props.modalOpen} setModalOpen={props.setModalOpen} />
      
      {/* Fixed Sidebar */}
      <SideBar/>
      
      {/* Scrollable Main Content Area */}
      <main className='pt-16 pl-56 h-[calc(100vh-4rem)] overflow-y-auto max-md:pl-0'>
        <div className='flex flex-col min-h-full'>
          {/* Content Area */}
          <div className='flex-1 px-14 py-4'>
            <Outlet/>
          </div>
          
          {/* Footer inside scrollable area */}
          <div className='px-20 mt-4'>
            <Footer/>
          </div>
        </div>
      </main>
    </div>
  )
}
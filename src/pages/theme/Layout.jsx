import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from "react-router-dom";

function Layout() {

  return (
    <div className='h-screen'>
      <Header />
      <div className="flex flex-row h-4/5">
        <Sidebar />
        <main className="bg-yellow-100 w-full"><Outlet /></main>
        
      </div>

      <Footer />
    </div>
  )
}

export default Layout

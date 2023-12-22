

import Collection from './components/Collection'
import Team from './components/Team'
import Footer from './components/footer'
import NavBar from './components/header'



function App() {

  return (
  
    <div className='text-black bg-slate-200 min-h-screen'>
        <NavBar/>
        <Collection/>
        <Team/>
        <Footer/>
    </div>
    
  )
}

export default App

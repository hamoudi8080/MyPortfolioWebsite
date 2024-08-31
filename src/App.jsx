
import styles from './App.module.css'
import Introduction from './components/Introduction/Introduction'
import { Navbar } from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Project/Projects'
import Contacts from './components/Contacts/Contacts'
function App() {
 

  return (
    <>
      <div className={styles.App}> 
        <Navbar/>
        <Introduction/>
        <About/>
        <Experience />
        <Projects/>
        <Contacts />
      </div>
    </>
  )
}

export default App

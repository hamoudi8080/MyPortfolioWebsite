
import styles from './App.module.css'
import Introduction from './components/Introduction/Introduction'
import { Navbar } from './components/Navbar/Navbar'
import About from './components/About/About'
function App() {
 

  return (
    <>
      <div className={styles.App}> 
        <Navbar/>
        <Introduction/>
        <About/>
      </div>
    </>
  )
}

export default App

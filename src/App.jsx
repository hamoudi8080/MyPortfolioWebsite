import MainPage from "./MainPage"

import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CardPage from "./cardPage";
 

 




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={MainPage} />
        <Route path="/card/:id" Component={CardPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

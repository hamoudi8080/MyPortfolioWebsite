import MainPage from "./MainPage"

import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import CardPage from "./cardPage";
import MyCardPage from "./MyCardPage";
 

 




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={MainPage} />
        <Route path="/card/:id" Component={MyCardPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

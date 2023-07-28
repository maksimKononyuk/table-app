import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainContainer from './components/MainContainer/MainContainer'
import RedirectComponent from './RedirectComponent'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<RedirectComponent />} />
          <Route path='/table-app'>
            <Route index element={<MainContainer />} />
            <Route path={'/table-app/:page'} element={<MainContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainContainer from './components/MainContainer/MainContainer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/*'>
            <Route index element={<MainContainer />} />
            <Route path={':page'} element={<MainContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

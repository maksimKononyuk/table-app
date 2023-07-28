import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom'
import './App.css'
import MainContainer from './components/MainContainer/MainContainer'

function App() {
  useEffect(() => {
    console.log('red')
    redirect('/table-app')
  }, [])
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/*'>
            <Route index element={<MainContainer />} />
            <Route path={'table-app/:page'} element={<MainContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

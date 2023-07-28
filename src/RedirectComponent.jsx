import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RedirectComponent = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/table-app')
  }, [navigate])
  return <div></div>
}

export default RedirectComponent

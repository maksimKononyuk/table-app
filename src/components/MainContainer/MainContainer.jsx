import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PaginationBlock from '../PaginationBlock/PaginationBlock'
import SearchBlock from '../SearchBlock/SearchBlock'
import Table from '../Table/Table'
import styles from './styles.module.css'

const MainContainer = () => {
  const navigate = useNavigate()
  const currentPage = useSelector((state) => state.appState.currentPage)

  useEffect(() => {
    navigate(`/table-app/${currentPage}`)
  }, [currentPage, navigate])

  return (
    <div className={styles.container}>
      <div>
        <SearchBlock />
        {/* <Table /> */}
      </div>
      <PaginationBlock />
    </div>
  )
}

export default MainContainer

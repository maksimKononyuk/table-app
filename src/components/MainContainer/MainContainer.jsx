import PaginationBlock from '../PaginationBlock/PaginationBlock'
import SearchBlock from '../SearchBlock/SearchBlock'
import Table from '../Table/Table'
import styles from './styles.module.css'

const MainContainer = () => {
  return (
    <div className={styles.container}>
      <div>
        <SearchBlock />
        <Table />
      </div>

      <PaginationBlock />
    </div>
  )
}

export default MainContainer

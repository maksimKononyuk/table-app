import PaginationNextPrevButton from '../PaginationNextPrevButton/PaginationNextPrevButton'
import PaginationPageNumbers from '../PaginationPageNumbers/PaginationPageNumbers'
import styles from './styles.module.css'

const PaginationBlock = () => {
  return (
    <div className={styles.container}>
      <PaginationNextPrevButton />
      <PaginationPageNumbers />
      <PaginationNextPrevButton isNext={true} />
    </div>
  )
}

export default PaginationBlock

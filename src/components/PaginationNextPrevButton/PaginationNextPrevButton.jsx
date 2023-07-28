import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../state/appStateSlice'

const PaginationNextPrevButton = ({ isNext }) => {
  const dispath = useDispatch()
  const currentPage = useSelector((state) => state.appState.currentPage)
  const countOfPages = useSelector((state) => state.appState.countOfPages)

  const clickHandler = () => {
    if (isNext && currentPage < countOfPages) {
      dispath(setCurrentPage(currentPage + 1))
    }
    if (!isNext && currentPage > 1) {
      dispath(setCurrentPage(currentPage - 1))
    }
  }
  return (
    <div className={styles.container} onClick={clickHandler}>
      {isNext ? 'Далее' : 'Назад'}
    </div>
  )
}

export default PaginationNextPrevButton

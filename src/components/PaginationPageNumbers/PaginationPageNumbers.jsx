import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from '../../state/appStateSlice'
import styles from './styles.module.css'

const PaginationPageNumbers = () => {
  const dispatch = useDispatch()
  const countOfPages = useSelector((state) => state.appState.countOfPages)
  const currentPage = useSelector((state) => state.appState.currentPage)

  const clickHandler = (index) => {
    dispatch(setCurrentPage(index))
  }

  return (
    <div className={styles.container}>
      <ul>
        {Array.from(Array(countOfPages)).map((_, index) => (
          <li
            key={index}
            style={currentPage === index + 1 ? { color: '#7EBC3C' } : null}
            onClick={() => clickHandler(index + 1)}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PaginationPageNumbers

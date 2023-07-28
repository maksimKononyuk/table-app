import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import { setCurrentData } from '../../state/appStateSlice'
import arrow from '../../images/arrow.svg'

const TableHeadCollumn = ({ title }) => {
  const dispath = useDispatch()
  const data = useSelector((state) => state.appState.currentData)
  const sortData = (property) => {
    const sortArr = [...data]
    sortArr.sort((a, b) => {
      if (typeof a[property] === 'number') {
        return b[property] - a[property]
      }
      return a[property].localeCompare(b[property])
    })
    dispath(setCurrentData(sortArr))
  }
  const clichHandler = (e) => {
    const property = e.target.textContent
    switch (property) {
      case 'ID':
        sortData('id')
        return
      case 'Заголовок':
        sortData('title')
        return
      case 'Описание':
        sortData('body')
        return
      default:
        return
    }
  }
  return (
    <th className={styles.container} onClick={clichHandler}>
      {title}
      <img src={arrow} alt='arrow' />
    </th>
  )
}

export default TableHeadCollumn

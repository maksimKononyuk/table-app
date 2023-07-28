import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentData } from '../../state/appStateSlice'
import styles from './styles.module.css'
import searchIcon from '../../images/search-svg.svg'

const SearchBlock = () => {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')
  const [isSaveData, setIsSaveData] = useState(true)
  const [currentDataSave, setCurrentDataSave] = useState([])
  const allData = useSelector((state) => state.appState.data)
  const currentData = useSelector((state) => state.appState.currentData)
  const currentPage = useSelector((state) => state.appState.currentPage)

  useEffect(() => {
    setSearchText('')
    setIsSaveData(true)
    setCurrentDataSave([])
  }, [currentPage])

  const changeHandler = (e) => {
    if (isSaveData) {
      setCurrentDataSave(currentData)
      setIsSaveData(false)
    }
    const value = e.target.value
    setSearchText(value)
    let search = null
    for (let i = 0; i < allData.length; i++) {
      if (allData[i].id.toString().includes(value)) {
        search = allData[i]
        break
      }
      if (allData[i].title.toString().includes(value)) {
        search = allData[i]
        break
      }
      if (allData[i].body.toString().includes(value)) {
        search = allData[i]
        break
      }
    }
    if (search) {
      dispatch(setCurrentData([search]))
    }
    console.log(value)
    if (!value) {
      dispatch(setCurrentData(currentDataSave))
    }
  }
  return (
    <div className={styles.container}>
      <input
        type={'text'}
        className={styles.input}
        placeholder='Поиск'
        onChange={changeHandler}
        value={searchText}
      />
      <img src={searchIcon} alt='search' width='21px' height='21px' />
    </div>
  )
}

export default SearchBlock

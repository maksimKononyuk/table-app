import styles from './styles.module.css'
import searchIcon from '../../images/search-svg.svg'

const SearchBlock = () => {
  return (
    <div className={styles.container}>
      <input type={'text'} className={styles.input} placeholder='Поиск' />
      <img src={searchIcon} alt='search' width='21px' height='21px' />
    </div>
  )
}

export default SearchBlock

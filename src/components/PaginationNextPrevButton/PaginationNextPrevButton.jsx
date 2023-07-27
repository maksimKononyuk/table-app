import styles from './styles.module.css'

const PaginationNextPrevButton = ({ isNext, handler }) => {
  return (
    <div className={styles.container} onClick={handler}>
      {isNext ? 'Далее' : 'Назад'}
    </div>
  )
}

export default PaginationNextPrevButton

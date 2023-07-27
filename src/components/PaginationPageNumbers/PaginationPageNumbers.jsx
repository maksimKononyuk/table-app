import styles from './styles.module.css'

const PaginationPageNumbers = ({ countOfPages = 5, currentPage = 1 }) => {
  const clickHandler = (index) => {
    console.log('Был выполене клик по кнопке', index)
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

import styles from './style.module.css'

const Table = () => {
  return (
    <div className={styles.container}>
      <table>
        <colgroup>
          <col span='1' className={styles.colId} />
          <col span='1' className={styles.colTitle} />
          <col span='1' className={styles.colDesk} />
        </colgroup>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Заголовок</th>
            <th>Описание</th>
          </tr>
          {Array.from(Array(10)).map((_, index) => (
            <tr key={index}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

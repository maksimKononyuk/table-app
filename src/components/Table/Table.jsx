import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, setCurrentData } from '../../state/appStateSlice'
import styles from './style.module.css'

const Table = () => {
  const dispath = useDispatch()
  const data = useSelector((state) => state.appState.currentData)
  useEffect(() => {
    dispath(getData())
  }, [dispath])

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
    <div className={styles.container}>
      <table>
        <colgroup>
          <col span='1' className={styles.colId} />
          <col span='1' className={styles.colTitle} />
          <col span='1' className={styles.colDesk} />
        </colgroup>
        <tbody>
          <tr>
            <th onClick={clichHandler}>ID</th>
            <th onClick={clichHandler}>Заголовок</th>
            <th onClick={clichHandler}>Описание</th>
          </tr>
          {Array.from(Array(10)).map((_, index) => {
            if (data && data[index]) {
              return (
                <tr key={index}>
                  <td>{data[index].id}</td>
                  <td>{data[index].title}</td>
                  <td>{data[index].body}</td>
                </tr>
              )
            } else
              return (
                <tr key={index}>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table

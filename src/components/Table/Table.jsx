import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../state/appStateSlice'
import styles from './style.module.css'
import TableHeadCollumn from '../TableHeadCollumn/TableHeadCollumn'

const Table = () => {
  const dispath = useDispatch()
  const data = useSelector((state) => state.appState.currentData)
  useEffect(() => {
    dispath(getData())
  }, [dispath])

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
            <TableHeadCollumn title={'ID'} />
            <TableHeadCollumn title={'Заголовок'} />
            <TableHeadCollumn title={'Описание'} />
          </tr>
          {Array.from(Array(10)).map((_, index) => {
            if (data && data[index]) {
              return (
                <tr key={index}>
                  <td className={styles.idTitle}>{data[index].id}</td>
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

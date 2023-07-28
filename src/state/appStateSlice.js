import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  totalCount: 0,
  countOfPages: 1,
  data: [],
  currentData: [],
  searchElem: null
}

export const appStateSllice = createSlice({
  name: 'appStateSlice',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
      state.currentData = state.data.slice(
        (state.currentPage - 1) * 10,
        state.currentPage * 10
      )
    },
    setData: (state, action) => {
      state.data = action.payload
      state.totalCount = action.payload.length
      state.countOfPages = Math.ceil(state.totalCount / 10)
      state.currentData = state.data.slice(
        (state.currentPage - 1) * 10,
        state.currentPage * 10
      )
    },
    setCurrentData: (state, action) => {
      state.currentData = action.payload
    },
    setSearchElem: (state, action) => {
      state.searchElem = action.payload
    }
  }
})

export const { setCurrentPage, setData, setCurrentData, setSearchElem } =
  appStateSllice.actions

export const getData = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    dispatch(setData(data))
  } catch (err) {
    console.log(
      'Ошибка при запросе данных, возможно отсутствует интернет-соединение'
    )
  }
}

export default appStateSllice.reducer

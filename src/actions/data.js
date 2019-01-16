const test_data = [
    {
        id: 1,
        name: 'Test 1'
    },
    {
        id: 2,
        name: 'Test 2'
    }
]

export const GET_DATA = "GET_DATA"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_ERROR = "GET_DATA_ERROR"

export const getData = () => (
  dispatch => {
    dispatch({ type: GET_DATA })
    setTimeout(() => {
        dispatch({ type: GET_DATA_SUCCESS, data: test_data })
        // dispatch({ type: GET_DATA_ERROR, err: "Error getting data" })
    })   
  }
)

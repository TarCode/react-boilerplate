import {
	GET_DATA,
	GET_DATA_SUCCESS,
	GET_DATA_ERROR,
} from '../actions/data'

import { merge } from 'lodash'

export default (
	state = { 
		loading: false,
		data: []
	}, 
	action
) => {
	switch (action.type) {
		case GET_DATA:
			return merge({}, state, {
                loading: true
            })
            
		case GET_DATA_SUCCESS:
			return merge({}, state, {
				loading: false,
                data: action.data
            })
            
		case GET_DATA_ERROR:
			return merge({}, state,{
				loading: false,
				err: action.err
			})
		default:
			return state
	}
}
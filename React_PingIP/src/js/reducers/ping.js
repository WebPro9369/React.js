
import { 
	PING_INIT,
	PING_REQUEST, PING_SUCCESS, PING_FAILURE 
} from '../constants/pingActionTypes';

const initialState = {
	isFetching: false,
	success: "",
	errors: []
};

export default function ping(state = initialState, action) {
	switch (action.type) {
		// init flags
		case PING_INIT:
			return Object.assign({}, state, {
				success: "Please Try..",
				errors: []
			});
		// login
		case PING_REQUEST:
			return Object.assign({}, state, {
				isFetching: true, 
				success: "Checking...",
				errors: []
			});
		case PING_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false, 
				success: "Operational", 
				errors: []
			});
		case PING_FAILURE:
			return Object.assign({}, state, {
				isFetching: false, 
				success: "Not responding", 
				errors: action.errors
			});

		default:
			return state;
	}
}
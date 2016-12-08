import { 
	PING_INIT, 
	PING_REQUEST, PING_SUCCESS, PING_FAILURE
} from '../constants/pingActionTypes';


function initParams() {
	return {
		type: PING_INIT
	}
}

/*
 * Ping
 */
function requestPing() {
	return {
		type: PING_REQUEST,
		isFetching: true
	}
}

function receivePing(success) {
	return {
		type: PING_SUCCESS,
		isFetching: false,
		success
	}
}

function pingError(errs) {
	return {
		type: PING_FAILURE,
		isFetching: false,
		errors: errs
	}
}

export function pingIP() {
	
	return dispatch => {
		dispatch(requestPing());
		var p = new Ping();
		p.ping("https://www.google.ca", function(data) {
			if(parseInt(data) > 2500){
				dispatch(pingError("Not responding"));
			} else {
				dispatch(receivePing("Operational"));
			}
		});
	}
}


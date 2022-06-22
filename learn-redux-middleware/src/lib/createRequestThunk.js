import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {

	const SUCEESS = `${type}_SUCEESS`;
	const FAILURE = `${type}_FAILURE`;

	return params => async dispatch => {
		dispatch({ type });
		try {
			const response = await request(params);
			dispatch({
				type : SUCEESS,
				payload : response.data
			});
			dispatch(finishLoading(type));
		} catch (e) {
			dispatch({
				type : FAILURE,
				payload : e,
				error : true
			});
			dispatch(startLoading(type));
			throw e;
		}
	};
}
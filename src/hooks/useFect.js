import { useState, useEffect } from 'react';
import { useReduce } from './useReduce';

const useFect = (url = '') => {
	// const [state, setState] = useState({isLoading: false, data: [], error: null});
	const [state, dispatch] = useReduce((state, action) => {
		console.log("action: ", action);
		switch (action.type) {
			case 'start_request':
				return {
					...state, isLoading: true
				};
				
			case 'success_request':
				return {
					...state, data: action.data, isLoading: false
				};
			case 'error_request':
				return {
					...state, isLoading: false, error: action.error
				}
			default:
				
		}
		return state;
	}, { isLoading: false, data: null, error: null });

	useEffect(() => {
		console.log("");

		(async () => {
			dispatch({
				type: 'start_request'
			});

			try {
				const response = await fetch(url);
				let data = await response.json();
				dispatch({
					type: 'success_request',
					data: data,
					isLoading: false
				})
			} catch (error) {
				dispatch({
					isLoading: false,
					type:'error_request',
					error: error
				})
			}

		})()
	}, [url]);

	return {
		isLoading: state.isLoading,
		data: state.data,
		error: state.error
	}
}

export {useFect};
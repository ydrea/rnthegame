import { useState, useEffect, useCallback } from 'react';
import { addToPoints, useSelector, useDispatch } from 'react-redux';
import QCard from './QCard';
import RCard from './RCard';
//
import { View, ScrollView } from 'react-native';
import { selectCount } from '../redux/counterSlice';
import { selectSculptures } from '../redux/dataSlice';
import { addOne, selectPoints } from '../redux/pointSlice';
function AGame() {
	const dispatch = useDispatch();
	//selectax
	const count = useSelector(selectCount);
	const sculptures = useSelector(selectSculptures);
	const sculpture = sculptures[`${count}`];
	const imeR = sculpture.name;
	console.log('ime:', imeR);
	const pointR = useSelector(selectPoints);
	console.log('pointR1:', pointR);
	// const checkR = useSelector(selectCheck);
	// console.log("check Redux", checkR);
	//local
	const [check, checkSet] = useState(false);
	const [query, querySet] = useState('');
	const [search, searchSet] = useState('');
	//control query
	const cleanUp = () => {
		querySet(query.trim());
		console.log('query:', query);
	};

	// //test block
	// const handleSubmit = useCallback(() => {
	// 	cleanUp();
	// 	searchSet(query);
	// 	if (query === imeR) {
	// 		console.log('=', search, imeR);
	// 		checkSet(true);
	// 		dispatch(addOne());
	// 		console.log('pointR2', pointR);
	// 	} else {
	// 		console.log('zilch');
	// 	}
	// }, [query]);
	// Updated handleSubmit function
	const handleSubmit = useCallback(() => {
		console.log('Submitting...');
		cleanUp();
		searchSet(query);

		if (query === imeR) {
			console.log('Query matches imeR:', query, imeR);
			checkSet(true);
			dispatch(addOne());
			console.log('pointR2', pointR);
		} else {
			console.log("Query doesn't match imeR:", query, imeR);
		}
	}, [query]);
	//a bit of CiP...
	// useEffect(() => {
	// 	querySet('');
	// 	checkSet(false);
	// }, [count]);

	useEffect(() => {
		console.log('Resetting query and check state...');
		querySet('');
		checkSet(false);
	}, [count]);
	//
	return (
		<ScrollView>
			<>
				{console.log('Rendering QCard with query:', query)}
				<QCard
					handleSubmit={handleSubmit}
					query={query}
					querySet={querySet}
				/>
				<View>
					{!check ? (
						<View></View>
					) : (
						<View>
							<RCard sculpture={sculpture} />
						</View>
					)}
				</View>
			</>
		</ScrollView>
	);
}

export default AGame;

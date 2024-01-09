import React, { useEffect, useRef } from 'react';
import MapView, {
	Callout,
	Marker,
	Polyline,
} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { selectSculptures } from '../redux/dataSlice';
import { selectCount } from '../redux/counterSlice';
//
export default function Map() {
	//selectass
	const count = useSelector(selectCount);
	// console.log(count);
	const sculptures = useSelector(selectSculptures);
	const cordinates = sculptures.map(m => m.coordinate);
	//select it
	const sculpture = sculptures[`${count}`];
	const marker = sculpture.coordinate;
	//
	const tal = sculpture.coordinate.latitude;
	const nol = sculpture.coordinate.longitude;
	console.log(tal);
	//
	const _map = useRef(null);

	useEffect(() => {
		if (_map.current) {
			const newCamera = {
				center: { ...marker },
				zoom: 12,
				altitude: 0,
				pitch: 0,
				heading: 0,
			};
			_map.current.animateCamera(newCamera, { duration: 4000 });
		}
	}, [count]);
	//
	return (
		<View style={styles.container}>
			<MapView
				//googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY
				style={styles.map}
				ref={_map}
				showsUserLocation={true}
				showsMyLocationButton={true}
				minZoomLevel={0}
				maxZoomLevel={20}
				region={{
					...marker,
					latitudeDelta: 0.016,
					longitudeDelta: 0.003,
				}}
				camera={{
					...marker,
					zoom: 0,
					altitude: 0,
					pitch: 0,
					heading: 0,
				}}
			>
				{cordinates.map((i, index) => (
					<Marker
						key={index + 1}
						coordinate={{
							latitude: i.latitude,
							longitude: i.longitude,
						}}
						pinColor='#31328f'
					>
						<Callout>
							<Text>{index}</Text>
						</Callout>
					</Marker>
				))}

				<Polyline
					coordinates={cordinates}
					geodesic={true}
					strokeWidth={6}
					strokeColor={'#33128f'}
				/>
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});

// const CMarker = () => (
//   <View
//     style={{
//       paddingVertical: 10,
//       paddingHorizontal: 30,
//       backgroundColor: "#31328f",
//       borderColor: "#eee",
//       borderRadius: 5,
//       elevation: 10,
//     }}
//   >
//     <Text style={{ color: "#fff" }}>{index}</Text>
//   </View>
// );

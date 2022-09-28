import React, { useState, useEffect } from "react";
import MapView, {
  Callout,
  Marker,
  Animated,
  AnimatedRegion,
} from "react-native-maps";
import * as Location from "expo-location";
// import * as Permissions from "expo-permissions";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
//

export default function MapScreen() {
  const [locationResult, setLocation] = useState(null);
  const [mapRegion, setRegion] = useState(null);
  const [hasLocationPermissions, setLocationPermission] = useState(false);

  useEffect(() => {
    const getLocationAsync = async () => {
      //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
      //   if ("granted" !== status) {
      //     setLocation("Permission to access location was denied");
      //   } else {
      //     setLocationPermission(true);
      //   }

      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation(JSON.stringify({ latitude, longitude }));

      // Center the map on the location we just fetched.
      setRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        []
      );
    };

    getLocationAsync();
  });

  if (locationResult === null) {
    return <Text>Finding your current location...</Text>;
  }

  if (hasLocationPermissions === false) {
    return <Text>Location permissions are not granted.</Text>;
  }

  if (mapRegion === null) {
    return <Text>Map region doesn't exist.</Text>;
  }

  return (
    <MapView
      style={styles.container}
      region={mapRegion}
      initialRegion={{
        latitude: 39.97343096953564,
        latitudeDelta: 0.0922,
        longitude: -75.12520805829233,
        longitudeDelta: 0.0421,
      }}
      onRegionChange={(region) => setRegion(region)}
    >
      <Marker
        title="YIKES, Inc."
        description="Web Design and Development"
        coordinate={{ latitude: 39.969183, longitude: -75.133308 }}
      />
    </MapView>
  );
}

// MapScreen.navigationOptions = {
//   header: null,
// };

// // drive
useEffect(() => {
  // if (map.current) {
  //   const newCamera = {
  //     center: { latitude: lat, longitude: lng },
  //     pitch: 0,
  //     zoom: 50,
  //     heading: 0,
  //     altitude: 100,
  //   };
  //   console.log(newCamera);

  //   map.current.animateCamera(newCamera, { duration: 2000 });
  // }

  const zoomMarker = { lat, lng };
  // regionSet(zoomMarker);
  map.current.animateToRegion(zoomMarker, 2000);
  console.log(map.current);
}, [count]);
ref = { map };
// initialCamera={{
//   center: { latitude: 45.8, longitude: 16 },
//   pitch: 0,
//   zoom: 12,
//   heading: 0,
//   altitude: 0,
// }}
// onRegionChange={(region) => regionSet(region)}

// const moveTo = async (m) => {
//   const newCamera = await _map.current.getCamera().catch((e) => {
//     console.log("erra", e);
//   });
//   if (newCamera) {
//     console.log(newCamera);
//     newCamera.center = m;
//     _map.current.animateCamera(newCamera, { duration: 2211 });
//   }
// };

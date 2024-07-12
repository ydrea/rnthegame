import React, { useEffect, useRef } from "react";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { selectSculptures } from "../redux/dataSlice";
import { selectCount } from "../redux/counterSlice";

export default function Map() {
  const count = useSelector(selectCount);
  const sculptures = useSelector(selectSculptures);

  // Check for valid sculptures and count
  if (!sculptures || sculptures.length === 0 || count >= sculptures.length) {
    return null;
  }

  const coordinates = sculptures.map((m) => m.coordinate);
  const sculpture = sculptures[count];
  const marker = sculpture.coordinate;

  // Ensure marker has valid coordinates
  if (!marker || marker.latitude == null || marker.longitude == null) {
    return null;
  }

  const _map = useRef(null);

  useEffect(() => {
    if (_map.current && marker) {
      const newCamera = {
        center: marker,
        zoom: 15,
        altitude: 0,
        pitch: 0,
        heading: 0,
      };
      _map.current.animateCamera(newCamera, { duration: 4000 });
    }
  }, [count, marker]);

  return (
    <View style={styles.container}>
      <MapView
        provider='google'
        googleMapsApiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}
        style={styles.map}
        ref={_map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        minZoomLevel={0}
        maxZoomLevel={20}
        region={{
          latitude: marker.latitude,
          longitude: marker.longitude,
          latitudeDelta: 0.016,
          longitudeDelta: 0.003,
        }}
        camera={{
          center: marker,
          zoom: 15,
          altitude: 0,
          pitch: 0,
          heading: 0,
        }}
      >
        {coordinates.map((coord, index) => (
          <Marker
            key={index}
            coordinate={coord}
            pinColor="#31328f"
          >
            <Callout>
              <Text>{index}</Text>
            </Callout>
          </Marker>
        ))}

        <Polyline
          coordinates={coordinates}
          geodesic={true}
          strokeWidth={6}
          strokeColor={"#33128f"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

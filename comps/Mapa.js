import React, { useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { selectMarkers, selectSculptures } from "../redux/dataSlice";
import { selectCount } from "../redux/counterSlice";
//
export default function Map() {
  //selectass
  const count = useSelector(selectCount);
  console.log(count);
  const sculptures = useSelector(selectSculptures);
  const coordinates = sculptures.map((m) => m.coordinate);
  console.log("coo", coordinates);
  //select it
  const sculpture = sculptures[`${count}`];
  const marker = sculpture.coordinate;
  console.log(marker);
  const lat = sculpture.coordinate.latitude;
  const lng = sculpture.coordinate.longitude;
  console.log(lat, lng);

  const [region, regionSet] = useState({
    latitude: 45.8125,
    longitude: 15.9824,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.1421,
  });

  function onRegionChange(region) {
    regionSet({ region });
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChange={onRegionChange}
      >
        {coordinates.map((i, index) => (
          <Marker
            coordinate={{
              latitude: i.latitude,
              longitude: i.longitude,
            }}
            pinColor="#31328f"
          >
            <Callout>
              <Text>{index}</Text>
            </Callout>
          </Marker>
        ))}
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

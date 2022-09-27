import React, { useEffect, useState, useRef } from "react";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
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
  //select it
  const sculpture = sculptures[`${count}`];
  const marker = sculpture.coordinate;
  //
  const _map = useRef(null);

  useEffect(() => {
    if (_map.current) {
      //prettier-ignore
      const newCamera = {center: {...marker}, zoom: 88};
      _map.current.animateCamera(newCamera, { duration: 7000 });
    }
  }, [count]);
  //
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={_map}
        region={{
          ...marker,
          latitudeDelta: 0.003,
          longitudeDelta: 0.001,
        }}
      >
        {coordinates.map((i, index) => (
          <Marker
            key={index + 1}
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

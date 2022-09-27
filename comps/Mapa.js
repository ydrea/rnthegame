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
  // console.log("coo", coordinates);
  //select it
  const sculpture = sculptures[`${count}`];
  const marker = sculpture.coordinate;
  // console.log(marker);
  const lat = sculpture.coordinate.latitude;
  const lng = sculpture.coordinate.longitude;
  // console.log(lat, lng);
  const [fcam, fcamSet] = useState(true);
  //
  const _map = useRef(null);
  //
  const newCamera = {
    center: {
      ...marker,
    },
    zoom: 28,
    pitch: 0,
  };

  useEffect(() => {
    if (_map.current && fcam) {
      _map.current.animateCamera(newCamera, { duration: 2000 });
    }
    console.log("vir", marker);
  }, [count]);
  //
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={_map}
        region={{
          // latitude: 45.8,
          // longitude: 15.981,
          ...marker,
          latitudeDelta: 0.0663,
          longitudeDelta: 0.02001,
        }}
        camera={{ ...marker, zoom: 10 }}
        mapType={"satellite"}
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

const CMarker = () => (
  <View
    style={{
      paddingVertical: 10,
      paddingHorizontal: 30,
      backgroundColor: "#31328f",
      borderColor: "#eee",
      borderRadius: 5,
      elevation: 10,
    }}
  >
    <Text style={{ color: "#fff" }}>{index}</Text>
  </View>
);

import { useState, useRef } from "react";

import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MapView, { AnimatedRegion, MarkerAnimated } from "react-native-maps";
export default Play = (props) => {
  const markerLatitude = 32.5983;
  const markerLongitude = 44.0175;
  //changed from useState to useRef
  const mapRef = useRef(null);
  const [myMarker, setMyMarker] = useState(null);
  const [coordinate, setCoordinate] = useState(
    new AnimatedRegion({
      latitude: markerLatitude,
      longitude: markerLongitude,
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
    })
  );

  function animateMarkerAndCamera() {
    let newCoordinate = {
      latitude: 32.601,
      longitude: 44.0172,
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
    };
    //camera will position itself to these coordinates.
    const newCamera = {
      center: {
        latitude: 32.601,
        longitude: 44.0172,
      },
      pitch: 0,
      heading: 0,
      zoom: 17,
    };

    if (myMarker) {
      myMarker.animateMarkerToCoordinate(newCoordinate, 4000);
      //camera type, `newCamera`, used inside animateCamera
      mapRef.current.animateCamera(newCamera, { duration: 4000 });
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef} //There is also change here
        initialRegion={{
          latitude: 32.5983,
          longitude: 44.0175,
          latitudeDelta: 0.012,
          longitudeDelta: 0.012,
        }}
        //These are newly added
        pitchEnabled={false}
        // zoomEnabled={false}
      >
        <MarkerAnimated
          ref={(marker) => {
            setMyMarker(marker);
          }}
          image={require("../assets/rsz_icon-16.png")}
          coordinate={coordinate}
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => animateMarkerAndCamera()}
          style={[styles.bubble, styles.button]}
        >
          <Text>Animate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: "stretch",
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
});

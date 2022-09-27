import { useState, useRef } from "react";
import MapView from "react-native-maps";

const PlayScreen = (props) => {
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
      //zoom: 17  –Use it when required
    };
    if (myMarker) {
      myMarker.animateMarkerToCoordinate(newCoordinate, 4000);
      //camera type, `newCamera`, used inside animateCamera
      mapRef.current.animateCamera(newCamera, { duration: 4000 });
    }
  }
  return <MapView></MapView>;
};
export default PlayScreen;
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

import { useState, useCallback, memo } from "react";
import { View, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: center,
  },
});
const center = {
  lat: 45.8144,
  lng: 15.9814,
};

export default function Map() {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "REACT_APP_API_KEY",
  // });

  return (
    <View style={styles.body}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        // preventGoogleFonts
      ></GoogleMap>
    </View>
  );
}

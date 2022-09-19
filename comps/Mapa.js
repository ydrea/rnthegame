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
  return (
    <View style={styles.body}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </View>
  );
}

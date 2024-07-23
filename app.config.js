export default ({ config })  => ({
    ...config,
    name: config.name ?? "thegamezagreb",
    slug: config.slug ?? "thegamezagreb",
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#31328f"
      },
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY
        }
      }
    }
  });
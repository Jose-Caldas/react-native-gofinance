import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import { Register } from "./src/pages/Register";
// import { Dashboard } from "./src/pages/Dashboard";
import theme from "./src/global/styles/theme";
// import { Category } from "./src/components/Form/Category";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        {/* <Dashboard /> */}
        <Register />
        {/* <Category />: */}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F0F2F5",
  },
});

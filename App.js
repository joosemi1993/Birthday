import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import Auth from "./src/components/Auth";

import firebase from "./src/utils/firebase";
import "firebase/auth";
import ListBirthDay from "./src/components/ListBirthDay";

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {user ? <ListBirthDay /> : <Auth />}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#15212b",
    height: "100%",
  },
});

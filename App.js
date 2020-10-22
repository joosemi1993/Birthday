import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet, LogBox } from "react-native";
import { decode, encode } from "base-64";

import Auth from "./src/components/Auth";

import firebase from "./src/utils/firebase";
import "firebase/auth";
import ListBirthDay from "./src/components/ListBirthDay";

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

LogBox.ignoreLogs(["Setting a timer"]);

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

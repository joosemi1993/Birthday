import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StatusBar, StyleSheet, View, Button } from "react-native";

import Auth from "./src/components/Auth";

import firebase from "./src/utils/firebase";
import "firebase/auth";

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
        {user ? <Logout /> : <Auth />}
      </SafeAreaView>
    </>
  );
}

function Logout() {
  const logout = () => {
    firebase.auth().signOut();
  }
  return (
    <View>
      <Text>Estas logeado</Text>
      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#15212b",
    height: "100%",
  },
});

import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
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
    <SafeAreaView>
      {user ? <Text>Estas logeado</Text> : <Text>No estas logeado</Text>}
    </SafeAreaView>
  );
}

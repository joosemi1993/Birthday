import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddBirthDay from "./AddBirthDay";
import ActionBar from "./ActionBar";

export default function ListBirthDay() {
  const [showList, setShowList] = useState(true);

  return (
    <View style={styles.container}>
      {showList ? (
        <>
          <Text>LIST</Text>
          <Text>LIST</Text>
          <Text>LIST</Text>
          <Text>LIST</Text>
          <Text>LIST</Text>
          <Text>LIST</Text>
        </>
      ) : (
        <AddBirthDay />
      )}
      <ActionBar showList={showList} setShowList={setShowList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
});

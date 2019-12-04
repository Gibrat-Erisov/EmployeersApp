import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { w, h } from "../../configs/constans";
import Icon from "react-native-vector-icons/FontAwesome";

export default Details = props => {
  const { container, textStyle, box, iconStyle } = styles;
  const { name, age, salary } = props;
  return (
    <View style={container}>
      <Icon name="user-circle" size={90} style={iconStyle} />
      <View style={box}>
        <Text style={textStyle}>Name: {name}</Text>
      </View>
      <View style={box}>
        <Text style={textStyle}>Age: {age}</Text>
      </View>
      <View style={box}>
        <Text style={textStyle}>Salary: {salary}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: w * 0.9, alignSelf: "center", marginTop: w * 0.1 },
  textStyle: { fontSize: 18, fontWeight: "bold" },
  box: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: w * 0.05,
    paddingHorizontal: w * 0.02,
    paddingVertical: w * 0.03,
    borderRadius: 10,
    flexDirection: "row"
  },
  iconStyle: {
    alignSelf: "center"
  }
});

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView
} from "react-native";
import { w, h } from "../../configs/constans";
import Icon from "react-native-vector-icons/FontAwesome";

export default Details = props => {
  const {
    container,
    textStyle,
    box,
    iconStyle,
    textInputStyle,
    textErrorStyle,
    buttonStyle
  } = styles;
  const { name, age, salary, InputChange, errors, handleSubmit } = props;
  return (
    <KeyboardAvoidingView>
      <View style={container}>
        <Icon name="user-circle" size={90} style={iconStyle} />
        <View>
          <Text style={textErrorStyle}>{errors.errorName}</Text>
          <View style={box}>
            <Text style={textStyle}>Name:</Text>
            <TextInput
              onChangeText={text => InputChange(text, "name")}
              style={textInputStyle}
              value={name}
              name="name"
            />
          </View>
        </View>
        <View>
          <Text style={textErrorStyle}>{errors.errorAge}</Text>
          <View style={box}>
            <Text style={textStyle}>Age:</Text>
            <TextInput
              onChangeText={text => InputChange(text, "age")}
              style={textInputStyle}
              value={age}
              name="age"
            />
          </View>
        </View>
        <View>
          <Text style={textErrorStyle}>{errors.errorSalary}</Text>
          <View style={[box, { marginBottom: 30 }]}>
            <Text style={textStyle}>Salary:</Text>
            <TextInput
              onChangeText={text => InputChange(text, "salary")}
              style={textInputStyle}
              value={salary}
              name="salary"
            />
          </View>
        </View>
        <Button title="Create" style={buttonStyle} onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { width: w * 0.9, alignSelf: "center", marginTop: w * 0.1 },
  textStyle: { fontSize: 18, fontWeight: "bold", width: w * 0.15 },
  textErrorStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    position: "absolute"
  },
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
  },
  textInputStyle: {
    paddingHorizontal: w * 0.015,
    paddingVertical: w * 0.001,
    fontSize: 18,
    width: w * 0.7,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5
  },
  buttonStyle: {
    marginTop: w * 0.2,
    color: "#f194ff",
    alignSelf: "center"
  }
});

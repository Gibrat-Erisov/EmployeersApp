import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { w, h } from "../../configs/constans";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Header extends Component {
  render() {
    const { container, textStyle, iconStyle, leftButtonStyle } = styles;
    const {
      title,
      leftIcon,
      onPressBack,
      onPressUpdate,
      onPressDelete,
      UpdateIcon,
      DeleteIcon
    } = this.props;
    return (
      <View style={container}>
        <TouchableOpacity onPress={onPressBack}>
          <Icon
            name={leftIcon}
            size={25}
            color="#fff"
            style={[
              leftButtonStyle,
              {
                paddingLeft: leftIcon ? 5 : 0,
                paddingRight: leftIcon ? 10 : 0
              }
            ]}
          />
        </TouchableOpacity>

        <Text numberOfLines={1} elipsizeMode="tail" style={textStyle}>
          {title}
        </Text>

        <TouchableOpacity onPress={onPressUpdate}>
          <Icon
            name={UpdateIcon}
            size={25}
            color="#fff"
            style={[
              leftButtonStyle,
              {
                paddingLeft: leftIcon ? 0 : 70,
                paddingRight: leftIcon ? 30 : 0
              }
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDelete}>
          <Icon
            name={DeleteIcon}
            size={25}
            color="#fff"
            style={[leftButtonStyle]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: w * 0.23,
    backgroundColor: "#30d0fe",
    paddingTop: 40,
    paddingLeft: 20,
    flexDirection: "row"
    // justifyContent: "space-around"
  },

  textStyle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    width: w * 0.6
  },

  iconStyle: {
    color: "#fff"
  },

  leftButtonStyle: {
    paddingTop: 10
  }
});

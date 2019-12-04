import React, { Component } from "react";
import Header from "../../components/header";
import { View } from "react-native";
import UpdateForm from "../../components/Update";

export default class ListView extends Component {
  render() {
    const { navigation } = this.props;
    const id = this.props.navigation.state.params;

    return (
      <View>
        <Header
          title="Update"
          leftIcon="chevron-left"
          onPressBack={() => navigation.goBack()}
        />
        <UpdateForm id={id} />
      </View>
    );
  }
}

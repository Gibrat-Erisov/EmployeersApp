import React, { Component } from "react";
import Header from "../../components/header";
import { View } from "react-native";
import CreateForm from "../../components/CreateForm";

export default class ListView extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Header
          title="New"
          leftIcon="chevron-left"
          onPressBack={() => navigation.goBack()}
        />
        <CreateForm />
      </View>
    );
  }
}

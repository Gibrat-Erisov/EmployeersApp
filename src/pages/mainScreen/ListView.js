import React, { Component } from "react";
import Header from "../../components/header";
import { View } from "react-native";
import ListEmployeers from "../../components/ListEmployeers";
import { DETAIL_VIEW, NEW_RECORD } from "../routes";

export default class ListView extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header
          title="Employeers List"
          UpdateIcon="user-plus"
          onPressUpdate={() => navigation.navigate(NEW_RECORD)}
        />
        <ListEmployeers navigation={navigation} detail={DETAIL_VIEW} />
      </View>
    );
  }
}

import React, { Component } from "react";
import Header from "../../components/header";
import { View } from "react-native";
import Details from "../../components/Details";
import { UPDATE_RECORD, LIST_VIEW } from "../routes";
import { employeersAPI } from "../../reducer/API/employeersAPI";
import { Alert } from "react-native";

export default class ListView extends Component {
  render() {
    const { navigation } = this.props;
    const id = this.props.navigation.state.params;

    return (
      <View>
        <Header
          title="Detail"
          leftIcon="chevron-left"
          UpdateIcon="edit"
          DeleteIcon="trash"
          onPressBack={() => navigation.goBack()}
          onPressUpdate={() => navigation.navigate(UPDATE_RECORD, id)}
          onPressDelete={() =>
            employeersAPI.deleteEmployee(id).then(response => {
              Alert.alert(response.success.text);
              navigation.navigate(LIST_VIEW);
            })
          }
        />
        <Details navigation={navigation} id={id} />
      </View>
    );
  }
}

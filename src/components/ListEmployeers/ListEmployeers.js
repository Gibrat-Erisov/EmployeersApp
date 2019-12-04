import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { w, h } from "../../configs/constans";

export default ListEmployeers = props => {
  const { h1, container, wrapper } = styles;
  const { employeers, navigation, detail } = props;

  return (
    <ScrollView>
      <View style={wrapper}>
        {employeers.map(employees => {
          return (
            <TouchableOpacity
              key={employees.id}
              onPress={() => navigation.navigate(detail, employees.id)}
            >
              <View style={container}>
                <Text style={h1}>{employees.employee_name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 18
  },

  container: {
    // backgroundColor: "gold",
    borderColor: "gray",
    borderBottomWidth: 1,
    width: "100%",

    paddingVertical: w * 0.025,
    paddingHorizontal: w * 0.05
  },
  wrapper: {
    marginTop: w * 0.03,
    marginBottom: w * 0.4
  }
});

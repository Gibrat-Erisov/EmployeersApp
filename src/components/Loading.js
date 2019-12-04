import React from "react";
import { Image } from "react-native";
import { w, h } from "../configs/constans";

export default Loading = () => {
  return (
    <Image
      style={{
        width: 66,
        height: 58,
        alignSelf: "center",
        marginTop: h / 3
      }}
      source={require("../images/preloader.gif")}
    />
  );
};

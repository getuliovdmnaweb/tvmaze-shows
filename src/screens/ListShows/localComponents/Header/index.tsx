import React from "react";
import { Image, View } from "react-native";
import { Input } from "../../../../components";
import { logo_uri } from "../../../../constants";
import { styles } from "./styles";

interface HeaderProps {
  containerStyle?: {};
}

const Header: React.FC<HeaderProps> = ({ containerStyle }) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <Image
        style={styles.image}
        source={{
          uri: logo_uri,
        }}
      />
      <Input />
    </View>
  );
};

export default Header;

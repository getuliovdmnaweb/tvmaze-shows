import React from "react";
import { Image, View } from "react-native";
import { logo_uri } from "../../constants";
import { styles } from "./styles";

interface HeaderProps {
  containerStyle?: {};
  children: React.ReactElement;
}

const Header: React.FC<HeaderProps> = ({ containerStyle, children }) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <Image
        style={styles.image}
        source={{
          uri: logo_uri,
        }}
      />
      {children}
    </View>
  );
};

export default Header;

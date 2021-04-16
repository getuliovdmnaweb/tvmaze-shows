import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

const Input: React.FC = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={{ flex: 3 }}
        placeholderTextColor="#CACACA"
        placeholder="Search Shows"
      />
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

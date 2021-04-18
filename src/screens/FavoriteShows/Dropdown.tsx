import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

interface Props {
  onOpen: () => void;
}

const Dropdown: React.FC<Props> = ({ onOpen }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <TouchableOpacity
        onPress={() => {
          setToggleDropdown((prevState) => !prevState);
          onOpen();
        }}
        style={styles.dropDown}
      >
        <Text style={styles.dropdownText}>Sort Alphabetically</Text>
        <MaterialIcons
          name={toggleDropdown ? "keyboard-arrow-down" : "keyboard-arrow-right"}
          size={24}
          color="white"
        />
      </TouchableOpacity>
      {toggleDropdown ? (
        <View style={styles.dropdownSelect}>
          <TouchableOpacity
            onPress={() => console.log("Ascending")}
            style={styles.dropdownOption}
          >
            <Text style={styles.dropdownOptionText}>Ascending Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Descending")}
            style={{ padding: 10 }}
          >
            <Text style={styles.dropdownOptionText}>Descending Sort</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Dropdown;

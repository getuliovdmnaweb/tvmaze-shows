import React, { useCallback, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { placeholder_blue } from "../../constants";
import { useDispatch } from "react-redux";
import { fetchSearchedShows } from "../../redux/actions";

const initialInputValue = "";

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(initialInputValue);
  const dispatch = useDispatch();

  const clearInput = useCallback(() => {
    setInputValue(initialInputValue);
  }, []);

  const onSubmit = () => {
    dispatch(fetchSearchedShows(inputValue));
    clearInput();
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={{ flex: 3 }}
        value={inputValue}
        onChangeText={setInputValue}
        placeholderTextColor={placeholder_blue}
        placeholder="Search Shows"
        onSubmitEditing={onSubmit}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.iconButton}>
        <MaterialIcons name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

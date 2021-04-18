import React, { useCallback, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { placeholder_blue } from "../../constants";
import { useDispatch } from "react-redux";
import { fetchSearchedShows } from "../../redux/actions";

const initialInputValue = "";

interface Props {
  onFetch: (inputValue: string) => void;
}

const Input: React.FC<Props> = ({ onFetch }) => {
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  const clearInput = useCallback(() => {
    setInputValue(initialInputValue);
  }, []);

  const onSubmit = () => {
    onFetch(inputValue);
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
